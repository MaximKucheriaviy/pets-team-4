import React from "react";
import { Outlet } from "react-router";
// import PropTypes from "prop-types";
import { LinkCategory, NavBar } from "./NoticesCategoriesNav.styled";

const auth = true;
// const auth = false;

export default function NoticesCategoriesNav() {
  return (
    <>
      {auth ? (
        <NavBar>
          <li>
            <LinkCategory to={"/notices/categories/lost-found"}>lost/found</LinkCategory>
          </li>
          <li>
            <LinkCategory to="/notices/categories/for-free">In good hands</LinkCategory>
          </li>
          <li>
            <LinkCategory to="/notices/categories/sell">sell</LinkCategory>
          </li>
          <li>
            <LinkCategory to="/notices/categories/favorite">favorite ads</LinkCategory>
          </li>
          <li>
            <LinkCategory to="/notices/categories/own">my ads</LinkCategory>
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
