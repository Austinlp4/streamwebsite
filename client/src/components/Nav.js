import React from 'react';
import logo from '../images/zyro.png';
import { NavLink } from 'react-router-dom';

const Nav = () => {
    return(
        <div>
            <img src={logo} alt=""/>
            <div>
                <NavLink to="/">Home</NavLink>
                <a href="">Merch</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
        </div>
    )
}