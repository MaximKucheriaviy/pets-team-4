import { useState } from "react";
import { Portal } from "@mui/base";
import { useFormik } from "formik";
import { Button, Box } from "@mui/material";

import { form } from "./FormikSchema/FormikAddPet";
import { FirstPageAddPet } from "./ModalPagesComp/FirstPageAddPet";
import { SecondPagelAddPet } from "./ModalPagesComp/SecondPagelAddPet";
import { ModalForm } from "./ModalAddPet.styled";

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
    <Portal>
      <Button onClick={handleOpen}>Add Pet</Button>
      <ModalForm
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
    </Portal>
  );
};
