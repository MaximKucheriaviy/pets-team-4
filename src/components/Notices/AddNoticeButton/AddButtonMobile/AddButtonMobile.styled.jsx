import styled from "styled-components";

export const Wrapper = styled.div`
  position: absolute;
  z-index: 10;
`;

export const StyledAddNotice = styled.div`
    position: fixed;
    right: 20px;
    top: 455px;

    opacity: 0.6;

    width: 80px;
    height: 80px;

    backdrop-filter: blur(2px);
    border-radius: 45px;
    color: #FFFFFF;

    &:hover {
     background-color: #ff6101;
     opacity: 1;
    }
`;