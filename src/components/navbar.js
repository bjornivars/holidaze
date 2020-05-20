import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = (props) => {

    const logo = require('./../Assets/holidazeLogoWhite.png');
    return (
        <div className=" [ nav ] ">
            <div className=" [ nav-logo ] ">
                <Link to="/"><img className=" [ nav-logo-img ] " alt="Logo" src={logo}
                /></Link>
            </div>
            <ul className=" [ nav-ul ] ">
                <li><Link to="/" className=" [ nav-ul-li ] " >Home</Link></li>
                <li><Link to="/allHotels" className=" [ nav-ul-li ] " >All Hotels</Link></li>
                <li><Link to="/contact" className=" [ nav-ul-li ] " >Contact</Link></li>
                <li><Link to="/adminHome" className=" [ nav-ul-li ] " >Admin</Link></li>
            </ul>
        </div>
    )
}

export default Navbar;