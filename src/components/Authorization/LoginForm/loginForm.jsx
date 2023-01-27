import { selectIsLogin } from "../../../redux/auth/autSelectors";
import { useDispatch } from 'react-redux';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { logIn } from "../../../redux/auth/auth-operation";
import { Link } from "react-router-dom";

export const LoginForm = () => {
   const dispatch = useDispatch();
  const isUserLogin = useSelector(selectIsLogin);
  
     const [email, setEmail] = useState('');
     const [password, setPassword] = useState('');
   
     const handleChange = ({ target: { value, name } }) => {
       switch (name) {
         case 'email':
           setEmail(value);
           break;
         case 'password':
           setPassword(value);
           break;
   
         default:
           break;
       }
     };
  
     const onLogin = data => {
      dispatch(logIn(data));
    };

     const handleSubmit = event => {
      event.preventDefault();
  
      onLogin({ email, password });
  
      setEmail('');
      setPassword('');
     };
  
     if (isUserLogin) {
    return <Navigate to={'/news'} />;
  }

  return (
    <>
    <form onSubmit={handleSubmit} autoComplete='off'>
      <label >
        Email
        <input type="email"
                    name='email'
                    value={email}
                    onChange={handleChange}
                 
                    placeholder="Enter user email" />
      </label>
      <label>
        Password
        <input type="password"
         
                    name='password'
                    value={password}
                    onChange={handleChange}
                    placeholder="Enter user password "/>
      </label>
      <button type="submit" variant="outlined">Log In</button>
    </form>
      <p>Don't have an account?</p> <Link to={"/register" }> Register</Link>
      </>
  );
};
