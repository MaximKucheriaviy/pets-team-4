import { Suspense } from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Header/Navigation/navigation";
import { MainContainer, MainTitle } from "./SharedLayout.styled";

export const SharedLayout = ({ title = null, children }) => {
  return (
    <MainContainer>
      <Navigation />
      {title && <MainTitle>{title}</MainTitle>}
      <Suspense fallback={null}>
        {children}
        <Outlet />
      </Suspense>
    </MainContainer>
  );
};
