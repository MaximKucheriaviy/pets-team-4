// import PropTypes from "prop-types";

import { PetsItemStyled } from './MyPetsItemStyled'
import {UserIcons} from '../UserIcons/UserIcons'


export default function  MyPets ({_id, avatarURL, name="default", date, breed="default", comments="default", deletePet }) {
    return (
            <PetsItemStyled key={_id}>
            <img className='card-avatar' src={avatarURL} alt={name} />
            <div className='card-info' key={_id}>
                <div className='card-name'>
                    <p>
                        <b>Name: </b>{name}
                    </p>
                    <button
                        className='card-btn'
                        type="button"
                         onClick={() => {deletePet(_id); }}
                    >
                        <UserIcons id="icon-user_delete" />
                    </button>
                </div>
                <p>
                    <b>Date of birth: </b>{date}
                </p>
                <p >
                    <b>Breed: </b>{breed}
                </p>
                <p >
                    <b>Comments: </b>{comments}
                </p>
                </div>
            </PetsItemStyled>
  );
};

// MyPets.propTypes = {
  // id: PropTypes.string.isRequired,
//   img: PropTypes.string.isRequired,
//   name: PropTypes.string.isRequired,
//   data: PropTypes.string.isRequired,
//   breed: PropTypes.string.isRequired,
//   comments: PropTypes.string.isRequired,
  // owner: PropTypes.string.isRequired,
  // deletePet: PropTypes.string.isRequired,
// };

// export default MyPets;
