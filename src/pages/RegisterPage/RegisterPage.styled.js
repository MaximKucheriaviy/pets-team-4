import styled from "styled-components";

import BGdesk from "../RegisterPage/image/bg.png";
import BGtab from "../RegisterPage/image/bg_tab.png";
import BGmob from "../RegisterPage/image/bg_mob.png";

export const Box = styled.div`
  height: calc(100vh - 74px);

  @media screen and (min-width: 768px) {
    height: calc(100vh - 88px);
  }

  @media screen and (min-width: 769px) and (max-width: 1280px) {
    background-image: url(${BGtab});
  }

  @media screen and (max-width: 768px) {
    background-image: url(${BGmob});
  }

  width: 100%;
  position: absolute;
  overflow: hidden;

  background-color: ${({ theme }) => theme.colors.background};
  background-image: url(${BGdesk});
  background-size: contain;
  background-repeat: no-repeat;
  background-position: bottom;
`;
