import React from 'react';
import { Helmet } from 'react-helmet';
import {Title,TitleContainer, Content, ContentImg }  from './HomePage.styled';
// import Image from './images/portrait-mobile.png';



export default function HomePage() {
  return (
      <div>
     <Helmet>
        <title>HomePage</title>
      </Helmet>
      <TitleContainer>
        <Title>Take good care of your small pets</Title>
        <Content/>
        <ContentImg />
          {/* <img src={Image} alt="Happy lady with puppy" /> */}
        {/* </Content> */}
      </TitleContainer>
      </div>
  )
}