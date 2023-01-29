import React from 'react';
import { Helmet } from 'react-helmet';
import { Title,HeroContainer, Content, ContentImg }  from './HomePage.styled';



export default function HomePage() {
  return (
      <div>
     <Helmet>
        <title>HomePage</title>
      </Helmet>
      
      <HeroContainer>
        <Title>Take good care of your small pets</Title>
        <Content/>
        <ContentImg />
      </HeroContainer>
      </div>
  )
}