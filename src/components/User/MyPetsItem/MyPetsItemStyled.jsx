// import styled from '@emotion/styled';

import styled from "styled-components";
export const PetsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
        padding-top: 16px;

    background-color: ${({ theme }) => theme.colors.background};
    box-shadow: 7px 4px 14px ${({ theme }) => theme.colors.shadow};
    border-radius: 20px;

    @media screen and (min-width:768px) {
        display: flex;
        flex-direction: row;
        border-radius: 40px;
    }
    @media screen and (min-width:1280px) {
        padding: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;
    }


    .card-avatar{
            width: 100%;
    // width: 240px;
    // height: 240px;
    border-radius: 20px;
    // margin: 16px 20px 20px 20px;        

    @media screen and (min-width:768px) {
        width: 161px;
        height: 161px;
        border-radius: 40px;
    margin: 20px 12px auto 20px;
    }

    }

    .card-info{
    margin: 20px 25px 28px 20px;

    @media screen and (min-width:768px) {
        display: flex;
        flex-direction: column;
        margin: 20px;
    }
    @media screen and (min-width:1280px) {
        margin: 20px 28px 20px 20px;
    }
    }

    .card-name{
    display: flex;
    align-items: center;
    justify-content: space-between;
    }

    .card-btn{
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 1px;

    background-color: #FDF7F2;
    backdrop-filter: blur(2px);
    border: none;
    border-radius: 50%;
    @media screen and (min-width:768px) {
        width: 44px;
        height: 44px;
    }
    }



    p {
    margin-bottom: 12px;

    font-family:Manrope;
    font-style: normal;
    font-weight: 400;
    font-size: 14px;
    line-height: 19.12px;
    letter-spacing: 4%;
    color: ${({ theme }) => theme.colors.black};

    @media screen and (min-width:768px) {
        font-size: 16px;
        line-height: 22px;
    }

    }

    b {
    font-weight: 500;

    }

`