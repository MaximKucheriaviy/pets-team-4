import React from 'react';
import PropTypes from "prop-types";
import { Gallery } from './NoticeCategoriesList.styled';
import NoticeCategoryItem from './NoticeCategoryItem/NoticeCategoryItem';

const items = [{
  id:1 ,
    img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
},
  {
  id:2 ,
  img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",
   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:3 ,
    img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:4 ,
    img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:5 ,
    img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:6 ,
    img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:7 ,
    img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:8 ,
    img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:9 ,
    img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:10 ,
    img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:11 ,
    img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:12 ,
    img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:13 ,
    img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:14 ,
    img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:15 ,
    img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",

   bread : "Pomeranian",
   place : "Lviv",
  age : "one year",
   categorie :"In good hands",
   title: "Сute dog looking for a home"
  },
  {
  id:16 ,
    img:"https://pixabay.com/get/gf235c003c6bebeed21f4e3045799a8274cdebed9abd2b1bb772e44ff92a33bf4b312c3fcb4de39e077ea35794cd7dbf5bc927c0f161192b11a4bf19f33c638bd_640.jpg",

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
