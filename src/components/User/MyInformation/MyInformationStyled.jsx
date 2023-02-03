import styled from '@emotion/styled';

export const MyInform = styled.div`
display: flex;
    flex-direction: column;

@media screen and (min-width:768px) {
    display: flex;
    flex-direction: row-reverse;


}

@media screen and (min-width:1280px) {
        display: flex;
    flex-direction: column;
}


.user-cont{
    display: flex;
    flex-direction: column;
    align-items: flex-end;
}


.user-avatar{
    // margin: 20px 24px 12px 23px;

    padding-left: 8px;
    padding-right: 8px;
        width: 100%;
        border-radius: 50%;
        box-shadow: 0px 4px 14px rgb(0 0 0 / 11%);
    clip-path: circle(39%);

@media screen and (min-width:768px) {
padding-left: 0;
    padding-right: 0;
    clip-path: circle(33%);
}

}

button{
    //     position: absolute;
    // top: 40%;
    // left: 65%;
    border: none;
    background-color: transparent;
    display: flex;
    align-items: center;

    // width: 80px;
    height: 22px;

    font-family: 'Manrope';
font-style: normal;
font-weight: 400;
font-size: 12px;
line-height: 1.83;


}



.user-avatar-icons{
    margin-right: 5px;
    fill: #F59256;
    width: 20px;
    height: 20px;
}
}

.user-tabl{
    width: 100%;
    margin-top: 36px;
    margin-bottom: 44px;
    font-family: 'Manrope';
    font-style: normal;
    font-weight: 500;
    font-size: 12px;
    line-height: 1.33;

    color: #111111;

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

    .icons-red{
        width: 20px;
        height: 20px;
        fill: #111;
        fill-opacity: .6;
    }

    .icons-done{
        width: 20px;
        height: 20px;
        fill: #F59256;
        fill-rule: evenodd;
        clip-rule: evenodd
    }




`

export const MyInformItem = styled.div`
    @media screen and (min-width:768px) {

    width: 100%;
    }
`
