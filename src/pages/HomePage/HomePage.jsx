import React from "react";
import { Helmet } from "react-helmet";
import { Title, HeroContainer, Content, ContentImg } from "./HomePage.styled";
import { Containers } from "./HomePage.styled";
import { useTranslation } from 'react-i18next';
export default function HomePage() {
  const { t} = useTranslation();
  return (
    < Containers>
      <Helmet>
        <title>HomePage</title>
      </Helmet>

      <div>
        <HeroContainer>
          <Title> {t("homepage")}</Title>
          <Content />
          <ContentImg />
        </HeroContainer>
      </div>
    </ Containers>
  );
}
