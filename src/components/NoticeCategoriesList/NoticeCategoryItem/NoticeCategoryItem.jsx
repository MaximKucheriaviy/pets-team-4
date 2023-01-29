import React from 'react';
import PropTypes from "prop-types";
import { Item, Image, Wrapper, Title, ImgWrapper, NoticeCategory, Favorite, Info, InfoWrapper, Button, ButtonDelete, TwoButtonWrapper, TitleInfoWrapper, RelevantInfoWrapper, ContainerInfo } from './NoticeCategoryItem.styled';
// import { Link, useLocation } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderOutlinedIcon from '@mui/icons-material/FavoriteBorderOutlined';

export default function NoticeCategoryItem({ id, img = "http://dummyimage.com/400x400/99cccc.gif&text=Not+image!", bread = "bread", place = "place",
  age = "1", categorie ="In good hands", title= "Сute dog looking for a home" }) {
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
               }}
              >
                <FavoriteBorderOutlinedIcon sx={{ fontSize: 28, borderColor: "#F59256" }} />
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
        </TitleInfoWrapper>
        <RelevantInfoWrapper>
          <Info> {bread}</Info>     
          <Info> {place}</Info>     
            <Info> {age}</Info> 
            </RelevantInfoWrapper>
            </ContainerInfo>
          </InfoWrapper>  
          <TwoButtonWrapper>
          <Button>
            Learn more
          </Button>
          <ButtonDelete startDecorator={<DeleteIcon />}>
              Delete  
            <DeleteIcon fontSize="20px"
              sx={{
    "--Button-gap": "13px"
  }}/>
            </ButtonDelete>
          </TwoButtonWrapper>
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
