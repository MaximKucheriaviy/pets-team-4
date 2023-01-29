import styled from "styled-components";

export const DefaultPageStyled = styled.main`
  h2 {
    font-family: "Manrope";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 66px;

    margin-bottom: 40px;
    color: ${({ theme }) => theme.colors.black};
    text-align: center;
    @media screen and (min-width:767px) {
        font-size: 48px;
    }

  }
`;
