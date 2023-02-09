import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

import { Formik, Form } from "formik";
import { resetError } from "../../../redux/auth/authSlice";

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

  useEffect(() => {
    dispatch(resetError());
  }, [dispatch]);

  const onLogin = (data) => {
    dispatch(logIn(data));
  };

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
        <Form>
          <FormHead>
            <Title>Login</Title>
            {registerError && registerError.status === 400 && (
              <Error>Invalid data</Error>
            )}
          </FormHead>

          <Item>
            <Input name="email" placeholder="Email" />
          </Item>
          <Item>
            <Input name="password" type="password" placeholder="Password" />
          </Item>
          <Button type="submit">Login</Button>
          <Hint>
            Do not have an account?{" "}
            <HintLink to={"/register"}>Registration</HintLink>
          </Hint>
        </Form>
      </Formik>
    </FormBody>
  );
};
