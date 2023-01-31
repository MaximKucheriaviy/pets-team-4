import React from 'react';
import PropTypes from "prop-types";
import { Item, Image, Wrapper, Title, ImgWrapper, NoticeCategory, Favorite, Info, InfoWrapper, ButtonDelete, TwoButtonWrapper, TitleInfoWrapper, RelevantInfoWrapper, ContainerInfo, OneButtonWrapper, ButtonLearn } from './NoticeCategoryItem.styled';
// import { Link, useLocation } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

// const yourPet = false;
const yourPet = true;



export default function NoticeCategoryItem({ id, img = "http://dummyimage.com/400x400/99cccc.gif&text=Not+image!", bread = "bread", place = "place",
  age = "1", categorie ="sale", title= "Сute dog looking for a home" }) {
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
                 color: "#F59256" 
               }}
              >
                <FavoriteBorderOutlinedIcon fill="currentColor" sx={{ fontSize: 28 }} />
                {/* <GrFavorite/> */}
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
             {categorie === "sale" ? <Info>Price:</Info> : null } 
        </TitleInfoWrapper>
        <RelevantInfoWrapper>
          <Info> {bread}</Info>     
          <Info> {place}</Info>     
              <Info> {age}</Info> 
             {categorie === "sale" ? <Info>50$</Info> : null } 
            </RelevantInfoWrapper>
            </ContainerInfo>
        </InfoWrapper>  
        
        {yourPet & categorie !== "sale" ? <TwoButtonWrapper>
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
        </TwoButtonWrapper> : 
          <OneButtonWrapper>
             <ButtonLearn>
              Learn more
            </ButtonLearn>
          </OneButtonWrapper>}
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
