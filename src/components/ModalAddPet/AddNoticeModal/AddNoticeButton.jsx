import {
  BoxAddPet,
  BtnAddPet,
  IconAddPet,
  TextAddPet,
} from "./AddNoticeButton.styled";

export const AddNoticeButton = ({ handleOpen }) => {
  return (
    <BoxAddPet>
      <TextAddPet>Add Pet</TextAddPet>
      <BtnAddPet onClick={handleOpen}>
        <IconAddPet />
      </BtnAddPet>
    </BoxAddPet>
  );
};
