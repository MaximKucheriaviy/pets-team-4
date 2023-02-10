// import PropTypes from 'prop-types';
import {UserIcons} from '../UserIcons/UserIcons'

import { MyInform } from "./MyInformationStyled";

import MyInformationTabl from './MyInformationTabl';

export default function MyInformation({users}) {
    const DefaultAvatar = 'https://pixabay.com/get/ga857e9aa8fc7b2c69ed69fb64a61453ad6c5cbe24dda78c790a153f783218258491453ecf3b8f9590e810709ae711a1b_640.jpg';
    const { avatar=DefaultAvatar, name} = users;

    const changeAvatar = async (event) => {
    // написати
  };

    return (
        <MyInform >
            <div className='user-cont'>
                <div className='cont-avatar'>
                    <img className='user-avatar' src={avatar} alt={name} />
                </div>
                <button type="file" onChange={changeAvatar}>
                    <UserIcons id="camera"/>
                    <p>Edit photo</p>
                </button>
            </div>
            <MyInformationTabl tablItem={users}  />


        </MyInform>
    )
}

// MyPetsList.propTypes = {
//     items: PropTypes.arrayOf(
// PropTypes.shape({
//     id:PropTypes.string.isRequired,
// })
//     )
// }
