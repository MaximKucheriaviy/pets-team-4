import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const AccountLink = styled(NavLink)`

  font-family:Manrope;
 
  text-decoration: none;
  color: ${({ theme }) => theme.colors.white};
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.04em;
  line-height: 27px;
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
export const Con = styled.div`
display: flex;
align-items:center;

   padding:10px 30px;
   background:  #F59256;
 border-radius: 40px;
`;
export const Account = styled.span`
font-family: Manrope;
letter-spacing: 0.04em;

color: ${({ theme }) => theme.colors.white};

font-weight: 500;
font-size: 16px;
line-height: 22px;
margin-left:14px;
`;