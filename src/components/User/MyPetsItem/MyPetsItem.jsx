import PropTypes from 'prop-types';
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
                        {/* <svg className='card-icons' xmlns="http://www.w3.org/2000/svg"  fill="none">
                            <path d="M10.5 4.5h3a1.5 1.5 0 1 0-3 0ZM9 4.5a3 3 0 1 1 6 0h6A.75.75 0 1 1 21 6h-.846l-1.808 13.257a3.75 3.75 0 0 1-3.715 3.243H9.369a3.75 3.75 0 0 1-3.715-3.243L3.846 6H3a.75.75 0 0 1 0-1.5h6Zm1.5 5.25a.75.75 0 1 0-1.5 0v7.5a.75.75 0 1 0 1.5 0v-7.5ZM14.25 9a.75.75 0 0 0-.75.75v7.5a.75.75 0 1 0 1.5 0v-7.5a.75.75 0 0 0-.75-.75Z" />
                        </svg> */}
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
    )
}


MyPets.propTypes = {
    // id: PropTypes.string.isRequired,
    img: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    breed: PropTypes.string.isRequired,
    comments: PropTypes.string.isRequired,
    // owner: PropTypes.string.isRequired,
    // deletePet: PropTypes.string.isRequired,

}

export default MyPets;