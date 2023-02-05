import styled from "styled-components";

import BGdesk from "../RegisterPage/image/bg.png";

export const Box = styled.div`
  height: calc(100vh - 74px);

  @media screen and (min-width: 768px) {
    height: calc(100vh - 88px);
  }
  width: 100%;
  position: absolute;
  overflow: hidden;

  background-color: #fdf7f2;
  background-image: url(${BGdesk});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
`;
