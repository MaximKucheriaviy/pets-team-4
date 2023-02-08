// import PropTypes from 'prop-types';
import AddUserPetModal from "../../AddUserPetModal/AddUserPetModal";
import { useState } from "react";

import { PetsItemStyled, PetsHederStyled } from "./MyPetsListStyled";

import MyPets from "../MyPetsItem/MyPetsItem";

import AddButtonNotMobile from '../../Notices/AddNoticeButton/AddButtonNotMobile/AddButtonNotMobile'


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
            <AddButtonNotMobile handleOpen={setModalOpen} />
          </div>
        </PetsHederStyled>
        <ul>
          {items.map((item) => (
            <PetsItemStyled key={item.id}>
              <MyPets
                img={item.img}
                name={item.name}
                data={item.data}
                breed={item.breed}
                comments={item.comments}
                owner={item.owner}
                deletePet={deletePet}
              />
            </PetsItemStyled>
          ))}
        </ul>
      </div>
      {modalOpen && <AddUserPetModal onClose={closeModal}></AddUserPetModal>}
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
