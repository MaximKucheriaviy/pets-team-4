import { NavLink } from "react-router-dom";
import styled from "styled-components";

export const NavBar = styled.ul`
display: flex;
flex-direction: row;
align-items: flex-start;
flex-wrap: wrap;
gap: 12px;

     @media (min-width: 768px) {
       max-width: 474px;
    };

    @media (min-width: 1280px) {
    max-width: 100%;
    };
`;

export const StyledLink = styled(NavLink)`
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    color: inherit;
            
    border: 2px solid ${({ theme }) => theme.colors.accent};
    border-radius: 40px;
`;

export const LinkCategory = styled(StyledLink)`
    padding: 8px 28px;
    color:${({ theme }) => theme.colors.black};
    background-color: ${({ theme }) => theme.colors.white};
    font-size: 14px;
    line-height: 19px;
    letter-spacing: 0.04em;

        @media (min-width: 768px) {
          padding: 10px 28px;
          font-size: 20px;
          line-height: 27px;
    };


    &.active {
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.accent};
  }
    &:hover {
    color: #787575;
    background: ${({ theme }) => theme.colors.accent};
  }
`;
