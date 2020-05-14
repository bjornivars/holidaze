import React, { useState } from 'react';
import './scss/styles.scss';
import Login from './pages/Login';


export default function App(props) {
/*   const [isLoggedIn, setIsLoggedIn] = useState(false);

    function updateLogin() {
      setIsLoggedIn(true);
      //console.log('isLoggedIn should be true = ', isLoggedIn)
    }
  
    function logoutUser() {
      setIsLoggedIn(false);
      // To remove login values:
      localStorage.clear();
      // To remove contact form values:
      sessionStorage.clear();
      //console.log('isLoggedIn should be false = ', isLoggedIn)
    } */
  return(
    <div className='App'>
      {props.children}
    </div>
  ) 
} 