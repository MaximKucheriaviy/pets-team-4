
import { useDispatch } from "react-redux";

import { logOut } from "../../redux/auth/auth-operation";




export default function User() {

   
	const dispatch = useDispatch();
	    const onLogout = () => {
    dispatch(logOut());
  }
    return (
      <div>
      <h3>User</h3>
            <button onClick={onLogout} variant="contained"> Logout</button>
            </div>
  )
}
