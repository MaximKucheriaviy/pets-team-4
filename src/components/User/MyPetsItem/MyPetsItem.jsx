import PropTypes from "prop-types";
// import defaultimg from './'

import { PetsContainerStyled } from './MyPetsItemStyled'
import {UserIcons} from '../UserIcons/UserIcons'
    const DefaultAvatar = 'https://pixabay.com/get/g4b942c8109a1b73d03593f3b956594751982cc448837347200f15814f41a7498ef3350609efe0fd866c17f96580baaea_640.jpg';


const MyPets = ({ id, img=DefaultAvatar, name="default", data='01.01.1900', breed="default", comments="default", owner, deletePet }) => {
    
    // const { id, avatarURL, name, data, breed, comments, owner}=items
    return (
        <PetsContainerStyled>
            <img className='card-avatar' src={img} alt={name} />
            <div className='card-info'>
                <div className='card-name'>
                    <p>
                        <b>Name: </b>{name}
                    </p>
                    <button
                        className='card-btn'
                        type="button"
                         onClick={() => {deletePet(id); }}
                    >
                        <UserIcons id="icon-user_delete" />
                    </button>
                </div>
                <p>
                    <b>Date of birth: </b>{data}
                </p>
                <p >
                    <b>Breed: </b>{breed}
                </p>
                <p >
                    <b>Comments: </b>{comments}
                </p>
                {/* <p>
                    {owner}
                </p> */}
      </div>
    </PetsContainerStyled>
  );
};

MyPets.propTypes = {
  // id: PropTypes.string.isRequired,
  img: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  data: PropTypes.string.isRequired,
  breed: PropTypes.string.isRequired,
  comments: PropTypes.string.isRequired,
  // owner: PropTypes.string.isRequired,
  // deletePet: PropTypes.string.isRequired,
};

export default MyPets;
