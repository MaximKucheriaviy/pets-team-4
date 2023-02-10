import React from "react";
// import PropTypes from "prop-types";
import {
  Item,
  Image,
  Wrapper,
  Title,
  ImgWrapper,
  NoticeCategory,
  Favorite,
  Info,
  InfoWrapper,
  ButtonDelete,
  TitleInfoWrapper,
  RelevantInfoWrapper,
  ContainerInfo,
  ButtonLearn,
  ButtonWrapper,
} from "./NoticeCategoryItem.styled";
import DeleteIcon from "@mui/icons-material/Delete";
import IconButton from "@mui/material/IconButton";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { useSelector } from "react-redux";
import { selectUser } from "../../../../redux/auth/autSelectors";
import { Notify } from "notiflix/build/notiflix-notify-aio";

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
  setModal,
  removeNotice,
  changeFavorite,
  fav = false
}) {
  const user = useSelector(selectUser);
  const token = useSelector(state => state.auth.token)
 
  const yourNotice = Boolean(user.id === owner);

  const learnMoreHandler = () => {
    setModal();
  }

  const chageHandlerFavorite = () =>{
    console.log("there")
    if(!token){
      
      Notify.warning("You are not authorized");
      return;
    }
    if(fav){
      changeFavorite(id, false);
    }
    else{
      changeFavorite(id, true);
    }
  }

  const getAge = (birth) =>  {
    let today = new Date();
    let birthDate = new Date(birth);
    let age = today.getFullYear() - birthDate.getFullYear();

    let m = today.getMonth() - birthDate.getMonth();
    let d = today.getDay() - birthDate.getDay();

    if (m < 0 || (m === 0 && today.getDay() < birthDate.getDay())) {
      age--;
    }
    if (age === 0) {
      m = 12 + m;
      if (d < 0 || (d === 0 && today.getDate() < birthDate.getDate())) {
        m--
      }
    }
    const ageResult = age ? age + ' Year' : m + ' month'; 
    return ageResult;
  }

  return (
    <Item key={id} >
        <Wrapper>
          <ImgWrapper>
            <Image src={img} alt={breed} />
          <NoticeCategory>{ category}</NoticeCategory>
            <Favorite>
            <IconButton   
              onClick={chageHandlerFavorite} 
               sx={{
                "--IconButton-size": "44px",
                color: "currentColor",
              }}
            >
              {!fav ? (
                <FavoriteBorderIcon fill="currentColor" sx={{ fontSize: 28 }} />
              ) : (
                <FavoriteIcon fill="currentColor" sx={{ fontSize: 28 }} />
              )}
            </IconButton>
          </Favorite>
        </ImgWrapper>
        <InfoWrapper>
          <Title>{title}</Title>
          <ContainerInfo>
            <TitleInfoWrapper>
              <Info>Breed:</Info>
              <Info>Place:</Info>
              <Info>Age:</Info>
              {category === "sell" ? <Info>Price:</Info> : null}
            </TitleInfoWrapper>
            <RelevantInfoWrapper>
              <Info> {breed}</Info>
              <Info> {place}</Info>
              <Info> {getAge(age)}</Info>
              {category === "sell" ? <Info>{price}$</Info> : null}
            </RelevantInfoWrapper>
            </ContainerInfo>
        </InfoWrapper>  
        
        {yourNotice  ? (<ButtonWrapper>
          <ButtonLearn onClick={learnMoreHandler}>
            Learn more
          </ButtonLearn>
          <ButtonDelete onClick={() => removeNotice(id)}>
              Delete  
            <DeleteIcon fontSize="20px"
              sx={{
                  "--Button-gap": "13px"
                }}/>
            </ButtonDelete>
          </ButtonWrapper>
        ) : (
          <ButtonWrapper>
             <ButtonLearn onClick={learnMoreHandler}>
              Learn more
            </ButtonLearn>
          </ButtonWrapper>)}
      </Wrapper>
    </Item>
  );
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
