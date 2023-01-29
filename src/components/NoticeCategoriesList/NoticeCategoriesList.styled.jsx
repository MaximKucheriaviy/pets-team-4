import styled from "styled-components";

export const Gallery = styled.ul`
  display: grid;
  max-width: calc(100vw - 40px);
  grid-gap: 32px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
   
        @media (min-width: 768px) {
          grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
          max-width: calc(100vw - 48px);

    };
`;