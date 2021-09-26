import React from 'react';
import './Header.css';
import logo from '../../img/logo.png'


const Header = () => {
    return (
        <div className='header'>
            <img src={logo} alt="" />
            <h1>Total Budget is: $195 million </h1>
        </div>
    );
};

export default Header;