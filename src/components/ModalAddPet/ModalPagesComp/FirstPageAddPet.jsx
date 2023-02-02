import { LabelText, WrapInputFirst, WraperBtnsPage } from "../ModaAdd.styled";
import Grid2 from "@mui/material/Unstable_Grid2/Grid2";
import {
  IconModalClose,
  BtnModalClose,
  ModalBox,
  FlexBox,
  InputAddPet,
  RadioButton,
  Title,
  SubtitleText,
  BtnNextDone,
  BtnBackCancel,
} from "../ModalAddPet.styled";

export function FirstPageAddPet({
  formik,
  handleClose,
  handleOpenSecond,
  closeModal,
}) {
  const { category, title, name, date_birth, breed } = formik.values;
  const { handleChange, setFieldValue } = formik;

  return (
    <ModalBox>
      <BtnModalClose type="button" onClick={closeModal}>
        <IconModalClose />
      </BtnModalClose>
      <FlexBox>
        <Title>Add pet</Title>
        <SubtitleText>Fill the fields</SubtitleText>
        <div>
          <Grid2 container spacing={1}>
            <Grid2>
              <RadioButton
                style={
                  category === "lost/found"
                    ? { background: "#F59256", color: "white" }
                    : { background: "transparent" }
                }
                onClick={(e) => {
                  setFieldValue("category", "lost/found");
                }}
              >
                lost/found
              </RadioButton>
            </Grid2>
            <Grid2>
              <RadioButton
                style={
                  category === "in good hands"
                    ? { background: "#F59256", color: "white" }
                    : { background: "transparent" }
                }
                onClick={() => {
                  setFieldValue("category", "in good hands");
                }}
              >
                in good hands
              </RadioButton>
            </Grid2>
            <Grid2>
              <RadioButton
                style={
                  category === "sell"
                    ? { background: "#F59257", color: "white" }
                    : { background: "transparent" }
                }
                onClick={(e) => {
                  setFieldValue("category", "sell");
                }}
              >
                sell
              </RadioButton>
            </Grid2>
          </Grid2>
        </div>
        <WrapInputFirst>
          <LabelText htmlFor="title">Tittle of ad*</LabelText>
          <InputAddPet
            required
            name="title"
            id="title"
            placeholder="Type name pet"
            onChange={handleChange}
            value={title}
          />
          {/* {title.length < 1 ? (
            <Typography variant="subtitle1">
              {" Write Title"}
            </Typography>
          ) : null} */}
          <LabelText htmlFor="name">Name pet</LabelText>
          <InputAddPet
            id="name"
            name="name"
            placeholder="Type name pet"
            onChange={handleChange}
            value={name}
          />
          <LabelText htmlFor="date_birth">Date of birth</LabelText>
          <InputAddPet
            id="date_birth"
            name="date_birth"
            type="date"
            onChange={handleChange}
            value={date_birth}
          />
          <LabelText htmlFor="breed">Breed</LabelText>
          <InputAddPet
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
            disabled={title.length < 1}
            onClick={handleOpenSecond}
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
