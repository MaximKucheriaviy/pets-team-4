import styled from "styled-components";

export const CardList = styled.ul`
  margin-top: 40px;

  @media (min-width: 768px) and (max-width: 959px) {
    display: grid;
    margin-top: 60px;
    grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
    row-gap: 60px;
    column-gap: 32px;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    display: grid;
    margin-top: 60px;
    row-gap: 60px;
    column-gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(384px, 1fr));
  }

  @media (min-width: 1280px) {
    display: grid;
    margin-top: 60px;
    row-gap: 60px;
    column-gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(394px, 1fr));
  }
`;
