
import { Navigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { useEffect, useState } from 'react';


import { logOut } from "../../redux/auth/auth-operation";
import { selectIsLogin, selectUser, selectToken} from "../../redux/auth/autSelectors";
import AddUserPetModal from "../AddUserPetModal/AddUserPetModal";


// import { deletePet, addPet } from '../../redux/auth/auth-operation'
// import { current } from '../../redux/auth/auth-operation'



import MyPetsList from "./MyPetsList/MyPetsList";
import MyInformation from './MyInformation/MyInformation';
import {UserIcons} from './UserIcons/UserIcons'

import { UserStyled } from './UserStyled';

// import InfoPets from './MyPetsTemporary.json';
import { getUserPets, postUserPets } from '../../services/apiUserPets';

export default function User() {
  const isUserLogin = useSelector(selectIsLogin);
  const InfoUser = useSelector(selectUser);
  // const InfoPets = useSelector(selectPets);
  const [pets, setPets] = useState([]);
  const token = useSelector(selectToken);
    // const [addPets, setAddPets] = useState([]);



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

  //   useEffect(() => {
  //   (async () => {
  //     try {
  //       console.log(token);
  //       const { data } = await postUserPets(token);
  //       setAddPets(data.pets);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   })();
  // }, [token]);

  
  const onLogout = () => {
    dispatch(logOut());
    if (!isUserLogin) {
      return <Navigate to={"/news"} />;
    }
  }

  // const onAddPet = data => {
  //   const action = addPet(data);
  //   dispatch(action);
  // };


  // const onDeletePet = id => {
  //   const action = deletePet(id);
  //   dispatch(action);
  // };


  const closeModal = () => {
    setModalOpen(!modalOpen);
  };


  return (
    <UserStyled>
      <div className="user-card">
        <h3 className="user-card-info">My information:</h3>   
        <div className="user-info">
          <MyInformation users={InfoUser } />
          <button type="button" className="loqout" onClick={onLogout} variant="contained">
            <UserIcons id="icon-user_logout" />
            <p>Log Out</p>
            </button>
        </div>
      </div>
      <div className="pets-conteiner">
        <MyPetsList items={pets} addPet={postUserPets} setModalOpen={()=>setModalOpen(!modalOpen)} /> 
        {modalOpen && <AddUserPetModal onClose={closeModal} ></AddUserPetModal>}

        {/* <MyPetsList items={Pets } addPet={onAddPet} deletePet={onDeletePet}  />  */}

      </div>
    </UserStyled>

  )
}






