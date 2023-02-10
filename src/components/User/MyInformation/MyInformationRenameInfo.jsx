// //
import { UserIcons } from '../UserIcons/UserIcons'
import { useState, useRef } from 'react';
import { v4 } from 'uuid';
// import { useDispatch } from 'react-redux';
import { MyInformItem } from './MyInformationStyled'

import { patchCurrentUserName, patchCurrentUserEmail, patchCurrentUserPhone, patchCurrentUserCity, patchCurrentUserBirthday } from '../../../services/apiAuth';


// =============== change name ====================================================

export function EditName({users}) {
    const [name, setName] = useState('')
    
    const [disabled, setDisabled] = useState(true);
    const inputID = useRef(v4());
    
    const selectInput = (id) => {
        const el = document.getElementById(id);
        el.disabled = false;
        el.focus();
    }
    
    const handlPatchName = async (info) => {
        await patchCurrentUserName({value:info})
    }
    
    function ChangeBtn() {
        setDisabled(!disabled);
        handlPatchName(name);
    }

    const openHandler = () => {
        setDisabled(!disabled);
        selectInput(inputID.current);
    }
    return (
        <tr>
            <td>Name:</td>
            <th>
                <MyInformItem
                    type="text"
                    name="name"
                    disabled={disabled}
                    id={inputID.current}
                    onChange={(e) => { setName(e.target.value) }}
                    defaultValue={users.name}
                />
            </th> 
            <th className='table-red'>
                 {disabled ? 
                <button type='button' onClick={openHandler} >
                    <UserIcons id="icon-user_red" />
                </button>:
                <button
                    type='button'
                    onClick={ChangeBtn}
                >
                    <UserIcons id="icon-user_done"  />
                </button>
                }
            </th>
        </tr>
    )
 }

// =============== change email ====================================================

export function EditEmail({users}) {
    const [email, setEmail] = useState('')

    const [disabled, setDisabled] = useState(true);
    const inputID = useRef(v4());
    
    const selectInput = (id) => {
        const el = document.getElementById(id);
        el.disabled = false;
        el.focus();
}
    const handlPatchEmail = async (info) => {
        await patchCurrentUserEmail({value:info})
    }
    
    function ChangeBtn() {
        setDisabled(!disabled);
        handlPatchEmail(email)
    }

    const openHandler = () => {
        setDisabled(!disabled);
        selectInput(inputID.current);
  }
    
    return (
        <tr>
            <td>Email:</td>
            <th>
                <MyInformItem
                    type="text"
                    name="name"
                    disabled={disabled}
                    id={inputID.current}
                    onChange={(e) => { setEmail(e.target.value) }}
                    defaultValue={users.email}
                />
            </th> 
            <th className='table-red'>
                 {disabled ? 
                <button type='button' onClick={openHandler}>
                    <UserIcons id="icon-user_red" />
                </button> :
                    <button
                        type='button'
                        onClick={ChangeBtn}
                    >
                    <UserIcons id="icon-user_done"  />
                </button>
                }
            </th>
        </tr>
    )
}
 
// =============== change birthday ====================================================

export function EditBirthday({ users }) {
    const [birthday, setBirthday] = useState('')

    const [disabled, setDisabled] = useState(true);
    const inputID = useRef(v4());
    
    const selectInput = (id) => {
        const el = document.getElementById(id);
        el.disabled = false;
        el.focus();
}

    const handlPatchBirthday = async (info) => {
        await patchCurrentUserBirthday({value:info})
    }
    
    function ChangeBtn() {
        setDisabled(!disabled);
        handlPatchBirthday(birthday)
    }

    const openHandler = () => {
        setDisabled(!disabled);
        selectInput(inputID.current);
  }


    return (
        <tr>
            <td>Birthday:</td>
            <th>
                <MyInformItem
                    type="date"
                    name="name"
                    disabled={disabled}
                    id={inputID.current}
                    onChange={(e) => { setBirthday(e.target.value) }}
                    defaultValue={users.birthday}
                />
            </th> 
            <th className='table-red'>
                 {disabled ? 
                <button type='button' onClick={openHandler}>
                    <UserIcons id="icon-user_red" />
                </button> :
                <button type='submit' onClick={ChangeBtn}>
                    <UserIcons id="icon-user_done"  />
                </button>
                }
            </th>
        </tr>
    )
}
 
// =============== change phone ====================================================

export function EditPhone({ users }) {
    const [phone, setPhone] = useState('')

    const [disabled, setDisabled] = useState(true);
    const inputID = useRef(v4());
    
    const selectInput = (id) => {
        const el = document.getElementById(id);
        el.disabled = false;
        el.focus();
}

    const handlPatchPhone = async (info) => {
        await patchCurrentUserPhone({value:info})
    }
    
    function ChangeBtn() {
        setDisabled(!disabled);
        handlPatchPhone(phone);
    }

    const openHandler = () => {
        setDisabled(!disabled);
        selectInput(inputID.current);
  }

    return (
        <tr>
            <td>Phone:</td>
            <th>
                <MyInformItem
                    type="text"
                    name="name"
                    disabled={disabled}
                    id={inputID.current}
                    onChange={(e) => { setPhone(e.target.value) }}
                    defaultValue={users.phone}
                />
            </th> 
            <th className='table-red'>
                 {disabled ? 
                <button type='button' onClick={openHandler}>
                    <UserIcons id="icon-user_red" />
                </button> :
                <button type='submit' onSubmitPhone onClick={ChangeBtn}>
                    <UserIcons id="icon-user_done"  />
                </button>
                }
            </th>
        </tr>
    )
 }
// =============== change city ====================================================
export function EditCity({ users }) {
    const [city, setCity] = useState('')

    const [disabled, setDisabled] = useState(true);
    const inputID = useRef(v4());
    
    const selectInput = (id) => {
        const el = document.getElementById(id);
        el.disabled = false;
        el.focus();
}

    const handlPatchCity = async (info) => {
        await patchCurrentUserCity({ value: info })
        
    }
    
    function ChangeBtn() {
        setDisabled(!disabled);
        handlPatchCity(city)
    }

    const openHandler = () => {
        setDisabled(!disabled);
        selectInput(inputID.current);
  }


    return (
        <tr>
            <td>City:</td>
            <th>
                <MyInformItem
                    type="text"
                    name="name"
                    disabled={disabled}
                    id={inputID.current}
                    onChange={(e) => { setCity(e.target.value) }}
                    defaultValue={users.city}
                    
                />
            </th> 
            <th className='table-red'>
                 {disabled ? 
                <button type='button' onClick={openHandler}>
                    <UserIcons id="icon-user_red" />
                </button> :
                <button type='submit' onClick={ChangeBtn}>
                    <UserIcons id="icon-user_done"  />
                </button>
                }
            </th>
        </tr>
    )
 }

