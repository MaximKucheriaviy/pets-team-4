// import PropTypes from 'prop-types';
import {UserIcons} from '../UserIcons/UserIcons'

import { MyInform} from "./MyInformationStyled";

import {EditName, EditEmail, EditBirthday, EditPhone, EditCity} from './MyInformationRenameInfo'

import { useRef, useState } from 'react';
import { patchCurrentUserAvatar } from "../../../services/apiAuth"

export default function MyInformation({users, setInfoUser, onSubmit, onSubmitName}) {
    const DefaultAvatar = 'https://pixabay.com/get/g2b24e5ea9ca745fec0afa440645dc29814e70b147fecbb84905593ab50e25f980efe2997fcae7c59001de0ae820e72b5_640.jpg';
    const { avatarURL, name } = users;
    const avatarRef = useRef(null)
    const [update, setUpdate] = useState(false);

    
    const handlPatchAvatar = async (img) => {
        const formData = new FormData();
        formData.append("avatar", img);
        const respons =await patchCurrentUserAvatar(formData)
        setInfoUser(state => {
            state.avatarURL = respons.data.avatarURL
            console.log(respons.data.avatarURL);
            return state
        })
        setUpdate(!update);

    }
    

    return (
        <MyInform >
            <div className='user-cont'>
                <div className='cont-avatar'>
                    <img className='user-avatar' src={avatarURL||DefaultAvatar} alt={name} />
                </div>
                <input id="avatar" type="file" hidden ref={avatarRef} onChange={(e) => { handlPatchAvatar(e.target.files[0]) }} />
                                
                <button onClick={() => {avatarRef.current.click() }}>
                    <UserIcons id="camera"/>
                    <p>Edit photo</p>
                </button>
            </div>
            {/* <MyInformationTabl */}
                <table className='user-tabl'>
                    <tbody>
                        <EditName users={users} />
                        <EditEmail users={users}/>
                        <EditBirthday users={users}/>
                        <EditPhone users={users}/>
                        <EditCity users={users}/>
                    </tbody>
            </table>
{/*             
                // tablItem={users}
                // onSubmit
                // onSubmitName
            {/* /> */}

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
