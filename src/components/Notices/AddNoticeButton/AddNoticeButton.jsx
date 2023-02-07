import React from "react";
import { useMediaQuery } from "react-responsive";
import AddButtonMobile from "./AddButtonMobile/AddButtonMobile";
import AddButtonNotMobile from "./AddButtonNotMobile/AddButtonNotMobile";
// import { ModalContainer } from "../../ModalAddPet/ModalContainer";

export default function AddNoticeButton({ handleOpen }) {
  const isMobile = useMediaQuery({ query: "(max-width: 767px)" });
  return (
    <>
      {isMobile ? (
        <AddButtonMobile handleOpen={handleOpen} />
      ) : (
        <AddButtonNotMobile handleOpen={handleOpen} />
      )}
    </>
  );
}
