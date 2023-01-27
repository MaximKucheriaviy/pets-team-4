import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { signup } from '../../../redux/auth/auth-operation';
import { useSelector } from 'react-redux';
import { selectIsLogin } from "../../../redux/auth/autSelectors";
import { Navigate } from 'react-router-dom';
import { Link } from "../../../style";
import { SignInfo } from './SignInfo/signInfo';
import { PersonalInfo } from './PersonalInfo/pesonalInfo';
export const RegisterForm = () => {
 
 const dispatch = useDispatch();
    const isUserLogin = useSelector(selectIsLogin);
    const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  // const [city, setCity] = useState('');
  // const [phone, setPhone] = useState('');
 


   const [page, setPage] = useState(0);

  const pageDisplay = () => {
    if (page === 0) {
      return <SignInfo  email={email} password={password} handleChange={handleChange}
        confirmPassword={confirmPassword} />
    } else {
      return <PersonalInfo  name={name} handleChange={handleChange}/>
    }
  }

  
  const handleChange = ({ target: { value, name } }) => {
    switch (name) {
      case 'name':
        setName(value);
        break;
      case 'email':
        setEmail(value);
        break;
      case 'password':
        setPassword(value);
        break;
      case 'confirmPassword':
        setConfirmPassword(value)
        break

      default:
        break;
    }
  };

  // const pas = (setPassword,setConfirmPassword) => {
  //   if (setPassword !== setConfirmPassword) {
  //      return alert(waaaa)
  //   }
  //   else (setPassword !== setConfirmPassword){
  //     return  alert(sdsdd)
  //   }
  //  }

  const handleSubmit = event => {
    event.preventDefault();

    onRegister({ name, email, password });

    setName('');
    setEmail('');
    setPassword('');
  };
       
  const onRegister = data => {
    dispatch(signup(data));
  };

    if (isUserLogin) {
    return <Navigate to={'/news'} />;
  }


  return (
    <>
      <div>
      <div>
       <form  variant="standard" onSubmit={handleSubmit} autoComplete='on '>
          {pageDisplay()}
            </form>
  </div>
      
      <button onClick={() => { setPage((currPage) => currPage + 1) }}>next</button>
      <button  onClick={() => {setPage((currPage) => currPage - 1 )}} >Prev</button>
        <p>Already have an account?</p> <Link to={"/login"}> Login</Link>
        
        </div>
    </>
  );
};
