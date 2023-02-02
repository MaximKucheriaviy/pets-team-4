
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

import { logOut } from "../../redux/auth/auth-operation";
import { selectIsLogin } from "../../redux/auth/autSelectors";
import { Navigate } from "react-router-dom";

import MyPetsList from "./MyPetsList/MyPetsList";
import MyInformation from './MyInformation/MyInformation';

import { UserStyled } from './UserStyled';

import Pets from './MyPetsTemporary.json';
import InfoUser from './MyUserTemporary.json';



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
    <UserStyled>
      <div className="user-card">
        <h3 className="user-card-info">My information:</h3>   
        <div className="user-info">
          <MyInformation users={InfoUser } />
          <button type="button" className="loqout" onClick={onLogout} variant="contained">
            <svg className='loqout-icons'>
                <path d="M15.305 6.571c.08-.079.208-.08.287 0l1.575 1.575c.49.49.49 1.288 0 1.779l-1.575 1.574a.2.2 0 0 1-.143.06.203.203 0 0 1-.144-.347l1.12-1.12.853-.854H7.63a.203.203 0 1 1 0-.406H17.278l-.853-.854-1.12-1.12a.203.203 0 0 1 0-.287Zm-3.078 7.21v1.406A2.316 2.316 0 0 1 9.914 17.5H2.848a2.316 2.316 0 0 1-2.313-2.313V2.813A2.316 2.316 0 0 1 2.848.5h7.066a2.316 2.316 0 0 1 2.313 2.313v1.406a.203.203 0 1 1-.407 0V2.812A1.908 1.908 0 0 0 9.914.907H2.848A1.908 1.908 0 0 0 .94 2.812v12.376c0 1.051.855 1.906 1.907 1.906h7.066a1.908 1.908 0 0 0 1.906-1.907v-1.406a.203.203 0 1 1 .407 0Z"/>
            </svg>
            <p>Log Out</p>
            </button>
        </div>
      </div>
      <div>
        <MyPetsList items={Pets } /> 
      </div>
    </UserStyled>

  )
}
