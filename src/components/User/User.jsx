
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { logOut } from "../../redux/auth/auth-operation";
import MyPetsList from "./MyPetsList/MyPetsList"
import Pets from './MyPetsTemporary.json'

import { selectIsLogin } from "../../redux/auth/autSelectors";
import { Navigate } from "react-router-dom";

export default function User() {
 const isUserLogin = useSelector(selectIsLogin);
   
	const dispatch = useDispatch();
	    const onLogout = () => {
        dispatch(logOut());
        
         if (!isUserLogin) {
    return <Navigate to={"/news"} />;
  }
  }
  return (
    <div>
    <div>
      <h3>User</h3>
      <button onClick={onLogout} variant="contained"> Logout</button>
    </div>
      <MyPetsList items={Pets } /> 

    </div>

  )
}
