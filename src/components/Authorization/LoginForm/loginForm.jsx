import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import { Formik, Form } from "formik";

import { selectIsLogin } from "../../../redux/auth/autSelectors";
import { logIn } from "../../../redux/auth/auth-operation";

import { useError } from "../../../shared/useError/useError";

import {
  FormBody,
  FormHead,
  Title,
  Item,
  Input,
  Button,
  Error,
  Hint,
  HintLink,
} from "../css/Forms.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(selectIsLogin);
  const registerError = useError();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (data) => {
    dispatch(logIn(data));
  };

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
  const handleSubmit = (event) => {
    const { email, password } = event;
    onLogin({ email, password });

    setEmail("");
    setPassword("");
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
        }}
        onSubmit={(values) => {
          handleSubmit(values);
        }}
      >
        {({ errors, touched, values, isValid }) => (
          <Form>
            <FormHead>
              <Title>Login</Title>
              {(registerError && registerError.status === 400) && <Error>{registerError.message}</Error>}
              {(registerError && registerError.status === 500) && <Error>Server error</Error>}
            </FormHead>

            <Item>
              <Input
                name="email"
                placeholder="Email"
                //                validate={validateEmail}
              />
              {errors.email && touched.email && <Error>{errors.email}</Error>}
            </Item>
            <Item>
              <Input
                name="password"
                type="password"
                placeholder="Password"
                //                validate={validatePassword}
              />
              {errors.password && touched.password && (
                <Error>{errors.password}</Error>
              )}
            </Item>
            <Button type="submit">Login</Button>
            <Hint>
              Do not have an account?{" "}
              <HintLink to={"/register"}>Registration</HintLink>
            </Hint>
          </Form>
        )}
      </Formik>
    </FormBody>
  );
};
