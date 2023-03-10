import styled from "styled-components";
// import { TfiPlus } from "react-icons/tfi";


export const MyInform = styled.div`
        display: flex;
        flex-direction: column;

        @media screen and (min-width:768px) {
            flex-direction: row-reverse;
        }
    // @media screen and (min-width:768px) {
    //     flex-direction: row-reverse;

    // }

    @media screen and (min-width:1280px) {
        flex-direction: column;
    }


    .user-cont{
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .cont-avatar{
        width: 233px;
        height: 233px;
        margin-bottom: 12px;
        border-radius: 50%;
        box-shadow: 0px 4px 14px rgb(0 0 0 / 11%);
        // background-color: beige;
        // clip-path: circle(33%);
    }


    .user-avatar{
        // margin: 20px 24px 12px 23px;

        padding-left: 8px;
        padding-right: 8px;
            width: 100%;
        width: 233px;
        height: 233px;
        border-radius: 50%;
        box-shadow: 0px 4px 14px rgb(0 0 0 / 11%);

        @media screen and (min-width:768px) {
            padding-left: 0;
            padding-right: 0;
            // clip-path: circle(33%);
        }

    }

    button{
        //     position: absolute;
        // top: 40%;
        // left: 65%;
        border: none;
        background-color: transparent;
        width: 100%;
        display: flex;
        justify-content: flex-end;
        padding-right: 24px;
        

        // width: 80px;
        height: 22px;

        font-family: 'Manrope';
        font-style: normal;
        font-weight: 400;
        font-size: 12px;
        line-height: 1.83;


    }
    .avatar-iconsBtn{
        color:${({ theme }) => theme.colors.gray};
    }



    // .user-avatar-icons{
    //     margin-right: 5px;
    //     fill: #F59256;
    //     width: 20px;
    //     height: 20px;
    // }


    .user-tabl{
        width: 100%;
        margin-top: 32px;
        margin-bottom: 44px;
        font-family: 'Manrope';
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 1.33;

        color: ${({ theme }) => theme.colors.black};

        @media screen and (min-width:768px) {
            font-size: 18px;
            line-height: 1.39;
        }
        @media screen and (min-width:1280px) {
            margin-top: 36px;
            margin-bottom: 27px;
        }
        th{
            font-weight: 400;

        }


    }

    .table-red{
        // font-weight: 400;
    }


`

export const MyInformItem = styled.input`
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 1.33;
    background-color: transparent;
    border: none;
    color:${({ theme }) => theme.colors.gray};

    width: 100%;

    @media screen and (min-width:768px) {
    font-size: 18px;
    line-height: 1.39;

    }
    &:focus {
        background-color: #FDF7F2;
        border: 1px solid rgba(245, 146, 86, 0.5);
        border-radius: 40px;
  }



`

export const UserAvatar = styled.img`
    // margin: 20px 24px 12px 23px;

    padding-left: 8px;
    padding-right: 8px;
        width: 100%;
    width: 233px;
    height: 233px;
    border-radius: 50%;
    box-shadow: 0px 4px 14px rgb(0 0 0 / 11%);

@media screen and (min-width:768px) {
    padding-left: 0;
    padding-right: 0;
    clip-path: circle(33%);
}

`
// export const PlusIcon = styled(TfiPlus)`
// //   position: absolute;
//   width: 48px;
//   height: 48px;
// //   top: 220px;
// //   left: 115px;
//   @media screen and (min-width: 768px) {
//     // top: 220px;
//     // left: 280px;
//   }
// `;
