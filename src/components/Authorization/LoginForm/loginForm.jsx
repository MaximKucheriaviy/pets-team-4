import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import { Formik, Form } from "formik";

import { selectIsLogin } from "../../../redux/auth/autSelectors";
import { logIn } from "../../../redux/auth/auth-operation";

import {
  FormBody,
  Title,
  Item,
  Input,
  Button,
  Hint,
  HintLink,
} from "../css/Forms.styled";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(selectIsLogin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

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
          <Title>Login</Title>
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
