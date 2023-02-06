import React from "react";
import { Helmet } from "react-helmet";
import { Title, HeroContainer, Content, ContentImg } from "./HomePage.styled";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";

export default function HomePage() {
  return (
    <DefaultPage >
      <Helmet>
        <title>HomePage</title>
      </Helmet>

      <div>
        <HeroContainer>
          <Title>Take good care of your small pets</Title>
          <Content />
          <ContentImg />
        </HeroContainer>
      </div>
    </DefaultPage >
  );
}
