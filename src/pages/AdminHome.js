import React, { useState } from 'react';
import AdminNavbar from '../components/adminNavbar';
import { Link } from 'react-router-dom';
import Login from './Login';
import Footer from './../components/footer';

// export default class HomePage extends react.Component {
export default function HomePage(props) {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log(isLoggedIn);
  function updateLogin() {
    sessionStorage.setItem("isLoggedIn", true)
    setIsLoggedIn(true);
    //console.log('isLoggedIn should be true = ', isLoggedIn)
  }


  return (sessionStorage.getItem('username') !== null && sessionStorage.getItem("isLoggedIn") === "true") ? (
    <div className='App'>
      <AdminNavbar />
      <div className="container">
        <div className=" [ largeBox-container col-8 col-t-10 col-m-11 ] ">
          <div className=" [ largeBox col-3 col-t-6 col-m-12 ]  ">
            <Link to="/enquiries">
              <h1 className=" [ largeBox-text ] ">Enquries</h1>
            </Link>
          </div>
          <div className=" [ largeBox col-3 col-t-6 col-m-12 ]  ">
            <Link to="/contactMessages">
              <h1 className=" [ largeBox-text ] ">Contact Messages</h1>
            </Link>
          </div>
          <div className=" [ largeBox col-3 col-t-6 col-m-12 ]  ">
            <Link to="/newEstablishment">
              <h1 className=" [ largeBox-text ] ">New Establishment</h1>
            </Link>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  ) : (
      <Login updateLoginStatus={updateLogin} />
    )
}