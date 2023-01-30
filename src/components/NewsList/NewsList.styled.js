import styled from "styled-components";

export const CardList = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;

  @media (min-width: 768px) and (max-width: 959px) {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(368px, 1fr));
    row-gap: 60px;
    column-gap: 32px;
  }

  @media (min-width: 960px) and (max-width: 1279px) {
    display: grid;
    row-gap: 60px;
    column-gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(406px, 1fr));
  }

  @media (min-width: 1280px) {
    display: grid;
    row-gap: 60px;
    column-gap: 32px;
    grid-template-columns: repeat(auto-fill, minmax(405px, 1fr));
  }
`;
