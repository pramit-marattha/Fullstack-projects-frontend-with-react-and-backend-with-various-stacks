import React from 'react';
import { Link } from 'react-router-dom';
import "./Navbar.css";


const Navbar = () => {
    return (
        <div className="container__navbar">
        <div className="navbar-title">Github Search</div>
        <ul className="navbar-menu">
        <li><Link to="/">Search-Projects</Link></li>
        <li><Link to="/note">Take-Note</Link></li>
        </ul>
        <div className="navbar-menu"></div>
      </div>
    )
}

export default Navbar;
