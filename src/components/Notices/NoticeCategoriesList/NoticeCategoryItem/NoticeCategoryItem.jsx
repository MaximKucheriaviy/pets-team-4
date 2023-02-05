import React from 'react';
// import PropTypes from "prop-types";
import { Item, Image, Wrapper, Title, ImgWrapper, NoticeCategory, Favorite, Info, InfoWrapper, ButtonDelete, TitleInfoWrapper, RelevantInfoWrapper, ContainerInfo, ButtonLearn, ButtonWrapper } from './NoticeCategoryItem.styled';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import { useSelector } from 'react-redux';
import { selectUser } from '../../../../redux/auth/autSelectors';

export default function NoticeCategoryItem({
  age = "01.01.2000",
  breed = "Unknown breed",
  category = "",
  favorite = "false",
  img = "http://dummyimage.com/400x400/99cccc.gif&text=Not+image!",
  owner = "",
  place = "Unknown place",
  title = "Сute pet looking for a home",
  price = null,
  id, 
}) {
  const user = useSelector(selectUser);
  console.log(id);
  console.log(user.id);
  // console.log(yourNotice);
  const yourNotice = Boolean(user.id === owner);
  // console.log(yourNotice);


  return (
    <Item key={id} >
        <Wrapper>
          <ImgWrapper>
            <Image src={img} alt={breed} />
          <NoticeCategory>{ category}</NoticeCategory>
            <Favorite>
            <IconButton   
               sx={{
                "--IconButton-size": "44px",
                 color: "currentColor" 
               }}
              >
               {!favorite ?  <FavoriteBorderIcon fill="currentColor" sx={{ fontSize: 28 }} /> :
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
             {category === "sell" ? <Info>Price:</Info> : null } 
        </TitleInfoWrapper>
        <RelevantInfoWrapper>
          <Info> {breed}</Info>     
          <Info> {place}</Info>     
              <Info> {age}</Info> 
             {category === "sell" ? <Info>{price}$</Info> : null } 
            </RelevantInfoWrapper>
            </ContainerInfo>
        </InfoWrapper>  
        
        {yourNotice  ? <ButtonWrapper>
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

// NoticeCategoryItem.propTypes = {
//     id: PropTypes.number,
//     img: PropTypes.string,
//     place: PropTypes.string,
//     breed: PropTypes.string,
//     age: PropTypes.string,
//     category: PropTypes.string,
//     title: PropTypes.string,
// }
