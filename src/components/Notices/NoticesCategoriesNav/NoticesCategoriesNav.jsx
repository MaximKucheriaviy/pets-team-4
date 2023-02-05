import React from "react";
import { useSelector } from "react-redux";
import { Outlet } from "react-router";
import { selectUser } from "../../../redux/auth/autSelectors";
// import PropTypes from "prop-types";
import { LinkCategory, NavBar } from "./NoticesCategoriesNav.styled";

export default function NoticesCategoriesNav() {
  const user = useSelector(selectUser);
  const auth = Boolean(user.id);
  console.log(auth);

  return (
    <>
      {auth ? (
        <NavBar>
          <li>
            <LinkCategory to={"/notices/lost-found"}>lost/found</LinkCategory>
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
