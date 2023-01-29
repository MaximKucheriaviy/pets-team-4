import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import { MainContainer, MainTitle } from "./SharedLayout.styled";

import { Header } from "../components/Header/Navigation/allNavigation/Header";
export const SharedLayout = ({ title = null, children }) => {
  return (
    <MainContainer>
      {title && <MainTitle>{title}</MainTitle>}
      <Header />
      <Suspense fallback={null}>
        {children}
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};
