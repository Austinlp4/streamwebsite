import React from 'react';
import logo from '../images/zyro.png';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const Nav = () => {
    return(
        <NavBar>
            <img src={logo} alt="" style={{ width: "150px", height: '75px'}}/>
            <Links>
                <NavLink to="/">Home</NavLink>
                <a href="">Merch</a>
                <a href="">About</a>
                <a href="">Contact</a>
            </Links>
        </NavBar>
    )
}

const NavBar = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 5%;
    box-shadow: 5px 5px 5px lightgrey;
`;
const Links = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-between;
    a{
        text-decoration: none;
        color: grey;
    }
`;
export default Nav;