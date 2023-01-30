import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Link = styled(NavLink)`
  font-family:Manrope;
 letter-spacing: 0.04em;
  text-decoration: none;
margin-right:20px;
  font-size: 20px;
  line-height: 27px;
  font-weight: 500;
  padding:10px 28px;
  color: ${({ theme }) => theme.colors.black};
  background: ${({ theme }) => theme.colors.white};
border: 2px solid ${({ theme }) => theme.colors.accent};
border-radius: 40px;
     &:last-child {
   margin-right:0;
  }
  &:hover,
  &:focus {
   color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.accent};
  } 
  
  &.active {
   color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.accent};
  }
   @media screen and (max-width:767px) {
    margin-right:12px;
     padding:8px 28px;
     font-size: 14px;
line-height: 19px;
display: flex;
align-items: center;
letter-spacing: 0.04em;
margin-top:34px;
margin-bottom:20px;
 }
  @media screen and (min-width:768px) and (max-width:1279px) {
    margin-right:12px;
     padding:8.50px 28px;
 }
`;

export const Li = styled.li`

    list-style-type: none;
    


`;
export const Ul = styled.ul`
padding:0;
    display: flex;
  
`;