import React from 'react';
import { Link } from 'react-router-dom';

const AdminNavbar = (props) => {

    const logo = require('./../Assets/holidazeLogoWhite.png');

    function clear(){
        sessionStorage.clear()
    }
    return (
        <div className=" [ nav admin ] ">
            <div className=" [ nav-logo ] ">
                <Link to="/adminHome"><img className=" [ nav-logo-img ] " alt="Logo" src={logo}
                /> <p className=" [ admin-text ] ">ADMIN</p></Link>
            </div>
            <ul className=" [ nav-ul admin-ul ] ">
                <li onClick={clear}><Link to="/" className=" [ nav-ul-li ] " >User Site</Link></li>
                <li><Link to="/enquiries" className=" [ nav-ul-li ] " >Enquiries</Link></li>
                <li><Link to="/contactMessages" className=" [ nav-ul-li ] " >Contact Messages</Link></li>
                <li><Link to="/newEstablishment" className=" [ nav-ul-li ] " >New Establishment</Link></li>
                <li><Link className="" to="/adminHome" className=" [ nav-ul-li ] "  >Admin Home</Link></li>
                <li onClick={clear}><Link className="" to="/adminHome" className=" [ nav-ul-li ] "  >Log out</Link></li>
            </ul>
        </div>
    )


}

export default AdminNavbar;