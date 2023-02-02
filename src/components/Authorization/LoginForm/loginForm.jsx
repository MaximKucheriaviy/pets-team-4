import { useDispatch } from "react-redux";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import { Formik, Form, Field } from "formik";

import { Link } from "react-router-dom";

import { selectIsLogin } from "../../../redux/auth/autSelectors";
import { logIn } from "../../../redux/auth/auth-operation";

import css from "./loginForm.module.css";

export const LoginForm = () => {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(selectIsLogin);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const onLogin = (data) => {
    dispatch(logIn(data));
  };

  const handleSubmit = (event) => {
    const { email, password } = event
    console.log(email, password);
    onLogin({ email, password });

    setEmail("");
    setPassword("");
  };

  if (isUserLogin) {
    return <Navigate to={"/news"} />;
  }

  return (
    <div className={css.loginFormWrapper}>
      <div className={css.loginFormBody}>
        <Formik
          initialValues={{
            email,
            password,
          }}
          onSubmit={(values) => {
            handleSubmit(values);
          }}
        >
          <Form className={css.loginForm}>
            <h2 className={css.loginFormTitle}>Login</h2>
            <div className={css.loginFormItemWrapper}>
              <Field
                className={css.loginFormItem}
                name="email"
                placeholder="Email"
              />
            </div>
            <div className={css.loginFormItemWrapper}>
              <Field
                className={css.loginFormItem}
                name="password"
                placeholder="Password"
              />
            </div>
            <button type="submit" className={css.loginFormButton}>
              Login
            </button>
            <p>Already have an account?</p> <Link to={"/login"}> Login</Link>
          </Form>
        </Formik>
      </div>
    </div>
  );
};
