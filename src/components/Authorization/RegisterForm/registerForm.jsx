import React from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { signup } from "../../../redux/auth/auth-operation";
import { selectIsLogin } from "../../../redux/auth/autSelectors";
import { useError } from "../../../shared/useError/useError";

import {
  FormBody,
  Title,
  Item,
  Input,
  Button,
  Error,
  Hint,
  HintLink,
  FormHead,
} from "../css/Forms.styled";

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(selectIsLogin);
  const registerError = useError();
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
    } else if (value.length < 7) {
      error = "Password must be min 7 characters long.";
    } else if (value.length > 32) {
      error = "Password must be max 32 characters long.";
    } else if (value.includes(" ")) {
      error = "Password can't includes spase";
    } else if (!/(?=.*[0-9])/.test(value)) {
      error = "Must contain min one number.";
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

  function validateName(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[a-zA-Z]+$/i.test(value)) {
      error = "Invalid name";
    }
    return error;
  }

  function validateCity(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/(^[A-Z][a-z]+,[ ]{1}[A-Z][a-z]+$)/.test(value)) {
      error = "Invalid City State";
    }
    return error;
  }

  function validatePhone(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/(^\+380(\d{9})$)/.test(value)) {
      error = "Invalid Phone Number";
    }
    return error;
  }
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
    <FormBody>
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
        {({ errors, touched, values, isValid }) => (
          <Form>
            <FormHead>
              <Title>Registration</Title>
              {registerError && <Error>{registerError.message}</Error>}
            </FormHead>
            {isFirstStep && (
              <Item>
                <Input
                  name="email"
                  placeholder="Email (*required)"
                  validate={validateEmail}
                />
                {errors.email && touched.email && <Error>{errors.email}</Error>}
              </Item>
            )}
            {isFirstStep && (
              <Item>
                <Input
                  name="password"
                  type="password"
                  id="password"
                  placeholder="Password (*required)"
                  validate={validatePassword}
                />
                {errors.password && touched.password && (
                  <Error>{errors.password}</Error>
                )}
              </Item>
            )}
            {isFirstStep && (
              <Item>
                <Input
                  name="confirmPassword"
                  type="password"
                  id="confirmPassword"
                  placeholder="Confirm Password"
                  validate={(value) =>
                    validateConfirmPassword(values.password, value)
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <Error>{errors.confirmPassword}</Error>
                )}
              </Item>
            )}
            {!isFirstStep && (
              <Item>
                <Input name="name" placeholder="Name" validate={validateName} />
                {errors.name && touched.name && <Error>{errors.name}</Error>}
              </Item>
            )}
            {!isFirstStep && (
              <Item>
                <Input
                  name="city"
                  placeholder="City, State"
                  validate={validateCity}
                />
                {errors.city && touched.city && <Error>{errors.city}</Error>}
              </Item>
            )}
            {!isFirstStep && (
              <Item>
                <Input
                  name="phone"
                  placeholder="+3801234567"
                  validate={validatePhone}
                />
                {errors.phone && touched.phone && <Error>{errors.phone}</Error>}
              </Item>
            )}
            {isFirstStep && (
              <Button
                type="button"
                id="nextButton"
                onClick={() => {
                  if (
                    !errors.email &&
                    !errors.password &&
                    !errors.confirmPassword
                  ) {
                    setIsFirstStep(!isFirstStep);
                  }
                }}
              >
                Next
              </Button>
            )}
            {!isFirstStep && <Button type="submit">Register</Button>}
            {!isFirstStep && (
              <Button
                type="button"
                onClick={() => {
                  setIsFirstStep(!isFirstStep);
                }}
              >
                Back
              </Button>
            )}
            <Hint>
              Already have an account? <HintLink to={"/login"}> Login</HintLink>
            </Hint>
          </Form>
        )}
      </Formik>
    </FormBody>
  );
};
