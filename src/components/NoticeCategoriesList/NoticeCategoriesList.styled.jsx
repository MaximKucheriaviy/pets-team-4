import styled from "styled-components";

export const Gallery = styled.ul`
  display: grid;
  justify-items: center;
  /* max-width: calc(100vw - 40px); */
  /* max-width: 280px; */

  grid-gap: 32px;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
  list-style: none;
  margin-left: auto;
  margin-right: auto;
   
        @media (min-width: 768px) {
          grid-template-columns: repeat(auto-fill, minmax(336px, 1fr));
          /* max-width: 336px; */

          /* max-width: calc(100vw - 48px); */

    };

            @media (min-width: 1280px) {
          grid-template-columns: repeat(auto-fill, minmax(288px, 1fr));
          /* max-width: 288px; */

          /* max-width: calc(100vw - 48px); */

    };
`;