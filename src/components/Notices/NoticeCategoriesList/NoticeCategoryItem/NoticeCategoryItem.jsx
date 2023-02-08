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
import { useTranslation } from 'react-i18next';
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
  changeFavorite
}) {
  const user = useSelector(selectUser);
  // console.log(id);
const { t, i18n } = useTranslation();

  const yourNotice = Boolean(user.id === owner);

  const learnMoreHandler = () => {
    setModal();
  }

  return (
    <Item key={id} >
        <Wrapper>
          <ImgWrapper>
            <Image src={img} alt={breed} />
          <NoticeCategory>{ category}</NoticeCategory>
            <Favorite>
            <IconButton   
              onClick={() => changeFavorite(id)} 
               sx={{
                "--IconButton-size": "44px",
                color: "currentColor",
              }}
            >
              {!favorite ? (
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
              <Info>{t("breed")}:</Info>
              <Info>{t("place")}:</Info>
              <Info>{t("age")}:</Info>
              {category === "sell" ? <Info>{t("price")}:</Info> : null}
            </TitleInfoWrapper>
            <RelevantInfoWrapper>
              <Info> {breed}</Info>
              <Info> {place}</Info>
              <Info> {age}</Info>
              {category === "sell" ? <Info>{price}$</Info> : null}
            </RelevantInfoWrapper>
            </ContainerInfo>
        </InfoWrapper>  
        
        {yourNotice  ? (<ButtonWrapper>
          <ButtonLearn>
           {t("learnmore")}
          </ButtonLearn>
          <ButtonDelete onClick={() => removeNotice(id)}>
            {t("delete")} 
            <DeleteIcon fontSize="20px"
              sx={{
                  "--Button-gap": "13px"
                }}/>
            </ButtonDelete>
          </ButtonWrapper>
        ) : (
          <ButtonWrapper>
             <ButtonLearn onClick={learnMoreHandler}>
               {t("learnmore")}
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
