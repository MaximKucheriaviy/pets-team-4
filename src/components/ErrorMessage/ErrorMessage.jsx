import React from "react";
import { Message } from "./ErrorMessage.styled";

export const ErrorMessage = ({ children }) => {
  return <Message>{children}</Message>;
};
