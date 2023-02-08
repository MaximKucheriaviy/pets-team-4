// //
import { UserIcons } from '../UserIcons/UserIcons'
import { useState } from 'react';
// import { useDispatch } from 'react-redux';
import {MyInformItem} from './MyInformationStyled'

// =============== change name ====================================================

export function EditName( user) {


//     // const dispatch = useDispatch();

    const [disabled, setDisabled] = useState(true);
    
    function SubmitRemoveInfo() {
//         // витягнути з редакса логіку зміни інфо на сервері
//     // const action = addContact(contact);
//     // dispatch(action);
    }
    
    function ChangeBtn() {
    setDisabled(!disabled);
  }



    return (
        <tr>
            <td>Name:</td>
            <th>
                <MyInformItem type="text" name="name"  disabled={ disabled} placeholder={user.name}  />
            </th> 
            <th className='table-red'>
                 {disabled ? 
                <button type='button' onClick={ChangeBtn}>
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

    //   const dispatch = useDispatch();

    const [disabled, setDisabled] = useState(true);
    
    function SubmitRemoveInfo() {
        // витягнути з редакса логіку зміни інфо на сервері
    // const action = addContact(contact);
    // dispatch(action);
    }
    
    function ChangeBtn() {
    setDisabled(!disabled);
  }



    return (
        <tr>
            <td>Email:</td>
            <th>
                <MyInformItem type="text" name="name"  disabled={ disabled} placeholder={user.email}  />
            </th> 
            <th className='table-red'>
                 {disabled ? 
                <button type='button' onClick={ChangeBtn}>
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

    //   const dispatch = useDispatch();

    const [disabled, setDisabled] = useState(true);
    
    function SubmitRemoveInfo() {
        // витягнути з редакса логіку зміни інфо на сервері
    // const action = addContact(contact);
    // dispatch(action);
    }
    
    function ChangeBtn() {
    setDisabled(!disabled);
  }



    return (
        <tr>
            <td>Birthday:</td>
            <th>
                <MyInformItem type="text" name="name"  disabled={ disabled} placeholder={user.birthday}  />
            </th> 
            <th className='table-red'>
                 {disabled ? 
                <button type='button' onClick={ChangeBtn}>
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

    //   const dispatch = useDispatch();

    const [disabled, setDisabled] = useState(true);
    
    function SubmitRemoveInfo() {
        // витягнути з редакса логіку зміни інфо на сервері
    // const action = addContact(contact);
    // dispatch(action);
    }
    
    function ChangeBtn() {
    setDisabled(!disabled);
  }



    return (
        <tr>
            <td>Phone:</td>
            <th>
                <MyInformItem type="text" name="name"  disabled={ disabled} placeholder={user.phone}  />
            </th> 
            <th className='table-red'>
                 {disabled ? 
                <button type='button' onClick={ChangeBtn}>
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

    //   const dispatch = useDispatch();

    const [disabled, setDisabled] = useState(true);
    
    function SubmitRemoveInfo() {
        // витягнути з редакса логіку зміни інфо на сервері
    // const action = addContact(contact);
    // dispatch(action);
    }
    
    function ChangeBtn() {
    setDisabled(!disabled);
  }


    return (
        <tr>
            <td>City:</td>
            <th>
                <MyInformItem type="text" name="name"  disabled={ disabled} placeholder={user.city}  />
            </th> 
            <th className='table-red'>
                 {disabled ? 
                <button type='button' onClick={ChangeBtn}>
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

