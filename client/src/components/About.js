import React from 'react';
import styled from 'styled-components';

const About = () => {
    return(
        <Container >
            <h1>About Me</h1>
            <Content>
                Many of you might not know, but I am Paladyn Zyro. You can also call me Austin.
                 I reside in Fayetteville, AR. I have a love for tech and more importantly, video games. 
                 I have an addiction to solving problems and doing things that I am unfamiliar with. I recently 
                 finished school and am now a software engineer. If you would like to check out some of my recent 
                 projects you can go to <a href="https://github.com/Austinlp4">Github</a>. I will in the future be doing some coding
                  streams for anyone who may be interested in learning the basics of the trade
            </Content>
            <Content>
            As far as video games go, I started playing games on a Sega Genesis when I was really little.
             Me and my brother would stay up for countless hours playing Mortal Kombat and Sonic The Hedgehog. 
             It never got old, the competitive nature of trying to beat my brother or just simply seeing how quickly 
             we could run through Sonics’ storyline. We soon received our Gameboy Color. From that point forward,
              life was nothing but video games. I now had the ability to play games at home and away. Pokemon 
              Yellow Version was exhilarating. As a huge pokemon fan growing up with over 10,500 cards at the age
               of 9, the game brought the pokemon world to life and I was absorbed in it. After a while I got the 
               Playstation and an xbox. Which at the time, after playing just Sega and Gameboy, had the most amazing 
               graphics I had ever seen. Halo was the first competitive shooter I had ever played with friends. We 
               were pretty good (Everyone says this, I am very aware).
            </Content>
            <Content>
            Now that you know a bit more about me, I would love to see you all in chat. 
            I want to get to know more about others who are also lovers of games, whether
             it be PC, xbox, Playstation, or Nintendo. Come show your love and hang out.
              See you there!
 
            </Content>
        </Container>
    )
}

const Container = styled.div`
    padding-top: 70px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const Content = styled.p`
    width: 40%;
    line-height: 2.5;
    @media(max-width: 1164px){
        width: 80%;
    }
`;

export default About;