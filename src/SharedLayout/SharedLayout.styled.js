import styled from "styled-components";

export const MainContainer = styled.div`
    padding: 16px 20px 30px 20px; 
    background-color: ${({ theme }) => theme.colors.background};
    @media screen and (min-width: 768px) {
        padding: 24px 32px 30px 32px;
    }

    @media screen and (min-width: 1280px) {
        padding: 20px 16px 40px 16px;
    }
`;

export const MainTitle = styled.h2`
    padding: 42px 20px 0px 20px;

    @media screen and (min-width: 768px) {
    padding: 88px 0 0px 0;
    }
    
    @media screen and (min-width: 1280px) {
    padding: 70px 0 0px 0;
    }
`;