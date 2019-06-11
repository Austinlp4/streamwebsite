import React from 'react';
import header from '../images/header.png';
import styled from 'styled-components';
import youtube from '../images/youtubelogo.png';
import streamlabs from '../images/streamlabslogosmall.png';
import insta from '../images/instalogo.png';

const Home = () => {
    return(
        <div style={{ paddingTop: '70px' }}>
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
                <Card>
                    <img src={streamlabs} alt=""/>
                    <p>
                        Donations are never required but are most certainly appreciated.
                         They help me improve my stream and bring you more enjoyable content. 
                         Not to mention they help me get by. Regardless, thank you for watching and hope to see you next time!  
                         
                    </p>
                    <a href="https://www.streamlabs.com/Paladyn_Zyro">Donate Now</a>
                </Card>
                <Card>
                    <img src={youtube} alt=""/>
                    <p>
                        I try my best to make sure that all of my recording make their way to youtube. 
                        A lot of them don't, but you can still find a good majority there. Go check it out and make sure to subscribe!
                        My videos will be here as well if you just like this site too much to leave.  
                        
                    </p>
                    <a href="https://www.youtube.com/channel/UCfB5dhx4MdnaJvEpz0UMQaQ/featured?view_as=subscriber">Go to Youtube</a>
                </Card>
                <Card>
                    <img src={insta} alt=""/>
                    <p>
                        Every now and then I will post screenshots from the games I play, memes that I may think are funny, and the like!
                        I will also be posting some of my own artwork as well. Typically, it will be fan art of some of my favorite games, movies, and shows. 
                        Anyways, go check it out for yourself!  
                        
                    </p>
                    <a href="https://www.instagram.com/paladynzyro/">Go to Instagram</a>
                </Card>
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
    border: none;
`;
const InfoCont = styled.div`
    display: flex;
    width: 80%;
    justify-content: space-around;
    margin-bottom: 200px;
    margin: 0 auto 200px auto;
`;
const Card = styled.div`
    width: 20%;
    box-shadow: 5px 5px 5px lightgrey;
    height: 400px;
    p{
        text-align: left;
        width: 70%;
        line-height: 1.5;
    }
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;

`;
export default Home;