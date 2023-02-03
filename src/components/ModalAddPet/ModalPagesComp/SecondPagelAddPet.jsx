import { useRef } from "react";
import { Typography } from "@mui/material";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { PhotoPreview } from "../PhotoPreview";

import {
  LabelText,
  TextComment,
  LabelTextSex,
  RadioBtnSex,
  WraperBtnsPage,
  BoxUploadPhoto,
} from "../ModaAdd.styled";
import {
  BtnModalClose,
  IconModalClose,
  ModalBoxSecond,
  BtnUploadPhoto,
  IconAddPhoto,
  ModalFormSecond,
  FlexBox,
  InputAddPet,
  BtnNextDone,
  BtnBackCancel,
  Title,
  RadioBoxBtnSex,
  IconMale,
  IconFemale,
} from "../ModalAddPet.styled";

export function SecondPagelAddPet({
  openSecond,
  handleCloseSecond,
  formik,
  closeModal,
}) {
  const fileRef = useRef(null);
  const refTextArea = useRef(null);

  const handleInput = (e) => {
    if (refTextArea.current) {
      refTextArea.current.style.height = "auto";
      refTextArea.current.style.height = `${e.target.scrollHeight - 14}px`;
    }
  };

  const { sex, category, location, price, photo, comment } = formik.values;
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
          <LabelTextSex>The sex*</LabelTextSex>
          <RadioBoxBtnSex container spacing={1}>
            <Grid2>
              <RadioBtnSex
                style={
                  sex === "male"
                    ? { color: "#F59256" }
                    : { background: "transparent" }
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
                    ? { color: "#F59256" }
                    : { background: "transparent" }
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
            {touched.sex && errors.sex ? (
              <Typography variant="subtitle1">{errors.sex}</Typography>
            ) : null}
          </RadioBoxBtnSex>
          <LabelText htmlFor="location">Location*</LabelText>
          <InputAddPet
            required
            id="location"
            name="location"
            placeholder="Type Location"
            onChange={handleChange}
            value={location}
          />
          {touched.location && errors.location ? (
            <Typography variant="subtitle1">{errors.location}</Typography>
          ) : null}
          {category === "sell" && (
            <>
              <LabelText>Price*</LabelText>
              <InputAddPet
                required
                id="price"
                name="price"
                type="number"
                placeholder="Type price"
                onChange={handleChange}
                value={price}
              />
              {touched.price && errors.price ? (
                <Typography variant="subtitle1">{errors.price}</Typography>
              ) : null}
            </>
          )}
          <LabelText htmlFor="photo">Load the pet’s image</LabelText>
          <input
            hidden
            ref={fileRef}
            id="photo"
            type="file"
            onChange={(e) => {
              setFieldValue("photo", e.target.files[0]);
            }}
          />
          {touched.photo && errors.photo ? (
            <Typography variant="subtitle1">{errors.photo}</Typography>
          ) : null}
          {photo ? (
            <PhotoPreview file={photo} />
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

          <LabelText htmlFor="comment">Comments</LabelText>
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
