import { useState } from "react";
import { useFormik } from "formik";
import { Box } from "@mui/material";

import { useAuth } from "../../shared/useAuth/useAuth";
import { ModalForm } from "./ModalAddPet.styled";
import { AddNoticeButton } from "./AddNoticeModal/AddNoticeButton";
import { form } from "./FormikSchema/FormikAddPet";
import { FirstPageAddPet } from "./ModalPagesComp/ModalFirstPageNotices";
import { SecondPagelAddPet } from "./ModalPagesComp/ModalSecondPagelNotices";
// import AddNoticeButton from "../Notices/AddNoticeButton/AddNoticeButton";
import { ModalNotAuth } from "../ModalNoticeNotAuth/ModalNotAuthNotice";

export const ModalContainer = () => {
  const isLogin = useAuth();
  const [open, setOpen] = useState(false);
  const [openSecond, setOpenSecond] = useState(false);
  const formik = useFormik(form);

  const handleOpenSecond = () => {
    setOpenSecond(true);
  };
  const handleCloseSecond = () => {
    setOpenSecond(false);
  };

  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    formik.handleReset();
    setOpen(false);
  };

  const closeModal = () => {
    setOpenSecond(false);
    setOpen(false);
    formik.resetForm();
  };

  return (
    <Box>
      {isLogin ? (
        <>
          <AddNoticeButton handleOpen={handleOpen} />
          <ModalForm
            open={open}
            onClose={handleClose}
            hideBackdrop
            aria-labelledby="parent-modal-title"
            aria-describedby="parent-modal-description"
          >
            <Box>
              {!openSecond && (
                <FirstPageAddPet
                  closeModal={closeModal}
                  formik={formik}
                  open={open}
                  handleClose={handleClose}
                  handleOpenSecond={handleOpenSecond}
                />
              )}
              <SecondPagelAddPet
                closeModal={closeModal}
                formik={formik}
                openSecond={openSecond}
                handleCloseSecond={handleCloseSecond}
              />
            </Box>
          </ModalForm>
        </>
      ) : (
        <ModalNotAuth />
      )}
    </Box>
  );
};
