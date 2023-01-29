import React from "react";
import { Formik, Form, Field } from "formik";

import { useDispatch } from "react-redux";
import { useState } from "react";
import { signup } from "../../../redux/auth/auth-operation";
import { useSelector } from "react-redux";
import { selectIsLogin } from "../../../redux/auth/autSelectors";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { SignInfo } from "./SignInfo/signInfo";
import { PersonalInfo } from "./PersonalInfo/pesonalInfo";
export const RegisterForm = () => {
  const dispatch = useDispatch();
  const isUserLogin = useSelector(selectIsLogin);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  // const [city, setCity] = useState('');
  // const [phone, setPhone] = useState('');

  const [page, setPage] = useState(0);

  const pageDisplay = () => {
    if (page === 0) {
      return (
        <SignInfo
          email={email}
          password={password}
          handleFirstStep={handleFirstStep}
          handleChange={handleChange}
          confirmPassword={confirmPassword}
          setPage={setPage}
        />
      );
    } else {
      return (
        <PersonalInfo
          name={name}
          handleChange={handleChange}
          handleSubmit={handleSubmit}
          setPage={setPage}
        />
      );
    }
  };

  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case "name":
        setName(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
        break;

      default:
        break;
    }
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

  function validateUsername(value) {
    let error;
    if (value === "admin") {
      error = "Nice try!";
    }
    return error;
  }

  // const pas = (setPassword,setConfirmPassword) => {
  //   if (setPassword !== setConfirmPassword) {
  //      return alert(waaaa)
  //   }
  //   else (setPassword !== setConfirmPassword){
  //     return  alert(sdsdd)
  //   }
  //  }
  const handleFirstStep = (values) => {
    const { email, password } = values;

    //    console.log("submit", { email, password });

    setEmail(email);
    setPassword(password);
  };

  const handleSubmit = () => {
    console.log("submit", { name, email, password });

    onRegister({ name, email, password });
    setPage(0);
    setName("");
    setEmail("");
    setPassword("");
  };

  const onRegister = (data) => {
    dispatch(signup(data));
  };

  if (isUserLogin) {
    return <Navigate to={"/news"} />;
  }

  return (
    <>
      <div>
        <h2>Registration</h2>
        <div>{pageDisplay()}</div>
        <p>Already have an account?</p> <Link to={"/login"}> Login</Link>
      </div>
    </>
  );
};
