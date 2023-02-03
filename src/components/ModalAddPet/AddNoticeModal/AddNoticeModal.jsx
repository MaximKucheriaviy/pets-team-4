import {
  BoxAddPet,
  BtnAddPet,
  IconAddPet,
  TextAddPet,
} from "./AddNoticeModal.styled";

export const AddNoticeModal = ({ handleOpen }) => {
  return (
    <BoxAddPet>
      <TextAddPet>Add Pet</TextAddPet>
      <BtnAddPet onClick={handleOpen}>
        <IconAddPet />
      </BtnAddPet>
    </BoxAddPet>
  );
};
