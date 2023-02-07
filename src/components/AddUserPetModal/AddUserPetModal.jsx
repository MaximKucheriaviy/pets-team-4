import { useState, useRef, useEffect } from "react";
import { Formik } from "formik";
import { useFormik } from "formik";
import * as yup from "yup";
import { PhotoPreview } from "./FileReader";
import { createPortal } from "react-dom";
import {
  FormBox,
  FormTitle,
  InputLabel,
  FormInput,
  FormButton,
  FormTextArea,
  InputLabelFile,
  HiddenInput,
  PlusIcon,
  ButtonWrapper,
  TextAreaLabel,
  CloseButton,
  CloseIcon,
  ErrorNotification,
  Ovarlay,
} from "./AddUserPetModal.styled";

const modalRoot = document.getElementById("portalRoot");

export default function AddUserPetModal({ onClose }) {
  const [nextStep, setNextStep] = useState(false);
  useEffect(() => {
    window.addEventListener("keydown", closeModal);

    return () => {
      window.removeEventListener("keydown", closeModal);
    };
  });

  const fileRef = useRef(null);

  const formik = useFormik({
    initialValues: {
      name: "",
      date: "",
      breed: "",
      photo: "",
      comment: "",
    },
    onSubmit: (values, { resetForm }) => {
      console.log(values);
      resetForm();
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Name is required"),
      date: yup.date().required("Date is required"),
      breed: yup.string().required("Breed is required"),
      photo: yup.mixed().required("Image is required"),
      comment: yup.string().required("Comment is required"),
    }),
  });

  const closeModal = ({ target, currentTarget, code }) => {
    if (target === currentTarget || code === "Escape") {
      onClose();
    }
  };

  return createPortal(
    <Ovarlay onClick={closeModal}>
      <Formik
        initialValues={formik.initialValues}
        onSubmit={formik.handleSubmit}
        validationSchema={formik.validationSchema}
      >
        <FormBox autoComplete="off" style={{ position: "absolute" }}>
          <FormTitle>Add pet</FormTitle>
          {!nextStep && (
            <>
              <InputLabel htmlFor="name">Name pet</InputLabel>
              <FormInput
                type="text"
                name="name"
                placeholder="Type name pet"
                value={formik.values.name}
                onChange={formik.handleChange}
                required
              ></FormInput>
              {formik.errors.name && formik.touched.name ? (
                <ErrorNotification>{formik.errors.name}</ErrorNotification>
              ) : null}
            </>
          )}
          {!nextStep && (
            <>
              <InputLabel htmlFor="date">Date of birth</InputLabel>
              <FormInput
                type="date"
                name="date"
                placeholder="Type date of birth"
                value={formik.values.date}
                onChange={formik.handleChange}
                required
              ></FormInput>
              {formik.errors.date && formik.touched.date ? (
                <ErrorNotification>{formik.errors.date}</ErrorNotification>
              ) : null}
            </>
          )}
          {!nextStep && (
            <>
              <InputLabel htmlFor="breed">Breed</InputLabel>
              <FormInput
                type="text"
                name="breed"
                placeholder="Type breed"
                value={formik.values.breed}
                onChange={formik.handleChange}
                required
              ></FormInput>
              {formik.errors.breed && formik.touched.breed ? (
                <ErrorNotification>{formik.errors.breed}</ErrorNotification>
              ) : null}
            </>
          )}
          {nextStep && (
            <>
              <InputLabelFile htmlFor="photo">
                Add photo and some comments
              </InputLabelFile>

              <HiddenInput>
                <input
                  onChange={(e) => {
                    formik.setFieldValue("photo", e.target.files[0]);
                  }}
                  type="file"
                  name="photo"
                  accept=".png, .jpg, .jpeg"
                  hidden
                  ref={fileRef}
                  required
                ></input>
                {formik.values.photo ? (
                  <PhotoPreview file={formik.values.photo} />
                ) : (
                  <button
                    style={{
                      outline: "none",
                      border: "none",
                    }}
                    onClick={() => fileRef.current.click()}
                  >
                    <PlusIcon />
                  </button>
                )}
              </HiddenInput>
              {formik.errors.photo && formik.touched.photo ? (
                <ErrorNotification>{formik.errors.photo}</ErrorNotification>
              ) : null}
            </>
          )}
          {nextStep && (
            <>
              <TextAreaLabel htmlFor="comment">Comments</TextAreaLabel>
              <FormTextArea
                name="comment"
                as="textarea"
                placeholder="Type comment"
                value={formik.values.comment}
                onChange={formik.handleChange}
              ></FormTextArea>
              {formik.errors.comment && formik.touched.comment ? (
                <ErrorNotification>{formik.errors.comment}</ErrorNotification>
              ) : null}
            </>
          )}
          <ButtonWrapper>
            {!nextStep && (
              <FormButton
                type="button"
                onClick={(event) => setNextStep(!nextStep)}
              >
                Next
              </FormButton>
            )}
            {!nextStep && (
              <FormButton type="button" onClick={closeModal}>
                Cancel
              </FormButton>
            )}
            {nextStep && <FormButton type="submit">Done</FormButton>}
            {nextStep && (
              <FormButton
                type="button"
                onClick={(event) => setNextStep(!nextStep)}
              >
                Back
              </FormButton>
            )}
          </ButtonWrapper>
          <CloseButton type="button" onClick={closeModal}>
            <CloseIcon onClick={closeModal} />
          </CloseButton>
        </FormBox>
      </Formik>
    </Ovarlay>,
    modalRoot
  );
}
