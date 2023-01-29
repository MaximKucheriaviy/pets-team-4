import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Header = styled.header`

  display: flex;
  align-items: center;
  justify-content: space-between;
 padding: 0 15px;
  
`;

export const Link = styled(NavLink)`
   font-family:Manrope;
 
  text-decoration: none;
  color: #111111;
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 27px;
  &:hover,
   &:focus {
     color:#F59256;
      
  }

  &.active {
   color:#F59256;
 
  }
     @media screen and (min-width:768px) and (max-width:1279px) {
font-size: 48px;
line-height: 66px;
letter-spacing: 0.04em;
color:#181C27;


 }
  @media screen and  (max-width:767px) {
font-size: 32px;
line-height: 44px;
color:#181C27;




 }
`;