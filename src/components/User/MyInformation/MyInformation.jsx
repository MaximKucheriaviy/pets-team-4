// import PropTypes from 'prop-types';
import {UserIcons} from '../UserIcons/UserIcons'

import { MyInform } from "./MyInformationStyled";


import { MyInform, Text } from './MyInformationStyled';

import MyInformationTabl from './MyInformationTabl';

export default function MyInformation({users}) {
    const DefaultAvatar = 'https://pixabay.com/get/g1e5cae9ac1fb4cd584d50a2326b52ca3c0a687fb212618688de67656cf0fb3f877e7b084d0c4d75f1f2ec8f06f0c1f54_640.jpg';
    const { avatar=DefaultAvatar, name} = users;


    return (
        <MyInform >
            <div className='user-cont'>
                <img className='user-avatar' src={avatar} alt={name} />
                <button type="button" >
                    <UserIcons id="camera"/>
                    <Text >Edit photo</Text >
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

// <div className='user-text'>
//     <p><b>Name: </b>{name}</p>
//     <p><b>Email: </b>{email}</p>
//     <p><b>Birthday: </b>{birthday}</p>
//     <p><b>Phone: </b>{phone}</p>
//     <p><b>City: </b>{city}</p>
// </div>
