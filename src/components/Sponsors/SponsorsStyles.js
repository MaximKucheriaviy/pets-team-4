import styled from 'styled-components';


export const SponsorContainer = styled.div`
display: flex;
margin: 0 auto;
@media (min-width: 1280px){
width: 1281px;}

@media (min-width: 769px) and (max-width: 1279px){
  width: 769px;
  padding: 0;
}
@media (min-width: 320px) and (max-width: 768px){
flex-direction: column;
align-items: center;
}

`
export const SponsorList = styled.ul`
@media (min-width: 1280px){
  width:1246px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
@media (min-width: 768px) and (max-width: 1279px){
  width: 704px;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
`

export const SponsorCard = styled.li`
@media (min-width: 1280px){
margin-bottom: 32px;
width: 397px;
height: 287px;
background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 40px;
:hover{
        box-shadow: 14px 8px 28px rgb(216, 216, 216);
    }
}
@media (max-width: 1279px){
margin-bottom: 32px;
width: 336px;
height: 246px;
background: #FFFFFF;
box-shadow: 7px 4px 14px rgba(49, 21, 4, 0.07);
border-radius: 40px;
:hover{
        box-shadow: 14px 8px 28px rgb(216, 216, 216);
    }
}

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
font-family: 'Manrope';
font-weight: 700;
color: #F59256;

@media (min-width: 1280px){
padding: 16px;
font-size: 20px;
line-height: 1.35;
align-items: center;
text-align: center;
text-decoration-line: underline;
}

@media (max-width: 1279px){
padding: 16px;
font-size: 16px;
line-height: 1.37;
align-items: center;
text-align: center;
text-decoration-line: underline;}

@media (max-width: 768px) {
padding: 12px;
font-size: 12px;
text-decoration: underline solid #F59256;
text-align: center;
}`

export const SponsorLogoBox = styled.div`
@media (min-width: 1280px){
  width: 45%;
  padding: 4px;
}
@media (max-width: 1279px){
  width: 40%;
  padding: 4px;
}
@media (max-width: 768px){
width: 45%;
padding: 5px;
}`

export const SponsorLogo = styled.img`
width: 100%;
height: auto;
`


export const SponsorInfo = styled.div`
display: flex;
flex-direction: row;
`
export const SponsorContacts = styled.div`
overflow-x: auto;
overflow-y: auto;
scrollbar-color: #F59256 #F1F1F1;
scrollbar-width: thin; 
::-webkit-scrollbar {
  width: 3px;
  background-color: #F1F1F1;
}
::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-color: #F59256;
}
@media (min-width: 1280px){
width: 55%;
justify-content: end;
text-align: left;
max-height: 188px;
}
@media (max-width: 1279px){
width: 60%;
justify-content: end;
text-align: left;
max-height: 184px;
}
@media (max-width: 768px){
width: 55%;
justify-content: end;
text-align: left;
max-height: 144px;
}`

export const SponsorText = styled.p`
font-family: 'Manrope';
font-weight: 500;

@media (min-width: 1280px){
font-size: 16px;
margin-bottom: 12px;   
}

@media (max-width: 1279px){
font-size: 14px;
margin-bottom: 8px; 
}
@media (max-width: 768px){
  font-size: 12px;
  margin-bottom: 4px;
}

:last-child {
    margin-bottom: 0px;
  }
  :hover {
    color:#F59256;
    background: #FFFFFF;
 }

  &:hover .schedule {
    display: block;
  }`;

export const ScheduleStyle = styled.div`
position: absolute;
height: auto;
font-size: 12px;
width: 120px;
padding: 12px;
color: #000000;
background: #FFFFFF;
border: 1px solid #F59256;
box-shadow: 4px 4px 8px rgba(0, 0, 0, 0.25);
border-radius: 8px;
z-index:5;
`


