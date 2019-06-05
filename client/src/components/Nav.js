import React from 'react';
import { NavLink } from 'react-router-dom';
import logo from '../images/logo-wrd.png';
import styled from 'styled-components';

const Nav = () => {
    return(
        <NavBar>
            <img src={logo} alt="" style={{ width: '300px', height: 'auto' }}/>
            <Links>
                <NavLink to="/">Home</NavLink>
                <NavLink to="/videos">Videos</NavLink>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/contact">Contact</NavLink>
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
    position: fixed;
    width: 100%;
    background: white;
`;
const Links = styled.div`
    display: flex;
    width: 20%;
    justify-content: space-between;
    margin-right: 10%;
    a{
        text-decoration: none;
        color: grey;
    }
`;
export default Nav;