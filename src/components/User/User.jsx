
import { useDispatch } from "react-redux";

import { logOut } from "../../redux/auth/auth-operation";
import MyPets from "./myPets"




export default function User() {

   
	const dispatch = useDispatch();
	    const onLogout = () => {
    dispatch(logOut());
  }
  return (
    <div>
    <div>
      <h3>User</h3>
      <button onClick={onLogout} variant="contained"> Logout</button>
    </div>
          <MyPets/>
    </div>

  )
}
