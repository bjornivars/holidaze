import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AdminNavbar from '../components/adminNavbar';
import {Link} from 'react-router-dom';
import Login from './Login';

// export default class HomePage extends react.Component {
export default function HomePage(props) {
    
const [isLoggedIn, setIsLoggedIn] = useState(false);

  function updateLogin() {
    localStorage.setItem("isLoggedIn", true)
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
  }
  
    return (localStorage.getItem('username') !== null && localStorage.getItem("isLoggedIn") === "true") ? (
        <div className='App'>
          <AdminNavbar />

          <div className="container">
              <div className=" [ largeBox-container col-8 ] ">
              <div className=" [ largeBox col-3 ]  ">
                <Link to="/enquiries">
                    <h1 className=" [ largeBox-text ] ">Enquries</h1>
                </Link>
              </div>
              <div className=" [ largeBox col-3 ]  ">
                <Link to="/contactMessages">
                    <h1 className=" [ largeBox-text ] ">Contact Messages</h1>
                </Link>
              </div>
              <div className=" [ largeBox col-3 ]  ">
                <Link to="/newEstablishment">
                    <h1 className=" [ largeBox-text ] ">New Establishment</h1>
                </Link>
              </div>
              </div>
          </div>
        </div>
      ) : (
        <Login updateLoginStatus={updateLogin} />
      )
}