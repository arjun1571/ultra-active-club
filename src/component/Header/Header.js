import React from 'react';
import "./Header.css"
import logo from "../../image/logo.png"

const Header = () => {
    return (
        <nav className='header-nav'>
            <img className='img-fluid' src={logo} alt="img" />
            <h1>Yoga BD</h1>
        </nav>
    );
};

export default Header;