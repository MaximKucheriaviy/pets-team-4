import React from "react";
import { Formik, Form, Field } from "formik";

import css from "./registerForm.module.css";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { signup } from "../../../redux/auth/auth-operation";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../../../redux/auth/autSelectors";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(selectIsLogin);
  const [isFirstStep, setIsFirstStep] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");

  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }
    return error;
  }

  function validatePassword(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (value.length < 8) {
      error = "Password must be 8 characters long.";
    } else if (!/(?=.*[0-9])/.test(value)) {
      error = "*Invalid password. Must contain one number.";
    }
    return error;
  }

  const validateConfirmPassword = (pass, value) => {
    let error;
    if (!value) {
      error = "Confirm password";
    } else if (pass !== value) {
      error = "Not the same!";
    }
    return error;
  };

  const handleSubmit = (values) => {
    const { name, email, password, city, phone } = values;

    onRegister({ name, email, password, city, phone });
    setName("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    setCity("");
    setPhone("");
  };

  const onRegister = (data) => {
    dispatch(signup(data));
  };

  if (isUserLogin) {
    return <Navigate to={"/news"} />;
  }

  return (
    <>
      <div className={css.registerFormWrapper}>
        <h2>Registration</h2>
        <div className={css.registerFormBody}>
          <Formik
            initialValues={{
              email,
              password,
              confirmPassword,
              name,
              city,
              phone,
            }}
            onSubmit={(values) => {
              handleSubmit(values);
            }}
          >
            {({ errors, touched, values, isValidating }) => (
              <Form className={css.registerForm}>
                {isFirstStep && (
                  <Field
                    className={css.registerFormItem}
                    name="email"
                    placeholder="Email (*required)"
                    validate={validateEmail}
                  />
                )}
                {isFirstStep && errors.email && touched.email && (
                  <div>{errors.email}</div>
                )}
                {isFirstStep && (
                  <Field
                    className={css.registerFormItem}
                    name="password"
                    placeholder="Password (*required)"
                    validate={validatePassword}
                  />
                )}

                {isFirstStep && errors.password && touched.password && (
                  <div>{errors.password}</div>
                )}

                {isFirstStep && (
                  <Field
                    className={css.registerFormItem}
                    name="confirmPassword"
                    placeholder="Confirm Password"
                    validate={(value) =>
                      validateConfirmPassword(values.password, value)
                    }
                  />
                )}

                {isFirstStep &&
                  errors.confirmPassword &&
                  touched.confirmPassword && (
                    <div>{errors.confirmPassword}</div>
                  )}

                {!isFirstStep && (
                  <Field
                    className={css.registerFormItem}
                    name="name"
                    placeholder="Name"
                  />
                )}

                {!isFirstStep && (
                  <Field
                    className={css.registerFormItem}
                    name="city"
                    placeholder="City"
                  />
                )}

                {!isFirstStep && (
                  <Field
                    className={css.registerFormItem}
                    name="phone"
                    placeholder="Phone Number"
                  />
                )}

                {isFirstStep && (
                  <button
                    type="button"
                    className={css.registerFormButton}
                    onClick={() => {
                      setIsFirstStep(!isFirstStep);
                    }}
                  >
                    Next
                  </button>
                )}
                {!isFirstStep && (
                  <button type="submit" className={css.registerFormButton}>
                    Register
                  </button>
                )}

                {!isFirstStep && (
                  <button
                    type="button"
                    className={css.registerFormButton}
                    onClick={() => {
                      setIsFirstStep(!isFirstStep);
                    }}
                  >
                    Back
                  </button>
                )}
              </Form>
            )}
          </Formik>
        </div>
        <p>Already have an account?</p> <Link to={"/login"}> Login</Link>
      </div>
    </>
  );
};
