import styled from "styled-components";

export const NavBar = styled.div`
display: flex;
flex-direction: row;
align-items: flex-start;
flex-wrap: wrap;
gap: 12px;
margin-top: 28px;
margin-bottom: 20px;

     @media (min-width: 768px) {
       max-width: 474px;
       margin: 40px 0 60px 0;
    };

    @media (min-width: 1280px) {
    max-width: 100%;
    };
`;

export const Button = styled.button`
    display: flex;
    justify-content: center;
    align-items: center;
            
    border: 2px solid rgb(245, 146, 86);
    border-radius: 40px;
`;

export const ButtonCategory = styled(Button)`
    padding: 8px 28px;
    color:#111111;
    background-color: #FFFFFF;
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.04em;

        @media (min-width: 768px) {
          padding: 10px 28px;
          font-size: 20px;
          line-height: 27px;
    };

            /* @media (min-width: 1280px) {
          max-width: 288px;
    }; */

    &.active {
    color: #FFFFFF;
    background: #F59256;
  }
    &:hover {
    color: #787575;
    background: #F59256;
  }
`;