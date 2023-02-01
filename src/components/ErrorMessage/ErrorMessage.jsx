import React from "react";
import { Message } from "./ErrorMessage.styled";

const ErrorMessage = ({ children, margin }) => {
  return <Message margin={margin}>{children}</Message>;
};

export default ErrorMessage;
