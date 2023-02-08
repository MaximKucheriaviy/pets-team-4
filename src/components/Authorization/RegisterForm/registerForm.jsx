import React from "react";
import { Formik, Form } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useTranslation } from 'react-i18next';
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
	const { t} = useTranslation();
  function validateEmail(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(value)) {
      error = "Invalid email address";
    }

    if (error) {
      setButtonDisabledTo(true);
      return error;
    } else {
      setButtonDisabledTo(false);
    }
  }

  function validatePassword(value) {
    let error;
    if (!value) {
      error = "Required";
    } else if (value.length < 8) {
      error = "Password must be 8 characters long.";
    } else if (!/(?=.*[0-9])/.test(value)) {
      error = "Must contain min one number.";
    }
    if (error) {
      setButtonDisabledTo(true);
      setConfirmPassworFieldDisabledTo(true);
      return error;
    } else {
      setButtonDisabledTo(false);
      setConfirmPassworFieldDisabledTo(false);
    }
  }

  const validateConfirmPassword = (pass, value) => {
    let error;
    if (!value) {
      error = "Confirm password";
    } else if (pass !== value) {
      error = "Not the same!";
    }
    if (error) {
      setButtonDisabledTo(true);
      return error;
    } else {
      setButtonDisabledTo(false);
    }
  };

  function setButtonDisabledTo(state) {
    const currentForm = document.querySelector("Form");
    const currentButtons = currentForm.querySelectorAll("button");
    currentButtons.forEach((button) => (button.disabled = state));
  }

  function setConfirmPassworFieldDisabledTo(state) {
    const confirmField = document.getElementById("confirmPassword");
    confirmField.disabled = state;
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

  useEffect(() => {
    setButtonDisabledTo(true);
    setConfirmPassworFieldDisabledTo(true);
  }, []);

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
              <Title>	{t("registration")}</Title>
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
                <Input name="name" placeholder="Name" />
              </Item>
            )}
            {!isFirstStep && (
              <Item>
                <Input name="city" placeholder="City" />
              </Item>
            )}
            {!isFirstStep && (
              <Item>
                <Input name="phone" placeholder="Phone Number" />
              </Item>
            )}
            {isFirstStep && (
              <Button
                type="button"
                id="nextButton"
                onClick={() => {
                  setIsFirstStep(!isFirstStep);
                }}
              >
              {t("next")}
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
                 {t("back")}
              </Button>
            )}
            <Hint>
              {t("haveAc")} <HintLink to={"/login"}>	{t("login")}</HintLink>
            </Hint>
          </Form>
        )}
      </Formik>
    </FormBody>
  );
};
