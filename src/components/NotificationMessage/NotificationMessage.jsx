import React from "react";
import { Message } from "./NotificationMessage.styled";

const NotificationMessage = ({ text }) => {
  return <Message>{text}</Message>;
};

export default NotificationMessage;
