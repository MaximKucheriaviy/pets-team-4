import React from 'react';
// import PropTypes from "prop-types";
import { ButtonCategory, NavBar } from './NoticesCategoriesNav.styled';

const items = [
    {
        id: 1,
        title: "lost/found"
    },
        {
        id: 2,
        title: "In good hands"
    },
            {
        id: 3,
        title: "sell"
    },
                {
        id: 4,
        title: "favorite ads"
    },
                    {
        id: 5,
        title: "my ads"
    },
]
export default function NoticesCategoriesNav() { 
  return (
    <NavBar>
    {
        items.map(({ id, title}) => {
          return (
              <ButtonCategory key={id}>
                  {title}
        </ButtonCategory>)
        })}
      </NavBar>
    //   <NavBar>
    //       <NavBar>
    //       <ButtonCategory> lost/found</ButtonCategory>
    //       <ButtonCategory> In good hands</ButtonCategory>
    //       <ButtonCategory> sell</ButtonCategory>
    //       </NavBar>
    //       <NavBar>
    //       <ButtonCategory> favorite ads</ButtonCategory>
    //       <ButtonCategory> my ads</ButtonCategory>
    //     </NavBar>
    //   </NavBar>
  );
 }

