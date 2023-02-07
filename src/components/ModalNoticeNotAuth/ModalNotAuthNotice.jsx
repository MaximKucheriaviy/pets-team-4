import { useState } from "react";
import { Fade } from "@mui/material";

import { ModalConitainer, Title, WrapperFormLog } from "./ModalNotice.styled";
import {
  ModalForm,
  BtnModalClose,
  IconModalClose,
} from "../ModalAddPet/ModalAddPet.styled";
import { AddNoticeButton } from "../ModalAddPet/AddNoticeModal/AddNoticeButton";
import { LoginForm } from "../Authorization/LoginForm/loginForm";

export const ModalNotAuth = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div>
      <AddNoticeButton handleOpen={handleOpen} />
      <ModalForm
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        hideBackdrop
        closeAfterTransition
      >
        <Fade in={open}>
          <ModalConitainer>
            <WrapperFormLog>
              <BtnModalClose type="button" onClick={handleClose}>
                <IconModalClose />
              </BtnModalClose>
              <Title id="transition-modal-title" variant="h6" component="h2">
                Before post enter to your account*
              </Title>
              <LoginForm/>
            </WrapperFormLog>
          </ModalConitainer>
        </Fade>
      </ModalForm>
    </div>
  );
};
