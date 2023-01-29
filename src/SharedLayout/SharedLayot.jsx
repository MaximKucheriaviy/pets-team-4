import { Suspense } from "react";
import { Outlet } from "react-router-dom";

import { Header } from "../components/Header/Navigation/allNavigation/Header";
export const SharedLayout = () => {
  return (
    <>
      <Header />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
    </>
  );
};
