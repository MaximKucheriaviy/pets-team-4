import { useState } from "react";
import { useFormik } from "formik";
import { Box } from "@mui/material";

import { ModalForm } from "./ModalAddPet.styled";
import { AddNoticeModal } from "./AddNoticeModal/AddNoticeModal";
import { form } from "./FormikSchema/FormikAddPet";
import { FirstPageAddPet } from "./ModalPagesComp/FirstPageAddPet";
import { SecondPagelAddPet } from "./ModalPagesComp/SecondPagelAddPet";

export const ModalContainer = () => {
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
    <Box onClose={closeModal}>
      <AddNoticeModal handleOpen={handleOpen} />
      <ModalForm
        hideBackdrop
        open={open}
        onClose={handleClose}
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
    </Box>
  );
};
