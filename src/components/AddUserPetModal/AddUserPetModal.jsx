import { useState, useRef, useEffect } from "react";
import { Formik } from "formik";
import { useFormik } from "formik";
import * as yup from "yup";
import { PhotoPreview } from "./FileReader";
import { createPortal } from "react-dom";
import { store } from "../../redux/store";
import { Notify } from "notiflix/build/notiflix-notify-aio";
import axios from "axios";
import { objectFixer } from "../../helpers/objetFixer";
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

const postUserPet = async (info) => {
  try {
    const rersult = await axios({
      method: "post",
      url: "api/pets",
      baseURL: "https://petse-server-team4.onrender.com/",
      data: info,
      headers: {
        Authorization: `Bearer ${store.getState().auth.token}`,
        "Content-Type": "multipart/form-data",
      },
    });

    return rersult;
  } catch (error) {
    Notify.error("Something go went, please try again");
  }
};

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
      avatarURL: "",
      comments: "",
    },
    onSubmit: async (values, { resetForm }) => {
      console.log(values);
      values = objectFixer(values);
      const formData = new FormData();
      for (let value in values) {
        formData.append(value, values[value]);
      }
      await postUserPet(formData);
      resetForm();
      onClose();
      Notify.success("Posted!");
    },
    validationSchema: yup.object().shape({
      name: yup.string().required("Name is required"),
      date: yup.date().required("Date is required"),
      breed: yup.string().required("Breed is required"),
      avatarURL: yup.mixed().required("Image is required"),
      comments: yup.string().required("Comment is required"),
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
              <InputLabelFile htmlFor="avatarURL">
                Add photo and some comments
              </InputLabelFile>

              <HiddenInput>
                <input
                  onChange={(e) => {
                    formik.setFieldValue("avatarURL", e.target.files[0]);
                  }}
                  type="file"
                  name="avatarURL"
                  accept=".png, .jpg, .jpeg"
                  hidden
                  ref={fileRef}
                  required
                ></input>
                {formik.values.avatarURL ? (
                  <PhotoPreview file={formik.values.avatarURL} />
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
              {formik.errors.avatarURL && formik.touched.avatarURL ? (
                <ErrorNotification>{formik.errors.avatarURL}</ErrorNotification>
              ) : null}
            </>
          )}
          {nextStep && (
            <>
              <TextAreaLabel htmlFor="comments">Comments</TextAreaLabel>
              <FormTextArea
                name="comments"
                as="textarea"
                placeholder="Type comment"
                value={formik.values.comments}
                onChange={formik.handleChange}
              ></FormTextArea>
              {formik.errors.comments && formik.touched.comments ? (
                <ErrorNotification>{formik.errors.comments}</ErrorNotification>
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
