import { useRef } from "react";
import { useTheme } from "styled-components";

import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  LabelText,
  WrapInputFirst,
  WraperBtnsPage,
  InputAddPet,
  ModalBox,
  Title,
  SubtitleText,
  RadioButton,
  BtnModalClose,
  IconModalClose,
  BtnBackCancel,
  BtnNextDone,
} from "../ModaAdd.styled";
import {
  FlexBox,  
  ErrorTextFields,
} from "../ModalAddPet.styled";

export function FirstPageAddPet({
  formik,
  handleClose,
  handleOpenSecond,
  closeModal,
  handleCloseBackdrp
}) {
  const titleTextRef = useRef(null);
  const theme = useTheme();

  const { category, title, name, birthdate, breed } = formik.values;
  const { handleChange, setFieldValue, errors, touched } = formik;

  const handleErrorTitle = () => {
    if (title.length < 2) {
      return (titleTextRef.current.textContent = "Write title*");
    } 
    handleOpenSecond();
  };

  return (
    <ModalBox>
      <BtnModalClose type="button" onClick={closeModal}>
        <IconModalClose />
      </BtnModalClose>
      <FlexBox>
      <Title>Add pet</Title>
        <SubtitleText>
          Publish your advertisement <br /> Filling the fields.
        </SubtitleText>
        <div>
          <Grid2 container spacing={1}>
            <Grid2>
              <RadioButton
                style={
                  category === "lost-found"
                    ? {
                        background: `${theme.colors.accent}`,
                        color: `${theme.colors.white}`,
                      }
                    : { background: `${theme.colors.white}` }
                }
                onClick={() => {
                  setFieldValue("category", "lost-found");
                }}
              >
                lost/found
              </RadioButton>
            </Grid2>
            <Grid2>
              <RadioButton
                style={
                  category === "for-free"
                    ? {
                        background: `${theme.colors.accent}`,
                        color: `${theme.colors.white}`,
                      }
                    : { background: `${theme.colors.white}` }
                }
                onClick={() => {
                  setFieldValue("category", "for-free");
                }}
              >
                in good hands
              </RadioButton>
            </Grid2>
            <Grid2>
              <RadioButton
                style={
                  category === "sell"
                    ? {
                        background: `${theme.colors.accent}`,
                        color: `${theme.colors.white}`,
                      }
                    : { background: `${theme.colors.white}` }
                }
                onClick={() => {
                  setFieldValue("category", "sell");
                }}
              >
                sell
              </RadioButton>
            </Grid2>
          </Grid2>
        </div>
        <WrapInputFirst>
          <LabelText htmlFor="title">Tittle of ad*:</LabelText>
          <ErrorTextFields
            ref={titleTextRef}
            hidden={title.length > 1}
          >{errors.title}</ErrorTextFields>
          <InputAddPet
            type="text"
            required
            name="title"
            id="title"
            placeholder="Type name pet"
            onChange={handleChange}
            value={title}
          />
          <LabelText htmlFor="name">Name pet:</LabelText>
          {touched.name && errors.name ? (
            <ErrorTextFields>{errors.name}</ErrorTextFields>
          ) : null}
          <InputAddPet
            type="text"
            id="name"
            name="name"
            placeholder="Type name pet"
            onChange={handleChange}
            value={name}
          />
          <LabelText htmlFor="birthdate">Date of birth:</LabelText>
          {touched.birthdate && errors.birthdate ? (
            <ErrorTextFields>{errors.birthdate}</ErrorTextFields>
          ) : null}
          <InputAddPet
            id="birthdate"
            name="birthdate"
            type="date"
            placeholder="DD.MM.YYYY"
            value={birthdate}
            onChange={handleChange}
          />
          <LabelText htmlFor="breed">Breed:</LabelText>
          {touched.breed && errors.breed ? (
            <ErrorTextFields>{errors.breed}</ErrorTextFields>
          ) : null}
          <InputAddPet
            type="text"
            id="breed"
            name="breed"
            placeholder="Type breed"
            onChange={handleChange}
            value={breed}
          />
        </WrapInputFirst>
        <WraperBtnsPage>
          <BtnNextDone
            type="button"
            variant="contained"
            onClick={handleErrorTitle}
          >
            Next
          </BtnNextDone>
          <BtnBackCancel type="button" onClick={handleClose}>
            Cancel
          </BtnBackCancel>
        </WraperBtnsPage>
      </FlexBox>
    </ModalBox>
  );
}
