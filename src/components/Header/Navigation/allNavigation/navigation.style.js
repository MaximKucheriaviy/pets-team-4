import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`
background-color: ${({ theme }) => theme.colors.background};
  display: flex;
  align-items: center;
  justify-content: space-between;
 padding: 0 15px;
  
`;

export const Link = styled(NavLink)`
   font-family:Manrope;
 
  text-decoration: none;
 color: ${({ theme }) => theme.colors.black};
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 27px;
  &:hover,
   &:focus {
    color: ${({ theme }) => theme.colors.accent}
     
      
  }

  &.active {
  color: ${({ theme }) => theme.colors.accent}
 
  }
     @media screen and (min-width:768px) and (max-width:1279px) {
font-size: 48px;
line-height: 66px;
letter-spacing: 0.04em;
color: ${({ theme }) => theme.colors.adaptive}


 }
  @media screen and  (max-width:767px) {
font-size: 32px;
line-height: 44px;
color: ${({ theme }) => theme.colors.adaptive}




 }
`;