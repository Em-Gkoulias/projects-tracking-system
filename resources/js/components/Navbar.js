import React from 'react';
import Search from './NavbarComponents/Search';
import Notifications from './NavbarComponents/Notifications';
import User from './NavbarComponents/User';

import logo from "../components/images/logo.jpg";

function Navbar() {
    return (
        <div className="Navbar">
            <img src={logo} alt="LOGO" className="logo" />
            <div className="navbarRight">
                <Search />
                <Notifications />
                <User />
            </div>
        </div>
    );
}

export default Navbar;
