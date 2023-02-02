import styled from "styled-components";

export const StyledAddNotice = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between; 

    width: 129px;
    height: 44px;   
`;

export const Title = styled.p`
  font-size: 20px;
line-height: 27px;

color: #111111;
`;

export const IconButtonWrapper = styled.div`
    background-color: #F59256;
    opacity: 0.6;
    backdrop-filter: blur(2px);
    border-radius: 45px;

      &:hover {
     background-color: #ff6101;
     opacity: 1;
    }
`;