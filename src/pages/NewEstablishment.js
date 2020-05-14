
import React, { useState, useEffect } from 'react';
import LoginAdmin from './Login';
import AdminNavbar from './../components/adminNavbar';

export default function NewEstablishment(props) {
    const [isLoggedIn, setIsLoggedIn] = useState(undefined);

    
    function updateLogin() {
        setIsLoggedIn(true);
        //console.log('isLoggedIn should be true = ', isLoggedIn)
      }

      console.log(isLoggedIn);
    return (localStorage.getItem("username") === "cameron" ) ? (
        <div>
            <AdminNavbar />
            <h1 className="container">New Establishment</h1>
        </div>
    ) : (
        <LoginAdmin updateLoginStatus={updateLogin} />
    )}