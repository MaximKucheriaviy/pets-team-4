import styled from "styled-components";


export const Li = styled.li`

    list-style-type: none;
    margin-right:80px;
   &:last-child {
   margin-right:250px;
  }
   @media screen and (min-width:768px) and (max-width:1279px) {

margin-top:60px;
 margin-right:0;
&:last-child {
   margin-right:0;
  }

 }
  @media screen and  (max-width:767px) {
margin-top:40px;
 margin-right:0;
&:last-child {
   margin-right:0;
  }

 }
`;
export const Ul = styled.ul`

    display: flex;
   @media screen and (max-width:1279px) {
display: block;
       text-align: center;

 }
`;