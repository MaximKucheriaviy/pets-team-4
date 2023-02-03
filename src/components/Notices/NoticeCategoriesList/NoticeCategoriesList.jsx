import React from 'react';
import PropTypes from "prop-types";
import { Gallery } from './NoticeCategoriesList.styled';
import NoticeCategoryItem from './NoticeCategoryItem/NoticeCategoryItem';
// import items from '../pets.json';

export default function NoticeCategoriesList({items}) {
  console.log(items);
  return (
    <Gallery>
    {
        items.map(({ id, img, place,  bread, age,  title, categorie,userId, fovorite }) => {
          return (
        <NoticeCategoryItem
          key={id}
          id={id}
          img={img}
          place={place} 
          bread={bread}
          age={age}
          categorie={categorie}
          title={title}
          userId={userId}
          fovorite={fovorite}  />)
        })}
      </Gallery>
  );
};

NoticeCategoriesList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number,
    img: PropTypes.string,
    place: PropTypes.string,
    bread: PropTypes.string,
    age: PropTypes.string,
    categorie: PropTypes.string,
    title: PropTypes.string,
    }))
}
