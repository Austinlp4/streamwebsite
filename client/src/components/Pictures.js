import React, { Component } from 'react';
import Pics from '../Api.js';
import styled from 'styled-components';

class Pictures extends Component{
    state = {
        Pics: Pics
    };

    componentDidMount(){
        
    }

    render(){
        return(
            <Container>
                {this.state.Pics.map(pic => <Img src={pic}/>)}
            </Container>
        )
    }
}

const Container = styled.div`
    display: flex;
    flex-wrap: wrap;
    padding-top: 70px;
    
`;

const Img = styled.img`
    width: 50%;
    height: 50%;
`;

export default Pictures;