// import PropTypes from 'prop-types';
import AddUserPetModal from "../../AddUserPetModal/AddUserPetModal";
import { useState } from "react";

import { PetsHederStyled } from "./MyPetsListStyled";

import MyPets from "../MyPetsItem/MyPetsItem";

import {AddNoticeButton} from '../../ModalAddPet/AddNoticeModal/AddNoticeButton'


export default function MyPetsList({ addPet, items, deletePet }) {
  const [modalOpen, setModalOpen] = useState(false);

  const closeModal = () => {
    setModalOpen(!modalOpen);
  };
  return (
    <>
      <div>
        <PetsHederStyled>
          <h3 className="pets-add-hed">My pets:</h3>
          <div className="pets-add">
            <AddNoticeButton handleOpen={setModalOpen}  />
          </div>
        </PetsHederStyled>
        <ul>
          {items.map((item) => (
            <MyPets
                key={item._id}
                img={item.img}
                name={item.name}
                data={item.data}
                breed={item.breed}
                comments={item.comments}
                deletePet={deletePet}
              />
          ))}
        </ul>
      </div>
      {modalOpen && <AddUserPetModal onClose={closeModal} addPet={addPet}></AddUserPetModal>}
    </>
  );
}

// MyPetsList.propTypes = {
//     items: PropTypes.arrayOf(
// PropTypes.shape({
//     id:PropTypes.string.isRequired,
// })
//     )
// }
