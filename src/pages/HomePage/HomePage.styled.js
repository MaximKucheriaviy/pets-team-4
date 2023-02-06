import styled, { keyframes } from 'styled-components';
import BGmob from './images/Bg-mobile.svg';
import BGtab from './images/Bg-tablet.svg';
import BGdesk from './images/baba-s-psom-fon.png';
import Ball from './images/Ball.svg';
import Heart from './images/Heart.svg';
import Image from './images/portrait-mobile.png';
import ImageTab from './images/portrait-tablet.png';


const ballMove = keyframes`
  0% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(20px);
  }
`;

const heartBeat = keyframes`
  0% {
    transform: scale(1);
  }
  50% {
    transform: scale(1.2);
  }
  100% {
    transform: scale(1);
  }
`;

const backgroundMove = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(20px);
  }
  100% {
    transform: translateY(0);
  }
`;


export const HeroContainer = styled.div`
display: flex;
position: relative;
overflow:hidden;
height: calc(100vh - 88px);

flex-direction: column;
align-items: center;
background-color: ${({ theme }) => theme.colors.background};

@media (min-width: 1280px) {
   width: 1280px;
   margin: 0 auto;
   display:flex;
   align-items: flex-start;
   justify-content: center;
}
`

export const Title = styled.h3`
font-family: Manrope;
color: ${({ theme }) => theme.colors.black};

@media (min-width: 1280px){
  position: absolute;
  top: 92px;
  left: 16px;
  margin-bottom: 0;
  height: 200px;
  width: 588px;
  font-size: 68px;
  font-weight: 700;
  line-height: 1.47;
  text-align: left;
}

@media (max-width: 1279px){

    margin-right: 32px;
    margin-top: 88px;
    position: absolute;
    margin-top: 160px;
    margin-bottom:0;

    width: 588px;
    height: 200px;    
    font-size: 68px;
    font-weight: 700;
    line-height: 1,47;
    text-align: left;

}

@media (max-width: 768px){
    position: absolute;
    margin-left: auto;
    margin-right: auto;
    margin-top:60px;
    margin-bottom:0;

    width: 280px;
    height: 88px;
    font-weight: 700;
    font-size: 32px;
    line-height: 1.38;
    color: #000000;
}`

export const Content = styled.div`

@media (min-width: 1280px){
::before{
content:'';
position: absolute;
top: 437px;
left:405px;
width:63px;
height:63px;
background-image: url(${Ball}); 
background-size: contain;
background-repeat: no-repeat; 
animation: ${ballMove} 1s ease-in-out infinite alternate;
}
background-image: url(${BGdesk}); 
background-size: contain;
background-repeat: no-repeat;
background-position: bottom;
margin-top:61px;
width: 1280px;
/* height: 700px;  */
height:100%;

::after{
content:'';
position: absolute;
top: 103px;
left:712px;
width:63px;
height:63px;
background-image: url(${Heart}); 
background-size: contain;
background-repeat: no-repeat; 
animation:  ${heartBeat} 1s ease-in-out infinite alternate;
}
            


}
@media (max-width: 1279px){
display: flex;
margin-top: 88px;
justify-content: center;
background-image: url(${BGtab});
background-size: cover;
background-repeat: no-repeat;
width: 100%;
height: 1098px; 
animation: ${backgroundMove} 5s ease-in-out infinite;

}

@media (max-width: 768px){
display: flex;
/* margin-top: 87px; */
/* bottom: 0; */
justify-content: center;
background-image: url(${BGmob});
background-size: cover;
background-repeat: no-repeat;
width: 100%;
/* height: 450px;  */
animation: ${backgroundMove} 5s ease-in-out infinite;
}`;


export const ContentImg = styled.div`
    position: absolute;

    @media (max-width: 1279px){
    bottom: 0;
    background-image: url(${ImageTab});
    height: 715px;
    width: 645px;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 3;
    }
    @media (max-width: 768px){
    position: absolute;
    bottom: 0;
    background-image: url(${Image});
    width: 320px; 
    height:337px;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 3;
    }
    `




