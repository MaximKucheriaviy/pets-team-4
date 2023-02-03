import React from 'react';
import PropTypes from "prop-types";
import { Item, Image, Wrapper, Title, ImgWrapper, NoticeCategory, Favorite, Info, InfoWrapper, ButtonDelete, TwoButtonWrapper, TitleInfoWrapper, RelevantInfoWrapper, ContainerInfo, OneButtonWrapper, ButtonLearn, ButtonWrapper } from './NoticeCategoryItem.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';

const yourPet = false;
// const yourPet = true;



export default function NoticeCategoryItem({ id, img = "http://dummyimage.com/400x400/99cccc.gif&text=Not+image!", bread = "bread", place = "place",
  age = "1", categorie = "sale", title = "Сute dog looking for a home", userId = "", fovorite = "false" }) {
  console.log(fovorite);
  return (
    <Item key={id} >
        <Wrapper>
          <ImgWrapper>
          {img ? <Image src={img} alt={bread} />
              : <Image src={`http://dummyimage.com/300x300/99cccc.gif&text=Not+image! `} />}
          <NoticeCategory>{ categorie}</NoticeCategory>
            <Favorite>
            <IconButton   
               sx={{
                "--IconButton-size": "44px",
                 color: "currentColor" 
               }}
              >
               {!fovorite ?  <FavoriteBorderIcon fill="currentColor" sx={{ fontSize: 28 }} /> :
               <FavoriteIcon fill="currentColor" sx={{ fontSize: 28 }}/>}
            </IconButton>
            </Favorite>
          </ImgWrapper>
          < InfoWrapper>
          <Title>{title}</Title> 
          <ContainerInfo>
          <TitleInfoWrapper>
          <Info>Breed:</Info>     
          <Info>Place:</Info>     
              <Info>Age:</Info>
             {categorie === "sell" ? <Info>Price:</Info> : null } 
        </TitleInfoWrapper>
        <RelevantInfoWrapper>
          <Info> {bread}</Info>     
          <Info> {place}</Info>     
              <Info> {age}</Info> 
             {categorie === "sell" ? <Info>50$</Info> : null } 
            </RelevantInfoWrapper>
            </ContainerInfo>
        </InfoWrapper>  
        
        {yourPet  ? <ButtonWrapper>
          <ButtonLearn>
            Learn more
          </ButtonLearn>
          <ButtonDelete>
              Delete  
            <DeleteIcon fontSize="20px"
              sx={{
                  "--Button-gap": "13px"
                }}/>
            </ButtonDelete>
        </ButtonWrapper> : 
          <ButtonWrapper>
             <ButtonLearn>
              Learn more
            </ButtonLearn>
          </ButtonWrapper>}
      </Wrapper>
      
    </Item>
    )
}

NoticeCategoryItem.propTypes = {
    id: PropTypes.number,
    img: PropTypes.string,
    place: PropTypes.string,
    bread: PropTypes.string,
    age: PropTypes.string,
    categorie: PropTypes.string,
    title: PropTypes.string,
}
