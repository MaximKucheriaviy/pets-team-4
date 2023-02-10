import styled from "styled-components";
export const PetsHederStyled = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    // padding-left: 20px;
    // padding-right: 20px;

    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 20px;
    line-height: 1.35;


    color: ${({ theme }) => theme.colors.black};

    @media screen and (min-width:768px) {
        // padding-left: 0px;
        // padding-right: 0px;
        font-size: 28px;

    }

    @media screen and (min-width:1280px) {
        padding-right: 16px;;
    }

    .pets-add-hedMy {

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 1.35;

        color: ${({ theme }) => theme.colors.black};

        @media screen and (min-width:768px) {
            // padding-left: 32px;
            font-size: 28px;

        }
        @media screen and (min-width:1280px) {
    
            padding-left: 0;

        }

    }

        .pets-add-hed {

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 20px;
        line-height: 1.35;

        color: ${({ theme }) => theme.colors.black};

        @media screen and (min-width:768px) {
            padding-left: 0px;
            font-size: 20px;

        }
        @media screen and (min-width:1280px) {
    
            padding-left: 0;

        }

    }



    .pets-add {
        display: flex;
        align-items: center;
        line-height: 1.35;

    }

    .pets-addbtn {
        border: none;
        background-color: transparent;
        margin-left: 15px;
        padding: 0;
        border: none;
        border-radius: 50%;
        background-color: #F59256;
        width: 40px;
        height: 40px;

        @media screen and (min-width:768px) {
            width: 40px;
            height: 40px;
        }

    }


`




