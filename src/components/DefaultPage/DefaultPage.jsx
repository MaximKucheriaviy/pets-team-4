import { MainContainer } from "../../SharedLayout/SharedLayout.styled";
import { DefaultPageStyled } from "./DefaultPageStyled";
import { Helmet } from "react-helmet";

export const DefaultPage = ({ children, title }) => {
  return (
    <DefaultPageStyled>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <MainContainer>
        <h2>{title}</h2>
        {children}
      </MainContainer>
    </DefaultPageStyled>
  );
};
