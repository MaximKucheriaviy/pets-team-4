import styled from "styled-components";

export const Btn = styled.button`

   
padding: 0;
  border: 0;
  font: inherit;
color:orange;
  background-color: transparent;
 

  cursor: pointer;
  margin-right: 15px;
   &:last-child {
   margin-right:0;
  }
  &:hover{
     color:orange;
   }
   
`;
export const Box = styled.div`
background-color: ${({ theme }) => theme.colors.white};
padding: 8.5px 15px;
  border: 2px #F59256 solid;
  border-radius: 40px;
 
`;