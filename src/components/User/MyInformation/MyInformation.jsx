// import PropTypes from 'prop-types';
import {UserIcons} from '../UserIcons/UserIcons'

import { MyInform } from "./MyInformationStyled";

import MyInformationTabl from './MyInformationTabl';
import { useRef } from 'react';
import { patchCurrentUserAvatar } from "../../../services/apiAuth"
import {PhotoPreviewAvatar} from './MyInfoAvatar'

export default function MyInformation({users, onSubmit, onSubmitName}) {
    const DefaultAvatar = 'https://pixabay.com/get/g2b24e5ea9ca745fec0afa440645dc29814e70b147fecbb84905593ab50e25f980efe2997fcae7c59001de0ae820e72b5_640.jpg';
    const { avatar = DefaultAvatar, name } = users;
    const avatarRef = useRef(null)

    const changeAvatar = async (event) => {
    // написати
    };
    
    const handlPatchAvatar = async (img) => {
        const formData = new FormData();
        formData.append("avatar", img);
        await patchCurrentUserAvatar(formData)

    }
    
console.log(users)

    return (
        <MyInform >
            <div className='user-cont'>
                <div className='cont-avatar'>
                    {/* {users.avatar ? */}
                    <PhotoPreviewAvatar file={avatar} />
                    {/* <img className='user-avatar' src={avatar} alt={name} /> */}
                    {/* : */}
                    {/* } */}
                </div>
                <input id="avatar" type="file" hidden ref={avatarRef} onChange={(e)=>{handlPatchAvatar(e.target.files[0])} } />
                <button onClick={() => {avatarRef.current.click() }}>
                    <UserIcons id="camera"/>
                    <p>Edit photo</p>
                </button>
            </div>
            <MyInformationTabl
                tablItem={users}
                onSubmit
                onSubmitName />


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
