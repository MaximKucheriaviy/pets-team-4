import React from "react";
import { Button } from "./ButtonToTop.styled";

export const ButtonToTop = ({ children, onClick, ...allyProps }) => {
  return (
    <Button onClick={onClick} type="button" {...allyProps} title="To top">
      {children}
    </Button>
  );
};
