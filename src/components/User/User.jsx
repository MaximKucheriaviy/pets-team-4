
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';
import { Notify } from "notiflix/build/notiflix-notify-aio";

import { logOut } from "../../redux/auth/auth-operation";
import { selectIsLogin, selectToken } from "../../redux/auth/autSelectors";

import { getUserPets, postUserPets, getDeleteUserPets } from '../../services/apiUserPets';
import {getCurrentUser} from '../../services/apiAuth'

import AddUserPetModal from "../AddUserPetModal/AddUserPetModal";
import MyInformation from './MyInformation/MyInformation';
import {UserIcons} from './UserIcons/UserIcons'

import MyPetsList from "./MyPetsList/MyPetsList";
import { UserStyled } from './UserStyled';


export default function User() {

  const isUserLogin = useSelector(selectIsLogin);
  const [pets, setPets] = useState([]);
  const token = useSelector(selectToken);
  const [InfoUser, setInfoUser] = useState({})

  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);


  useEffect(() => {
    (async () => {
      
      try {
        const { data } = await getUserPets(token);
        setPets(data.pets);
        const user = await getCurrentUser(token);
        setInfoUser(user);
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
      Notify.error("Something go went, please try again")
    }
  }
  

  return (
    <UserStyled>
      <div className="user-card">
        <h3 className="user-card-info">My information:</h3>   
        <div className="user-info">
          <MyInformation
            users={InfoUser}
            setInfoUser={setInfoUser}
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
      </div>
    </UserStyled>

  )
}






