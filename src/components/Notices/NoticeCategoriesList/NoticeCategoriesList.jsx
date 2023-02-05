import React from 'react';
// import PropTypes from "prop-types";
import { Gallery } from './NoticeCategoriesList.styled';
import NoticeCategoryItem from './NoticeCategoryItem/NoticeCategoryItem';
// import items from '../pets.json';
import { ModalPetInfo } from '../../ModalPetInfo/ModalPetInfo';

export default function NoticeCategoriesList({items}) {
  // console.log(items);
  return (
    <Gallery>
    <ModalPetInfo/>
    {
        items.map(({birthdate, breed, category, favorite, imageURL,owner, place, title, price, _id }) => {
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
