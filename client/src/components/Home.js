import React from 'react';
import header from '../images/header.png';
import styled from 'styled-components';

const Home = () => {
    return(
        <div>
            <Head>
                <img src={header} alt="" style={{ height: '700px' }}/>
            </Head>
             <ContentContainer>              
            <Content>
                <iframe className="stream" title="Mixer stream" src="https://mixer.com/embed/player/Paladyn_Zyro" frameborder="0"></iframe>
            </Content>
            <div style={{ width: '30%' }}>
                <Chat title="Mixer chat" src="https://mixer.com/embed/chat/Paladyn_Zyro" frameborder="0"></Chat>
            </div>
            </ContentContainer> 
            <InfoCont>
                <Card></Card>
                <Card></Card>
                <Card></Card>
            </InfoCont>
        </div>
    )
}

const Head = styled.header`
    background: black;
    margin-bottom: 100px;
`;

const Content = styled.div`
    width: 70%;
    .stream{
        width: 100%;
        height: 700px;
        max-width: 1200px;
    }
`;
const ContentContainer = styled.div`
    display: flex;
    width: 100%;
    jusify-content: center;
    margin-bottom: 100px;
`;
const Chat = styled.iframe`
    width: 100%;
    max-width: 500px;
    height: 700px;
`;
const InfoCont = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-around;
    margin-bottom: 200px;
`;
const Card = styled.div`
    width: 20%;
    box-shadow: 5px 5px 5px lightgrey;
    height: 400px;

`;
export default Home;