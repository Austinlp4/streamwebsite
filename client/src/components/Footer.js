import React from 'react';
import styled from 'styled-components';
import logo from '../images/logo-wrd.png';

const Footer = () => {
    return(
         <Foot>
             <img src={logo} alt="" style={{ width: '300px', height: 'auto' }}/>
         </Foot>
    )
}

const Foot = styled.div`
    bottom: 0;
    width: 100%;
    background: rgb(23, 30, 42);

`;

export default Footer;