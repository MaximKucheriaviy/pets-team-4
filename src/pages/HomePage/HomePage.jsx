import React from "react";
import { Helmet } from "react-helmet";
import { Title, HeroContainer, Content, ContentImg, SomeDiv } from "./HomePage.styled";

export default function HomePage() {
  return (
    <>
      <Helmet>
        <title>HomePage</title>
      </Helmet>

      <SomeDiv >
        <HeroContainer>
          <Title>Take good care of your small pets</Title>
          <Content />
          <ContentImg />
        </HeroContainer>
      </SomeDiv>
    </>
  );
}
