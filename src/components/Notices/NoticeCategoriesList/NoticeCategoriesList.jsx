import React from 'react';
import PropTypes from "prop-types";
import { Gallery } from './NoticeCategoriesList.styled';
import NoticeCategoryItem from './NoticeCategoryItem/NoticeCategoryItem';

const items = [{
  id:1 ,
   img:"https://cdn.pixabay.com/photo/2015/03/27/13/16/maine-coon-694730_960_720.jpg",
   bread : "Pomeranian",
   place : "Lviv",
   age : "one year",
   categorie :"sale",
  title: "Сute dog looking for a home", 
  userId: 1,
  fovorite: false,
  
},
  {
  id:2 ,
  img:"https://cdn.pixabay.com/photo/2014/11/07/16/48/beast-520789_960_720.jpg",
   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
  //  categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:3 ,
    img:"https://cdn.pixabay.com/photo/2014/11/07/16/48/beast-520789_960_720.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:4 ,
    img:"https://cdn.pixabay.com/photo/2014/11/07/16/48/beast-520789_960_720.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:5 ,
    img:"https://cdn.pixabay.com/photo/2014/11/07/16/48/beast-520789_960_720.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:6 ,
    img:"https://cdn.pixabay.com/photo/2014/11/07/16/48/beast-520789_960_720.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:7 ,
    img:"https://cdn.pixabay.com/photo/2014/11/07/16/48/beast-520789_960_720.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:8 ,
    img:"https://cdn.pixabay.com/photo/2014/11/07/16/48/beast-520789_960_720.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:9 ,
    img:"https://cdn.pixabay.com/photo/2014/11/07/16/48/beast-520789_960_720.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:10 ,
    img:"https://cdn.pixabay.com/photo/2014/11/07/16/48/beast-520789_960_720.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:11 ,
    img:"https://cdn.pixabay.com/photo/2014/11/07/16/48/beast-520789_960_720.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:12 ,
    img:"https://cdn.pixabay.com/photo/2014/11/07/16/48/beast-520789_960_720.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:13 ,
    img:"https://cdn.pixabay.com/photo/2014/11/07/16/48/beast-520789_960_720.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:14 ,
    img:"https://cdn.pixabay.com/photo/2014/11/07/16/48/beast-520789_960_720.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:15 ,
    img:"https://cdn.pixabay.com/photo/2014/11/07/16/48/beast-520789_960_720.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:16 ,
    img:"https://cdn.pixabay.com/photo/2014/11/07/16/48/beast-520789_960_720.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
},
]
export default function NoticeCategoriesList() {
  console.log(items);
  return (
    <Gallery>
    {
        items.map(({ id, img, place,  bread, age,  title, categorie }) => {
          return (
        <NoticeCategoryItem
          key={id}
          id={id}
              img={img}
              place={place} 
              bread={bread}
              age={age}
              categorie={categorie}
          title={title}  />)
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
