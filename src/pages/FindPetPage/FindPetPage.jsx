import * as React from "react";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { ModalContainer } from "../../components/ModalAddPet/ModalContainer";
import NoticeCategoriesList from "../../components/Notices/NoticeCategoriesList/NoticeCategoriesList";
import NoticesCategoriesNav from "../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav";
import { Wrapper } from "./FindPetPage.styled";

import { addToFavorite, getFavorites, getNoticesByCategory, getOwnerNotise, removeFromFavorite, removeNoticeById } from "../../services/apiNotices";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/autSelectors";
import { Box, CircularProgress } from "@mui/material";
import NoticesSearch from "../../components/NoticesSearch/NoticesSearch";

// token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RkOGQwNTI5NTEyZGY5N2Q3ZjI3ZDIiLCJpYXQiOjE2NzU0NjM5NDF9.jcqhFXup9wp8GmICuMdMU_zVs2vs5zZVKfj7D04JceY"
// id=63dd8d0529512df97d7f27d2
  
  // function handleClick() {
  //   if (favorite === true) {
  //     setFavorite(false);
  //   } 
  //     setFavorite(true);
  // }
  

export default function FindPetPage() {
const [notices, setNotices] = useState([]);
const [error, setError] = useState(null);
const [isLoading, setIsLoading] = useState(false);
  const [favoriteId, setFavoriteId] = useState([]);
const [noticeId, setNoticeId] = useState("")

const { category } = useParams();
const token = useSelector(selectToken);
const location = useLocation();

  const isLostPage = location.pathname.includes("lost-found");
  const isFreePage = location.pathname.includes("for-free");
  const isSellPage = location.pathname.includes( "sell");
  const isFavoritePage = location.pathname.includes("favorite");
  const isOwnPage = location.pathname.includes("own");

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);
      setNotices([]);
      try {
        if (isLostPage) {
          const data = await getNoticesByCategory(category);

          return  setNotices(data);
        }
        if (isFreePage) {
          const data = await getNoticesByCategory(category);

          return  setNotices(data);
        }
        if (isSellPage) {
          const data = await getNoticesByCategory(category);
          console.log("sell",data)

          return  setNotices(data);
        }
        if (isFavoritePage) {
          const data = await getFavorites(token);
        console.log("fav",data)
          return  setNotices(data);
        };
         if (isOwnPage) {
          const data = await getOwnerNotise(token);

          return  setNotices(data);
        };
      } catch (error) {
        setError(error.message);
      }
        finally {
        setIsLoading(false);
      }
    })();
  }, [category, isFreePage, isFavoritePage, isLostPage, isOwnPage, isSellPage, token]);


    useEffect(() => {
      (async () => {
        setIsLoading(true);
        setError(null);
        try {
          const data = await addToFavorite(token, favoriteId);

          return setNotices(data);
        }
        catch (error) {
          setError(error.message);
        }
        finally {
          setIsLoading(false);
        }
      })();
    }, [ favoriteId]);

  // useParams();
  // const {title } = useParams();
  // // const id = movieId;
  // console.log("id", useParams());

    useEffect(() => {
      (async () => {
        setIsLoading(true);
        setError(null);
        try {
          const data = await removeNoticeById(token, noticeId);

          return setNotices(data);
        }
        catch (error) {
          setError(error.message);
        }
        finally {
          setIsLoading(false);
        }
      })();
    }, [ noticeId]);

  const changeInFavoriteNotices = ( id) => {
    //     if (inFavorites(id)) {
            
    // }
    // console.log("Yes")
    setFavoriteId(id)
    }

  // const inFavorites = ({ id }) => {
  //     console.log(id)
  //       const result = favorites.find((item) => item._id === id );
  //       return result;
  //   }

  const removeNotice = (id) => {
    console.log(id)
    setNoticeId(id);
    console.log(noticeId)
    setNotices((prev) => {
    console.log(prev)
      
      const newNotices = prev.filter((item) => item._id !== id);
      return newNotices
    })
  }

       

  return (
    <DefaultPage title="FindPetPage">
      <NoticesSearch/>
      <Wrapper>
        <NoticesCategoriesNav />
        <ModalContainer />
      </Wrapper>
   {isLoading &&   <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>}
      <NoticeCategoriesList items={notices} removeNotice={ removeNotice} changeFavorite={changeInFavoriteNotices} />
    </DefaultPage>
  );
}