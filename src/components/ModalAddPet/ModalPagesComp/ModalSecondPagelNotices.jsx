import { useRef } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { PhotoPreview } from "../PhotoPreview";
import { useTheme } from "styled-components";

import {
  LabelText,
  TextComment,
  LabelTextSex,
  RadioBtnSex,
  WraperBtnsPage,
  BoxUploadPhoto,
  InputAddPet,
} from "../ModaAdd.styled";
import {
  BtnModalClose,
  IconModalClose,
  ModalBoxSecond,
  BtnUploadPhoto,
  IconAddPhoto,
  ModalFormSecond,
  FlexBox,
  BtnNextDone,
  BtnBackCancel,
  Title,
  RadioBoxBtnSex,
  IconMale,
  IconFemale,
  ErrorTextFields,
} from "../ModalAddPet.styled";

export function SecondPagelAddPet({
  openSecond,
  handleCloseSecond,
  formik,
  closeModal,
}) {
  const fileRef = useRef(null);
  const refTextArea = useRef(null);
  const theme = useTheme();

  const handleInput = (e) => {
    if (refTextArea.current) {
      refTextArea.current.style.height = "auto";
      refTextArea.current.style.height = `${e.target.scrollHeight - 16}px`;
    }
  };

  const { sex, category, place, price, imageURL, comment } = formik.values;
  const {
    handleChange,
    handleSubmit,
    errors,
    touched,
    setFieldValue,
    isValid,
  } = formik;

  return (
    <ModalFormSecond
      hideBackdrop
      open={openSecond}
      onClose={handleCloseSecond}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <ModalBoxSecond>
        <BtnModalClose type="button" onClick={closeModal}>
          <IconModalClose />
        </BtnModalClose>
        <FlexBox>
          <Title variant="h4" align="center">
            Add pet
          </Title>
          <LabelTextSex>The sex*:</LabelTextSex>
          {touched.sex && errors.sex ? (
            <ErrorTextFields>{errors.sex}*</ErrorTextFields>
          ) : null}
          <RadioBoxBtnSex container spacing={1}>
            <Grid2>
              <RadioBtnSex
                style={
                  sex === "male"
                    ? { color: `${theme.colors.accent}` }
                    : { background: `${theme.colors.white}` }
                }
                type="button"
                onClick={(e) => {
                  setFieldValue("sex", "male");
                }}
              >
                <IconMale />
                Male
              </RadioBtnSex>
            </Grid2>
            <Grid2>
              <RadioBtnSex
                style={
                  sex === "female"
                    ? { color: `${theme.colors.accent}` }
                    : { background: `${theme.colors.white}` }
                }
                type="button"
                onClick={(e) => {
                  setFieldValue("sex", "female");
                }}
              >
                <IconFemale />
                Female
              </RadioBtnSex>
            </Grid2>
          </RadioBoxBtnSex>
          <LabelText htmlFor="place">Location*:</LabelText>
          {touched.place && errors.place ? (
            <ErrorTextFields>{errors.place}*</ErrorTextFields>
          ) : null}
          <InputAddPet
            type="text"
            id="place"
            name="place"
            placeholder="Type Location"
            onChange={handleChange}
            value={place}
          />
          {category === "sell" && (
            <>
              <LabelText>Price*:</LabelText>
              {touched.price && errors.price ? (
                <ErrorTextFields>{errors.price}*</ErrorTextFields>
              ) : null}
              <InputAddPet
                color="primary"
                required
                id="price"
                name="price"
                type="number"
                placeholder="Type price"
                onChange={handleChange}
                value={price}
              />
            </>
          )}
          <LabelText htmlFor="imageURL">Load the pet’s image:</LabelText>
          {touched.imageURL && errors.imageURL ? (
            <ErrorTextFields>{errors.imageURL}*</ErrorTextFields>
          ) : null}
          <input
            hidden
            ref={fileRef}
            id="imageURL"
            type="file"
            onChange={(e) => {
              setFieldValue("imageURL", e.target.files[0]);
            }}
          />
          {imageURL ? (
            <PhotoPreview file={imageURL} />
          ) : (
            <BoxUploadPhoto>
              <BtnUploadPhoto
                onClick={() => {
                  fileRef.current.click();
                }}
              >
                <IconAddPhoto />
              </BtnUploadPhoto>
            </BoxUploadPhoto>
          )}

          <LabelText htmlFor="comment">Comments:</LabelText>
          <TextComment
            ref={refTextArea}
            rows={2}
            onInput={handleInput}
            id="comment"
            name="comment"
            placeholder="Type comment"
            onChange={handleChange}
            value={comment}
          />
          <WraperBtnsPage>
            <BtnNextDone
              variant="contained"
              type="submit"
              onClick={() => {
                handleSubmit();
                if (isValid) {
                  setTimeout(() => {
                    closeModal();
                  }, 300);
                }
              }}
            >
              Done
            </BtnNextDone>
            <BtnBackCancel type="button" onClick={handleCloseSecond}>
              Back
            </BtnBackCancel>
          </WraperBtnsPage>
        </FlexBox>
      </ModalBoxSecond>
    </ModalFormSecond>
  );
}
