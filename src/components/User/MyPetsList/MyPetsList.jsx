// import PropTypes from 'prop-types';

import { PetsHederStyled } from "./MyPetsListStyled";

import MyPets from "../MyPetsItem/MyPetsItem";
import {AddPetsButton} from './MyPetsListBtn'



export default function MyPetsList({ addPet, items, deletePet, setModalOpen }) {

  return (
      <div>
        <PetsHederStyled>
          <h3 className="pets-add-hedMy">My pets:</h3>
          <div className="pets-add">
            <AddPetsButton handleOpen={setModalOpen}  />
          </div>
        </PetsHederStyled>
        <ul>
          {items.map((item) => (
            <MyPets
                key={item._id}
                _id={item._id}
                avatarURL={item.avatarURL}
                name={item.name}
                date={item.date}
                breed={item.breed}
                comments={item.comments}
                deletePet={deletePet}
              />
          ))}
        </ul>
      </div>
  );
}

// MyPetsList.propTypes = {
//     items: PropTypes.arrayOf(
// PropTypes.shape({
//     id:PropTypes.string.isRequired,
// })
//     )
// }
