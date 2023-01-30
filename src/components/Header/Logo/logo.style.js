import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const LogoLink = styled(NavLink)`

    padding: 20px 0;
 font-family:Poppins;
  text-decoration: none;
  color: ${({ theme }) => theme.colors.black};
  font-size: 32px;
  font-weight: 700;
 letter-spacing: 0.07em;
  line-height: 48px; 
  @media screen and (max-width:767px) {
     padding: 16px 0px ;
     font-size: 28px;
line-height: 42px;
 }

 
`;
export const Span = styled.span`

   
  color: ${({ theme }) => theme.colors.accent};
  
 }

 
`;