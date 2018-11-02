import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import './App.css';
import styled from 'styled-components';
import cover from './Assets/cover.jpg';
import bud1 from './Assets/bud1.jpg';
import bud2 from './Assets/bud2.jpg';
import bud3 from './Assets/bud3.jpg';
import Flip from 'react-reveal/Flip';

import Deals from './Deals';
//<i class="fab fa-instagram"></i>
//TODOS:
//media queries for mobile
//add media query resizing for logo
//add social media icons to footer
//add address info to footer
//embed google maps on footer
//complete 'About' page
//complete 'Menu' page
//complete 'Contact' page

const NavWrapper = styled.div`
display:flex;
justify-content:space-evenly;
flex-direction: row;
align-content:center;
flex-wrap:wrap;
@media (max-width: 700px) {
flex-direction:column
}
`;
//adding that column direction saves us time
const LogoWrapper = styled.div`
height:20em;
width:20em;
position:absolute;
top:5em;
left:25em;

@media(max-width:1000px){
  left:15em;
  top:8em;
}

`;

const Logo = styled.img`
z-index: -1;

@media (max-width: 800px) {
  height:25em;
  width:25em;
  left:30em;
}
@media (max-width: 1000px) {
  height:25em;
  width:25em;
}
`;


const NavLinks = styled.div`
display:flex;
justify-content:space-evenly;
align-items:baseline;
flex-direction: row;
position:absolute;
width:100%;
height:10em;
top:2em;
flex-wrap:wrap;
background-color:#b7dbff;
`;

const StyledAbout = styled.a`
font-family: 'Roboto', sans-serif;
font-family: 'Slabo 27px', serif;
font-size:40px;
color:black;
align-self:center;
`;

const StyledMenu = styled.a`
font-family: 'Roboto', sans-serif;
font-family: 'Slabo 27px', serif;
font-size:40px;
color:black;
align-self:center;
`;

const StyledContact = styled.a`
font-family: 'Roboto', sans-serif;
font-family: 'Slabo 27px', serif;
font-size:40px;
color:black;
align-self:center;
`;

const StyledGallery = styled.div`
display:flex;
z-index:2;
justify-content:space-evenly;
flex-direction: row;
position:relative;
top:80em;
bottom:10em;
width:100%;
height:100%;
flex-wrap:wrap;
`;

const Bud = styled.img`
width:450px
height: 450px;
box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-webkit-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
-moz-box-shadow: 10px 10px 5px 0px rgba(0,0,0,0.75);
`;



const LineContainer = styled.div`
position:absolute;
top:60em;
align-content:center;
width:100%;
`;
const Line = styled.hr`
border-top: 1px dotted #8c8b8b;
width:50em;
`;

const Motto = styled.h1`
font-family: 'Arimo', sans-serif;
text-align:center;
`

const DailyDeals=styled.div`
z-index:10;
position:relative
top:20em;
width:100%;

}
`;

const Footer= styled.footer`
background-color:#b7dbff;
position: relative
top:150em;
left: 0;
bottom: 0;
width:100%;
height:10em;
display:flex;
align-items:center;
flex-direction:left;

@media (max-width: 700px) {
top:300em;
}
`;

const SocialMedia = styled.ul`
width:20em;
height:10em;
background-color:pink;
list-style:none;
font-family: 'Montserrat', sans-serif;

`;

const Instagram = styled.i`

position:absolute;
top:1em;

`;

const Location = styled.h3`
position:absolute;
left:70em;
font-family: 'Montserrat', sans-serif;
color:gray;
`;
class App extends Component {
  render() {
    return (
      <div className='App'>

    <NavWrapper>
      <LogoWrapper>
        <Logo src={cover}></Logo>
      </LogoWrapper>
      <NavLinks>
        <StyledAbout href="/">About</StyledAbout>
        <StyledMenu href="/menu">Menu</StyledMenu>
        <StyledContact href="/contact">Contact</StyledContact>
    </NavLinks>
    <LineContainer>

    <Fade left>
      <Motto>Nothing For Sale..</Motto>
    </Fade>
      <Line/>
    </LineContainer>
    <StyledGallery>
      <Flip left>
        <Bud src={bud1}/>
        <Bud src={bud2}/>
        <Bud src={bud3}/>
      </Flip>
      <DailyDeals>
      <Deals/>
      </DailyDeals>

    </StyledGallery>
    
    <Footer>
      <SocialMedia>
        <li><a href='https://www.instagram.com/hundredharmonies/'><Instagram className='fab fa-instagram fa-2x'/></a></li>
      </SocialMedia>
      <Location>Church Of Hundred Harmonies: La Puente, CA 91744</Location>
    </Footer>
  </NavWrapper>
      </div>
     
    );
  }
}

export default App;
