import styled from 'styled-components';


export const SponsorContainer = styled.div`
display: flex;
flex-direction: column;
margin: 0 auto;
`

export const SponsorCard = styled.li`
/* @media (max-width: 1279px){
width: 336px;
height: 246px;
background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 40px;
:hover{
        box-shadow: 14px 8px 28px rgb(216, 216, 216);
    }
} */

@media (max-width: 768px){
    width: 280px;
    height: 192px;
    background-color: #FFFFFF;
    border-radius: 20px;
    border: none;
    margin-bottom: 12px;
    

    :hover{
        box-shadow: 0px 0px 15px rgb(216, 216, 216);
    }
}
`
export const SponsorHeader = styled.h3`
padding: 12px;
font-family: Manrope;
font-weight: 700;
font-size: 12px;
color:#F59256;

text-decoration: underline solid #F59256;
text-align: center;
`
export const SponsorLogoBox = styled.div`
width: 48%;
padding: 5px;
`
export const SponsorLogo = styled.img`
width: 100%;
height: auto;
`


export const SponsorInfo = styled.div`
display: flex;
flex-direction: row;

`
export const SponsorContacts = styled.div`
width: 52%;
justify-content: end;
text-align: left;
max-height: 144px;
overflow-x: auto;
overflow-y: auto;

::-webkit-scrollbar {
  width: 3px;
  background-color: #F1F1F1;
}

::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #F59256;
}

`
export const SponsorText = styled.p`
  font-family: Manrope;
  font-size: 12px;
  font-weight: 500;
  line-height: 1.33;
  margin-bottom: 4px;
  :last-child {
    margin-bottom: 0px;
  }
  :hover {
    color:#F59256;
    background: #FFFFFF;
 }

  &:hover .schedule {
    display: block;
  }
`;

export const ScheduleStyle = styled.div`
position: absolute;
width: 120px;
height: 160px;
padding: 12px;

background: #FFFFFF;
border: 1px solid #F59256;
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
border-radius: 8px;
z-index:5;`


