// //
import { UserIcons } from '../UserIcons/UserIcons'
import { useState, useRef } from 'react';
import { v4 } from 'uuid';
// import { useDispatch } from 'react-redux';
import { MyInformItem } from './MyInformationStyled'



// =============== change name ====================================================

export function EditName(user, onSubmit) {
    const [disabled, setDisabled] = useState(true);
    const inputID = useRef(v4());
    
    const selectInput = (id) => {
        const el = document.getElementById(id);
        el.disabled = false;
        el.focus();
}

//     // const dispatch = useDispatch();

    
    function SubmitRemoveInfo() {
//         // написати
//     // const action = addContact(contact);
//     // dispatch(action);
    }
    
    function ChangeBtn() {
        setDisabled(!disabled);
    }

    const openHandler = () => {
        setDisabled(!disabled);
        selectInput(inputID.current);
  }

    return (
        <tr>
            <td>Name:</td>
            <th>
                <MyInformItem type="text" name="name" disabled={disabled} placeholder={user.name} id={inputID.current} />
            </th> 
            <th className='table-red'>
                 {disabled ? 
                <button type='button' onClick={openHandler} >
                    <UserIcons id="icon-user_red" />
                </button> :
                <button type='submit' onSubmit={SubmitRemoveInfo} onClick={ChangeBtn}>
                    <UserIcons id="icon-user_done"  />
                </button>
                }
            </th>
        </tr>
    )
 }

// =============== change email ====================================================

export function EditEmail( user) {
    const [disabled, setDisabled] = useState(true);
    const inputID = useRef(v4());
    
    const selectInput = (id) => {
        const el = document.getElementById(id);
        el.disabled = false;
        el.focus();
}

//     // const dispatch = useDispatch();

    
    function SubmitRemoveInfo() {
//         // написати
//     // const action = addContact(contact);
//     // dispatch(action);
    }
    
    function ChangeBtn() {
        setDisabled(!disabled);
    }

    const openHandler = () => {
        setDisabled(!disabled);
        selectInput(inputID.current);
  }
    
    return (
        <tr>
            <td>Email:</td>
            <th>
                <MyInformItem type="text" name="name"  disabled={ disabled} placeholder={user.email} id={inputID.current}  />
            </th> 
            <th className='table-red'>
                 {disabled ? 
                <button type='button' onClick={openHandler}>
                    <UserIcons id="icon-user_red" />
                </button> :
                <button type='submit' onSubmit={SubmitRemoveInfo} onClick={ChangeBtn}>
                    <UserIcons id="icon-user_done"  />
                </button>
                }
            </th>
        </tr>
    )
}
 
// =============== change birthday ====================================================

export function EditBirthday( user) {
    const [disabled, setDisabled] = useState(true);
    const inputID = useRef(v4());
    
    const selectInput = (id) => {
        const el = document.getElementById(id);
        el.disabled = false;
        el.focus();
}

//     // const dispatch = useDispatch();

    
    function SubmitRemoveInfo() {
//         // написати
//     // const action = addContact(contact);
//     // dispatch(action);
    }
    
    function ChangeBtn() {
        setDisabled(!disabled);
    }

    const openHandler = () => {
        setDisabled(!disabled);
        selectInput(inputID.current);
  }


    return (
        <tr>
            <td>Birthday:</td>
            <th>
                <MyInformItem type="text" name="name"  disabled={ disabled} placeholder={user.birthday} id={inputID.current}  />
            </th> 
            <th className='table-red'>
                 {disabled ? 
                <button type='button' onClick={openHandler}>
                    <UserIcons id="icon-user_red" />
                </button> :
                <button type='submit' onSubmit={SubmitRemoveInfo} onClick={ChangeBtn}>
                    <UserIcons id="icon-user_done"  />
                </button>
                }
            </th>
        </tr>
    )
}
 
// =============== change phone ====================================================

export function EditPhone( user) {
    const [disabled, setDisabled] = useState(true);
    const inputID = useRef(v4());
    
    const selectInput = (id) => {
        const el = document.getElementById(id);
        el.disabled = false;
        el.focus();
}

//     // const dispatch = useDispatch();

    
    function SubmitRemoveInfo() {
//         // написати
//     // const action = addContact(contact);
//     // dispatch(action);
    }
    
    function ChangeBtn() {
        setDisabled(!disabled);
    }

    const openHandler = () => {
        setDisabled(!disabled);
        selectInput(inputID.current);
  }

    return (
        <tr>
            <td>Phone:</td>
            <th>
                <MyInformItem type="text" name="name"  disabled={ disabled} placeholder={user.phone}  id={inputID.current} />
            </th> 
            <th className='table-red'>
                 {disabled ? 
                <button type='button' onClick={openHandler}>
                    <UserIcons id="icon-user_red" />
                </button> :
                <button type='submit' onSubmit={SubmitRemoveInfo} onClick={ChangeBtn}>
                    <UserIcons id="icon-user_done"  />
                </button>
                }
            </th>
        </tr>
    )
 }
// =============== change city ====================================================
export function EditCity(user) {
    const [disabled, setDisabled] = useState(true);
    const inputID = useRef(v4());
    
    const selectInput = (id) => {
        const el = document.getElementById(id);
        el.disabled = false;
        el.focus();
}

//     // const dispatch = useDispatch();

    
    function SubmitRemoveInfo() {
//         // написати
//     // const action = addContact(contact);
//     // dispatch(action);
    }
    
    function ChangeBtn() {
        setDisabled(!disabled);
    }

    const openHandler = () => {
        setDisabled(!disabled);
        selectInput(inputID.current);
  }


    return (
        <tr>
            <td>City:</td>
            <th>
                <MyInformItem type="text" name="name"  disabled={ disabled} placeholder={user.city} id={inputID.current}  />
            </th> 
            <th className='table-red'>
                 {disabled ? 
                <button type='button' onClick={openHandler}>
                    <UserIcons id="icon-user_red" />
                </button> :
                <button type='submit' onSubmit={SubmitRemoveInfo} onClick={ChangeBtn}>
                    <UserIcons id="icon-user_done"  />
                </button>
                }
            </th>
        </tr>
    )
 }

