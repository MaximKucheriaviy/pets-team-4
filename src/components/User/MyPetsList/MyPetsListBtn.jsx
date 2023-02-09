// 
import { PetsHederStyled } from "./MyPetsListStyled";
import {UserIcons} from '../UserIcons/UserIcons'

export const AddPetsButton = ({ handleOpen }) => {
    return (
        <PetsHederStyled>
            <h3 className='pets-add-hed'>Add pet</h3>
            <button
                    type="button"
                    className='pets-addbtn'
                    onClick={handleOpen}
                >
                    <UserIcons id="icon-user_plus"/>
            </button>
      </PetsHederStyled>
  );
};
