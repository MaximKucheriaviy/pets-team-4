
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';

import { logOut } from "../../redux/auth/auth-operation";
import { selectIsLogin, selectUser, selectToken } from "../../redux/auth/autSelectors";

import { getUserPets, postUserPets, getDeleteUserPets } from '../../services/apiUserPets';
import { patchCurrentUserName, patchCurrentUserEmail, patchCurrentUserPhone, patchCurrentUserCity, patchCurrentUserBirthday, patchCurrentUserAvatar } from '../../services/apiAuth';


import AddUserPetModal from "../AddUserPetModal/AddUserPetModal";
import MyInformation from './MyInformation/MyInformation';
import {UserIcons} from './UserIcons/UserIcons'

import MyPetsList from "./MyPetsList/MyPetsList";
import { UserStyled } from './UserStyled';


export default function User() {

  const isUserLogin = useSelector(selectIsLogin);
  const InfoUser = useSelector(selectUser);
  const [pets, setPets] = useState([]);
  const token = useSelector(selectToken);
  // const [userInfo, setUserInfo] = useState(null)


  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    (async () => {
      try {
        console.log(token);
        const { data } = await getUserPets(token);
        setPets(data.pets);
      } catch (error) {
        console.log(error.message);
      }
    })();
  }, [token, modalOpen]);

  
  const onLogout = () => {
    dispatch(logOut());
    if (!isUserLogin) {
      return <Navigate to={"/news"} />;
    }
  }

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };

const handleDelete = async (petID) => {
    try {
      await getDeleteUserPets(token, petID);
      return setPets((pets) => pets.filter((pet) => pet._id !== petID));
      
    } catch (error) {
      //можешь нотификацию вызвать из библиотеки notiflix
    }
  }
  

  return (
    <UserStyled>
      <div className="user-card">
        <h3 className="user-card-info">My information:</h3>   
        <div className="user-info">
          <MyInformation
            users={InfoUser}
            // onSubmit
            // onSubmitName={patchCurrentUserName}
          />
          <div>
            <button type="button" className="loqout" onClick={onLogout} variant="contained">
              <UserIcons id="icon-user_logout" />
              <p>Log Out</p>
            </button>
          </div>
        </div>
      </div>
      <div className="pets-conteiner">
        <MyPetsList
          items={pets}
          addPet={postUserPets}
          deletePet={handleDelete}
          setModalOpen={() => setModalOpen(!modalOpen)}
        /> 
        {modalOpen && <AddUserPetModal onClose={closeModal} ></AddUserPetModal>}

        {/* <MyPetsList items={Pets } addPet={onAddPet} deletePet={onDeletePet}  />  */}

      </div>
    </UserStyled>

  )
}






