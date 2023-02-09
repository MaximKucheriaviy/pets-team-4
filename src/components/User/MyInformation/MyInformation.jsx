// import PropTypes from 'prop-types';
import {UserIcons} from '../UserIcons/UserIcons'

import { MyInform } from "./MyInformationStyled";

import MyInformationTabl from './MyInformationTabl';

export default function MyInformation({users, onSubmit}) {
    const DefaultAvatar = 'https://pixabay.com/get/g2b24e5ea9ca745fec0afa440645dc29814e70b147fecbb84905593ab50e25f980efe2997fcae7c59001de0ae820e72b5_640.jpg';
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
            <MyInformationTabl tablItem={users}  onSubmit/>


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
