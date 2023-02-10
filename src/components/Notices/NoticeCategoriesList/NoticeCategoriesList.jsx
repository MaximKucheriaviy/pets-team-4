import React from 'react';
// import PropTypes from "prop-types";
import { Gallery } from './NoticeCategoriesList.styled';
import NoticeCategoryItem from './NoticeCategoryItem/NoticeCategoryItem';
// import items from '../pets.json';
import { ModalPetInfo } from '../../ModalPetInfo/ModalPetInfo';
import { useState } from 'react';

export default function NoticeCategoriesList({items, removeNotice, changeFavorite, update, setItems}) {
  const [modalData, setModalData] = useState(null);

  return (
    <Gallery>
    {modalData && <ModalPetInfo close={() => {setModalData(null)}} modalInfo={modalData} update={update} setItems={setItems}/>}
    {
        items.map((item) => {
          const {birthdate, breed, category, favorite, imageURL,owner, place, title, price, _id, fav } = item
          return ( 
              <NoticeCategoryItem
                age={birthdate}
                breed={breed}
                category={category}
                favorite={favorite}
                img={imageURL}
                owner={owner}
                place={place}
                title={title}
                price={price}
                key={_id}
                id={_id}
                fav={fav}
                setModal={() => {
                  setModalData(item)
              }}
              removeNotice={removeNotice}
              changeFavorite={changeFavorite}
              />
          )
        })}
      
      </Gallery>
  );
};

// NoticeCategoriesList.propTypes = {
//   items: PropTypes.arrayOf(PropTypes.shape({
//     id: PropTypes.number,
//     img: PropTypes.string,
//     place: PropTypes.string,
//     bread: PropTypes.string,
//     age: PropTypes.string,
//     categorie: PropTypes.string,
//     title: PropTypes.string,
//     }))
// }
