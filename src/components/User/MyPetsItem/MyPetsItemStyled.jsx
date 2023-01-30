import styled from '@emotion/styled';


export const PetsContainerStyled = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    background-color: #FFFFFF;
    box-shadow: 7px 4px 14px rgb(0 0 0 / 11%);
    border-radius: 20px;
    margin: 20px;

    @media screen and (min-width:768px) {
        display: flex;
        flex-direction: row;
        border-radius: 40px;
        margin: 24px 32px 20px 32px;
    }
    @media screen and (min-width:1280px) {
        margin: 24px 16px 22px 0px;
    }


.card-avatar{
    width: 240px;
    height: 240px;
    border-radius: 20px;
    margin: 16px 20px 20px 20px;        

    @media screen and (min-width:768px) {
        width: 161px;
        height: 161px;
        border-radius: 40px;
        margin: 20px 12px auto 20px;
    }
}

.card-info{
    margin: 0px 25px 28px 20px;
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

.card-icons{
    @media screen and (min-width:768px) {
        width: 19.5px;
        height: 21px;
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
    color: #000000;

    @media screen and (min-width:768px) {
        font-size: 16px;
        line-height: 22px;
    }

}

b {
    font-weight: 500;

}

`