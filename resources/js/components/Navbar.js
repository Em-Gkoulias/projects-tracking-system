import React from 'react';
import Search from './Search';
import Notifications from './Notifications';
import User from './User';

import logo from "./ant.png";

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
