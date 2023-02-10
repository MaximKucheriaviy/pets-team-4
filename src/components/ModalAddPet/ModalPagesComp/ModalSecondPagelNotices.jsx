import { useRef } from "react";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import { PhotoPreview } from "../PreviewPhoto/PhotoPreview";
import { useTheme } from "styled-components";
import moment from "moment/moment";
import { useNavigate } from "react-router-dom";

import {
  LabelText,
  TextComment,
  LabelTextSex,
  RadioBtnSex,
  WraperBtnsPage,
  BoxUploadPhoto,
  InputAddPet,
  Title,
  BtnNextDone,
  BtnBackCancel,
  IconModalClose,
  BtnUploadPhoto,
  IconAddPhoto,
  BtnModalClose,
  ModalBoxSecond,
  IconDeletePhoto,
  BtnDeletePhoto,
  BoxDeletePhoto
} from "../ModaAdd.styled";
import {
  ModalFormSecond,  
  FlexBox,  
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
  const navigate = useNavigate();

  const handleInput = (e) => {
    if (refTextArea.current) {
      refTextArea.current.style.height = "auto";
      refTextArea.current.style.height = `${e.target.scrollHeight - 16}px`;
    }
  };

  const handleSubmitForm = () => {
      setFieldValue("birthdate", moment(birthdate).format("D.MM.YYYY"));
      handleSubmit();
      if (isValid) {
        setTimeout(() => {
          closeModal();
          navigate('/notices/own');
        }, 300);
      }
    }

  const { sex, category, place, price, petImage, birthdate, comment } = formik.values;
  const {
    handleChange,
    handleSubmit,
    handleBlur,
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
            <ErrorTextFields>{errors.sex}</ErrorTextFields>
          ) : null}
          <RadioBoxBtnSex container spacing={1}>
            <Grid2>
              <RadioBtnSex
                style={
                  sex === "male"
                    ? { color: `${theme.colors.accent}` }
                    : { background: `${theme.colors.white}` }
                }
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
            <ErrorTextFields>{errors.place}</ErrorTextFields>
          ) : null}
          <InputAddPet
            type="text"
            id="place"
            name="place"
            placeholder="Type Location"
            onBlur={handleBlur}
            onChange={handleChange}
            value={place}
          />
          {category === "sell" && (
            <>
              <LabelText>Price*:</LabelText>
              {touched.price && errors.price ? (
                <ErrorTextFields>{errors.price}</ErrorTextFields>
              ) : null}
              <InputAddPet
                color="primary"
                required
                id="price"
                name="price"
                type="number"
                placeholder="Type price"
                min="1"
                onBlur={handleBlur}
                onChange={handleChange}
                value={price}
              />
            </>
          )}
          <LabelText htmlFor="petImage">Load the pet’s image:</LabelText>
          {touched.petImage && errors.petImage ? (
            <ErrorTextFields style={{marginBottom: "10px"}}>{errors.petImage}</ErrorTextFields>
          ) : null}
          <input
            hidden
            ref={fileRef}
            id="petImage"
            type="file"
            onBlur={handleBlur}
            onChange={(e) => {
              setFieldValue('petImage', e.target.files[0])
            }}
          />
          {petImage ? ( 
            <BoxDeletePhoto>
            <BtnDeletePhoto type="button" 
              onClick={()=> {
              setFieldValue("petImage", "")
             }}
             >
              <IconDeletePhoto/>
            </BtnDeletePhoto>
            <PhotoPreview file={petImage}/>
            </BoxDeletePhoto>
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
          {touched.comment && errors.comment ? (
            <ErrorTextFields>{errors.comment}</ErrorTextFields>
          ) : null}
          <TextComment
            ref={refTextArea}
            rows={2}
            onInput={handleInput}
            id="comment"
            name="comment"
            placeholder="Type comment"
            onBlur={handleBlur}
            onChange={handleChange}
            value={comment}
          />
          <WraperBtnsPage>
            <BtnNextDone
              variant="contained"
              type="submit"
              onClick={handleSubmitForm}
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
