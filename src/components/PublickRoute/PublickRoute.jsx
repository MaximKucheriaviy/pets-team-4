import { Navigate, Outlet } from "react-router-dom";
import { useAuth } from "../../shared/useAuth/useAuth";

export default function PublicRoute() {
    const isLogin = useAuth();

    return (
  <>
    { !isLogin ? <Outlet /> : <Navigate to={"/user"}/> }
  </>
  )
}