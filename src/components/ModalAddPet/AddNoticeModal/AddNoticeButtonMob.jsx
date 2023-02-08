import{ BtnAddPetMob, IconAddPet} from "./AddNoticeButton.styled"

export const AddNoticeButtonMob = ({handleOpen}) => {
    return(
        <BtnAddPetMob onClick={handleOpen}>
          <IconAddPet/>
          AddPet
        </BtnAddPetMob>
    )
}