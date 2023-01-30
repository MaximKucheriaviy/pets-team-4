import styled from "styled-components";


export const Btn = styled.button`

display: inline-flex;
    margin: 0;
    padding: 0;
    border: none;
    background-color: transparent;
    
  
`;

export const Box = styled.div`

display: contents;

  
`;

export const LogoBox = styled.div`


   @media screen and (min-width:768px) {
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
`;

export const LogoBtn = styled.div`

 display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
`;
export const Boxs = styled.div`


`;

export const Boxi = styled.div`



 transform:${props =>  props.isOpen ? "translateX(0%)" : 'translateX(100%)' } ;


 display: contents;
 display: flex;
    justify-content: flex-end;
    align-items: center;
    flex-direction: column-reverse;
    position: fixed;
    top: 64px;
    right: 0;
    left: 0;
    bottom: 0;

    background-color: tomato;
    z-index: 99;
   
    transition: 0.3s all ease-in-out;

    @media screen and (min-width:768px {
        margin-top: 40px;
    }
  
 


 


  
`;








