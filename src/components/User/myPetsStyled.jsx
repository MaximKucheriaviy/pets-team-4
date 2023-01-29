import styled from '@emotion/styled';


export const PetsContainerStyled = styled.div`
 display: flex;
    align-items: flex-start;

    background-color: #FFFFFF;
    box-shadow: 7px 4px 14px rgb(0 0 0 / 11%);
    border-radius: 20px;
    margin: 20px;

    @media screen and (max-width:767px) {
        border-radius: 40px;
        margin: 24px 32px 20px 32px;
    }
    @media screen and (min-width:768px) and (max-width:1279px) {
        margin: 24px 16px 22px 0px;
    }


.card-btn{
    background-color: #FDF7F2;
    backdrop-filter: blur(2px);
    border: none;
    border-radius: 50%;
    width: 44px;
    height: 44px;
}

.card-icons{
    @media screen and (max-width:767px) {
        width: 20px;
        height: 22px;
    }

}


`

export const PetsItemStyled = styled.div`
    display: flex;
    flex-direction: column;
margin: 16px 20px 40px 20px;

    @media screen and (max-width:767px) {
        display: flex;
    justify-content: space-between;
        margin: 20px;
    }
    @media screen and (min-width:768px) and (max-width:1279px) {
        margin: 20px 28px 20px 20px;
    }


.card-avatar{
    min-width: 240px;
    min-height: 240px;
    border-radius: 20px;
    margin-bottom: 20px;

  background-color: rgb(114, 208, 252);

    @media screen and (max-width:767px) {
        min-width: 161px;
        min-height: 161px;
        border-radius: 40px;
    margin-bottom: 0px;

    margin-right: 32px;
    }
    @media screen and (min-width:768px) and (max-width:1279px) {
        // margin-right:12px;
        // padding:8.50px 28px;
    }

}

.card-info{
    // margin: 20px 25px 40px 20px;


    background-color: bisque;

    @media screen and (max-width:767px) {
        // margin: 20px 20px 20px 0px;
    }
    @media screen and (min-width:768px) and (max-width:1279px) {
        // margin: 20px 28px 20px 0px;
        // padding:8.50px 28px;
    }

}

p {
    margin-bottom: 12px;

    font-family:Manrope;
    font-size: 14px;
    line-height: 19.12px;
    font-weight: 500;
    letter-spacing: 4%;
    color: #000000;

    @media screen and (max-width:767px) {
        font-size: 16px;
        line-height: 21.86px;
    }
    @media screen and (min-width:768px) and (max-width:1279px) {
        // margin: 20px 28px 20px 0px;
        // padding:8.50px 28px;
    }

 

}

b {
        font-weight: 400;

            @media screen and (max-width:767px) {
        // margin: 20px 20px 20px 0px;
    }
    @media screen and (min-width:768px) and (max-width:1279px) {
        // margin: 20px 28px 20px 0px;
        // padding:8.50px 28px;
    }


}


`

// export const PetsInfoStyled = styled.li`
// `

// export const GalleryItemStyled = styled.li`
// `

// export const GalleryItemStyled = styled.li`
// `

// export const GalleryItemStyled = styled.li`
// `


