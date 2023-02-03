import styled from '@emotion/styled';

export const PetsHederStyled = styled.div`
display: flex;
    justify-content: space-between;
    padding-left: 20px;
    padding-right: 20px;

@media screen and (min-width:768px) {
padding-left: 0px;
    padding-right: 32px;}

// @media screen and (min-width:1280px) {
//     max-width: 821px;
// }

.pets-add-hed{

font-family: 'Manrope';
font-style: normal;
font-weight: 500;
font-size: 20px;
line-height: 1.35;

color: #000000;

@media screen and (min-width:768px) {
padding-left: 32px;
}
@media screen and (min-width:1280px) {
    
padding-left: 0;

    }




}

.pets-add{
    display: flex;
    align-items: center;

}

.pets-addbtn{
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

.pets-add-icon{
        // fill: #FFFFFF;
    width: 24px;
    height: 24px;
}

`




export const PetsItemStyled = styled.li`
    margin-top: 20px;
        padding-left: 20px;
    padding-right: 20px;


@media screen and (min-width:768px) {
    margin: 24px 32px 20px 32px;  
    // max-width: 704px;
    padding-left: 0px;
    padding-right: 0px;
    

}

@media screen and (min-width:1280px) {
    // max-width: 821px;
    margin: 24px 16px 20px 0;
}

`