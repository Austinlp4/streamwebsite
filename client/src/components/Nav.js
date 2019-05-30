import React from 'react';
import logo from '../images/zyro.png';

const Nav = () => {
    return(
        <div>
            <img src={logo} alt=""/>
            <div>
                <a href="">Home</a>
                <a href="">Merch</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </div>
        </div>
    )
}