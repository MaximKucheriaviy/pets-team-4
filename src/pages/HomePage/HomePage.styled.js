import styled from 'styled-components';
import BGmob from './images/Bg-mobile.svg';
import BGtab from './images/Bg-tablet.svg';
import BGtop from './images/BGtop.svg';
import BGbottom from './images/BGbottom.svg';

import Image from './images/portrait-mobile.png';
import ImageTab from './images/portrait-tablet.png';
import ImageDsc from './images/portrait-decktop.png';


export const TitleContainer = styled.div`
display: flex;
position: relative;
overflow:hidden;

flex-direction: column;
align-items: center;


/* @media (max-width: 1279px) {
    flex-direction: column;
    align-items: center;
} */
`

export const Title = styled.h3`
font-family: Manrope;
color: #000000;


@media (min-width: 1280px){
height: 200px;
width: 588px;
font-size: 68px;
font-weight: 700;
line-height: 1.47;
text-align: left;
}

@media (max-width: 1279px){
position: absolute;
margin-top: 160px;

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
    &::before {
    content: "";
    position: absolute; 
    bottom: 0; 
    left: 0; 
    margin-top: 28px;
    width: 100%;
    height: 100%;
    background-image: url(${BGbottom});
    background-size: cover;
    z-index: 2;
  }
  position: absolute; 
  bottom: 0; 
  right: 0; 
/* display: flex; */
margin-top: 95pxpx;
/* justify-content: center; */
background-image: url(${BGtop});
background-size: contain;
background-repeat: no-repeat;
width: 100%;
height: 640px; 
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

}

@media (max-width: 768px){
display: flex;
margin-top: 87px;
justify-content: center;
background-image: url(${BGmob});
background-size: cover;
background-repeat: no-repeat;
width: 100%;
/* height: 395px; /470 */
height: 450px; 
}`;


export const ContentImg = styled.div`
    position: absolute;
    @media (min-width: 1280px){
    bottom: 0;
    background-image: url(${ImageDsc});
    height: 590px;
    width: 640px;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 5;
    }
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
    bottom: 0;
    background-image: url(${Image});
    width: 320px; 
    height:337px;
    background-size: cover;
    background-repeat: no-repeat;
    z-index: 3;
    }
    `
