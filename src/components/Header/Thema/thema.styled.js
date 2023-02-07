import styled from "styled-components";


export const Btn = styled.button`

padding: 0;
  border: 0;
  font: inherit;
  fill: ${({ theme }) => theme.colors.black};
  background-color: transparent;
 

  cursor: pointer;
  margin-right: 20px;
  &:hover{
      fill: orange;
   }
      
  /* &.active {
  fill: ${({propsColor}) => propsColor && "orange"};
  background-color:  ${({propsColor}) => propsColor &&  "tomato"};
  } */

 
 
`;
export const BtnT = styled.button`

padding: 0;
  border: 0;
  font: inherit;
  fill:  ${({ theme }) => theme.colors.black};
  background-color: transparent;
 

  cursor: pointer;
  margin-right: 0;
  &:hover {
      fill: orange;
   }
      
  /* &.active {
  fill: orange;
 
  } */
 
`;
export const Box = styled.div`
background-color: ${({ theme }) => theme.colors.white};
padding: 8.5px 15px;
  border: 2px #F59256 solid;
  border-radius: 40px;
 
`;