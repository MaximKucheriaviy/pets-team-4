import React from "react";
import { Outlet } from "react-router";
// import PropTypes from "prop-types";
import { LinkCategory, NavBar } from "./NoticesCategoriesNav.styled";

const auth = true;
// const auth = false;

// const auth = [
//     {
//         id: 1,
//         title: "lost/found"
//     },
//         {
//         id: 2,
//         title: "In good hands"
//     },
//             {
//         id: 3,
//         title: "sell"
//     },
//                 {
//         id: 4,
//         title: "favorite ads"
//     },
//                     {
//         id: 5,
//         title: "my ads"
//     },
// ]

export default function NoticesCategoriesNav() {
  return (
    //   <NavBar>
    // <NavBar>
    // {
    //     auth.map(({ id, title}) => {
    //       return (
    //           <LinkCategory key={id}>
    //               {title}
    //     </LinkCategory>)
    //     })}
    //   </NavBar>
    //         <Outlet />
    //         </NavBar>
    <>
      {/* <NavBar>
          <NavBar> */}
      {auth ? (
        <NavBar>
          <li>
            <LinkCategory to="/notices/lost-found">lost/found</LinkCategory>
          </li>
          <li>
            <LinkCategory to="/notices/for-free">In good hands</LinkCategory>
          </li>
          <li>
            <LinkCategory to="/notices/sell">sell</LinkCategory>
          </li>
          <li>
            <LinkCategory to="/notices/favorite">favorite ads</LinkCategory>
          </li>
          <li>
            <LinkCategory to="/notices/own">my ads</LinkCategory>
          </li>
        </NavBar>
      ) : (
        <NavBar>
          <li>
            <LinkCategory to="/notices/lost-found">lost/found</LinkCategory>
          </li>
          <li>
            <LinkCategory to="/notices/for-free">In good hands</LinkCategory>
          </li>
          <li>
            <LinkCategory to="/notices/sell">sell</LinkCategory>
          </li>
        </NavBar>
      )}
      <Outlet />
    </>
  );
}
