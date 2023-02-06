import * as React from "react";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { ModalContainer } from "../../components/ModalAddPet/ModalContainer";
import NoticeCategoriesList from "../../components/Notices/NoticeCategoriesList/NoticeCategoriesList";
import NoticesCategoriesNav from "../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Wrapper } from "./FindPetPage.styled";

import { getFavorites, getNoticesByCategory, getOwnerNotise } from "../../services/apiNotices";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/autSelectors";
import { Box, CircularProgress } from "@mui/material";

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

const { category } = useParams();
const token = useSelector(selectToken);
const location = useLocation();

  const isLFPage = location.pathname.includes("lost-found" || "for-free" || "sell");
  const isFFPage = location.pathname.includes("for-free");
  const isSellPage = location.pathname.includes( "sell");
  const isFavoritePage = location.pathname.includes("favorite");
  const isOwnPage = location.pathname.includes("own");

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);
      try {
        if (isLFPage) {
          setNotices([]);
          const data = await getNoticesByCategory(category);

          return  setNotices(data);
        }
        if (isFFPage) {
          setNotices([]);
          const data = await getNoticesByCategory(category);

          return  setNotices(data);
        }
        if (isSellPage) {
          setNotices([]);
          const data = await getNoticesByCategory(category);

          return  setNotices(data);
        }
        if (isFavoritePage) {
          setNotices([]);
          const data = await getFavorites(token);

          return  setNotices(data);
        };
         if (isOwnPage) {
          setNotices([]);
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
  }, [category, isFFPage, isFavoritePage, isLFPage, isOwnPage, isSellPage, token]);


  return (
    <DefaultPage title="FindPetPage">
      {/* <SearchForm
        value={filter}
        changeFilter={handleFilter}
        clearFilter={clearFilter}
        // handleSubmit={handleSubmit}
      /> */}
      <Wrapper>
        <NoticesCategoriesNav />
        <ModalContainer />
      </Wrapper>
   {isLoading &&   <Box sx={{ display: 'flex' }}>
      <CircularProgress />
    </Box>}
      <NoticeCategoriesList  items={notices}  />
    </DefaultPage>
  );
}
