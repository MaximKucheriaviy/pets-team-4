
import { useDispatch } from "react-redux";

import { logOut } from "../../redux/auth/auth-operation";
import MyPetsList from "./MyPetsList/MyPetsList"
import Pets from './MyPetsTemporary.json'




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
      <MyPetsList items={Pets } /> 

    </div>

  )
}
