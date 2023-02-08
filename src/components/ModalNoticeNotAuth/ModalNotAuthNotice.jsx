import { useState } from "react";
import { useTheme } from "styled-components";
import {
  Dialog,
  DialogContent,
  DialogContentText,
} from "@mui/material";
import { AddNoticeButtonMob } from "../ModalAddPet/AddNoticeModal/AddNoticeButtonMob";
import { AddNoticeButton } from "../ModalAddPet/AddNoticeModal/AddNoticeButton";
import { BtnGoLogin, BtnBackCancel, Title, WraperBtnsPage } from "../ModalAddPet/ModaAdd.styled";

export const ModalNotAuth = () => {
  const [open, setOpen] = useState(false);
  const theme = useTheme();

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div >
      <AddNoticeButton handleOpen={handleClickOpen} />
      <AddNoticeButtonMob handleOpen={handleClose} />
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
        >
        <div 
        style={{ 
          background: `${theme.colors.white}` 
        }}
          >
        <Title
          style={{
            paddingTop: "30px",
          }}
        >
          Not logged
        </Title>
        <DialogContent 
          style={{ 
            padding: "20px", 
            borderRadius: "20px", 
            background: `${theme.colors.white}` ,
            fontFamily: 'Manrope',
            fontWeight: 500,
            fontSize: "16px",
            lineHeight: 1.4,
            letterSpacing: "0.04em",
            textAlign: "center",
          }}
          >
          <DialogContentText
            style={{ 
              background: `${theme.colors.white}`,
              color: `${theme.colors.black}` 
             }}
             >
            You must login to account for posted advertisement
          </DialogContentText>
        </DialogContent >
        <WraperBtnsPage style={{ padding: "20px" }}>
          <BtnBackCancel onClick={handleClose}>Disagree</BtnBackCancel>
          <BtnGoLogin to="/login" >
            Login in
          </BtnGoLogin>
        </WraperBtnsPage>
        </div>
      </Dialog>
    </div>
  );
};
