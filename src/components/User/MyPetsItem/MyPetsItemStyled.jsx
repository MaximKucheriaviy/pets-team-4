// import styled from '@emotion/styled';

import styled from "styled-components";

// export const PetsItemStyled = styled.li`
//     margin-top: 20px;
//         padding-left: 20px;
//     padding-right: 20px;


// @media screen and (min-width:768px) {
//     margin: 24px 32px 20px 32px;  
//     // max-width: 704px;
//     padding-left: 0px;
//     padding-right: 0px;
    

// }

// @media screen and (min-width:1280px) {
//     // max-width: 821px;
//     margin: 24px 16px 20px 0;
// }

// `

export const PetsItemStyled = styled.li`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-left: 20px;
    padding-right: 20px;
        padding-top: 16px;

    // background-color: ${({ theme }) => theme.colors.background};
    background-color: #FFFFFF;
    box-shadow: 7px 4px 14px ${({ theme }) => theme.colors.black};
    border-radius: 20px;

    margin-top: 20px;
    // padding-left: 20px;
    // padding-right: 20px;

    @media screen and (min-width:768px) {
        display: flex;
        flex-direction: row;
        border-radius: 40px;

        margin: 24px 32px 20px 32px;  
        padding-left: 0px;
        padding-right: 0px;
    }
    @media screen and (min-width:1280px) {
        padding: 20px;
        width: 100%;
        display: flex;
        justify-content: space-between;

        margin: 24px 16px 20px 0;
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
    display: flex;
    flex-direction: column;
    margin: 20px auto 28px auto;
    width: 100%;
}

    @media screen and (min-width:768px) {
        // display: flex;
        // flex-direction: column;
    margin: 20px auto 20px auto;
    }
    @media screen and (min-width:1280px) {
        // margin: 20px 28px 20px 20px;
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