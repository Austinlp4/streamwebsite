import React from 'react';
import header from '../images/header.png';
import styled from 'styled-components';

const Home = () => {
    return(
        <div>
            <Head>
                <img src={header} alt="" style={{ height: '700px' }}/>
            </Head>
            <Content>
                <iframe className="stream" title="Mixer stream" src="https://mixer.com/embed/player/Paladyn_Zyro" frameborder="0"></iframe>
            </Content>
            <div>
                <iframe title="Mixer chat" src="https://mixer.com/embed/chat/Paladyn_Zyro" frameborder="0"></iframe>
            </div>
        </div>
    )
}

const Head = styled.header`
    background: black;
    margin-bottom: 100px;
`;

const Content = styled.div`
    .stream{
        width: 80%;
        height: 700px;
    }
`;

export default Home;