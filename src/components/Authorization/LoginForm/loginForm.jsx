import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { Navigate } from "react-router-dom";

import { Formik, Form } from "formik";
import { useTranslation } from 'react-i18next';
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
const { t} = useTranslation();
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
            <Title>{t("login")}</Title>
            {registerError && <Error>{registerError.message}</Error>}
          </FormHead>

          <Item>
            <Input name="email" placeholder="Email" />
          </Item>
          <Item>
            <Input name="password" type="password" placeholder="Password" />
          </Item>
          <Button type="submit">{t("login")}</Button>
          <Hint>
            {t("haveAcN")}{" "}
           
            <HintLink to={"/register"}>{t("registration")}</HintLink>
          </Hint>
        </Form>
      </Formik>
    </FormBody>
  );
};
