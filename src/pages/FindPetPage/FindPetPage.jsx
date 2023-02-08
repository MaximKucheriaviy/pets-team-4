import * as React from "react";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { ModalContainer } from "../../components/ModalAddPet/ModalContainer";
import NoticeCategoriesList from "../../components/Notices/NoticeCategoriesList/NoticeCategoriesList";
import NoticesCategoriesNav from "../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav";
import { Wrapper } from "./FindPetPage.styled";

import { addToFavorite, getFavorites, getNoticesByCategory, getOwnerNotise, getSearchNotices, removeNoticeById, removeToFavorite } from "../../services/apiNotices";
import { useEffect, useState } from "react";
import { useLocation, useParams, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/autSelectors";
import NoticesSearch from "../../components/NoticesSearch/NoticesSearch";
import Loader from "../../components/Loader/Loader";

// token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RkOGQwNTI5NTEyZGY5N2Q3ZjI3ZDIiLCJpYXQiOjE2NzU0NjM5NDF9.jcqhFXup9wp8GmICuMdMU_zVs2vs5zZVKfj7D04JceY"
// id=63dd8d0529512df97d7f27d2
  

export default function FindPetPage() {
const [notices, setNotices] = useState([]);
const [, setError] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [update, setUpdate] = useState(true);
const [page, setPage] = useState(1);
const [, setNotFound] = useState(false);  

const [searchParams, setSearchParams] = useSearchParams();
const queryName = searchParams.get('query') ?? '';
  
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
      setUpdate(true)
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

          return  setNotices(data);
        }
        if (isFavoritePage) {
          const data = await getFavorites(token);
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
    if(!notices || notices.length === 0 || !token){
      return;
    }
    (async () => {
      if(!update){
        return
      }
      const userFavorite = await getFavorites(token);
      setNotices(prev => {
        setUpdate(false)
        const res = prev.map(itemNotice => {
          if(userFavorite.some(item => item._id === itemNotice._id)){
            itemNotice.fav = true;
          }
          return itemNotice;
        })
        if(isFavoritePage){
          return res.filter(item => item.fav);
        }
        else{
          return res
        }
      })
    })()
    .catch(err => {
      console.log(err);
    })
   }, [notices, token, update, isFavoritePage])

  const changeInFavoriteNotices = async (id, status) => {
    if(!token){
      return;
    }
    try{
      if(status){
        await addToFavorite(token, id)
        setNotices(prev => {
          return prev.map(item => {
            if(item._id !== id){
              return item
            }
            
            item.fav = status;
            return item
          })
        })
      }
      else{
        await removeToFavorite(token, id)
        setNotices(prev => {
          return prev.map(item => {
            if(item._id !== id){
              return item
            }
            item.fav = status;
            return item
          })
        })
      }
      setUpdate(true);
    }
    catch(err){
      console.log(err);
    }
  }

  const removeNotice = async (id) => {
    if (!token) {
      return
    }
    try {
      const result = await removeNoticeById(token, id);
      if (!result) {
        return
      }
      setNotices(prev => {
        return prev.filter(item => item._id !== id);
      })
    }
    catch (err) {
      console.log(err);
    }
  };

    useEffect(() => {
    if (!queryName) {
      return;
    }

    const fetchNotices = async () => {
      setIsLoading(true);
    
      try {
        const data = await getSearchNotices(queryName,category, page);
        console.log(data)
        if (data.length === 0) {
          setNotFound(true);
        } else {
          setNotices((prevNotices) => {
            return [...prevNotices, ...data]
          });
          setNotFound(false);
        }
      } catch (error) {
        console.log(error);
        setError(error);
      }
      finally {
        setIsLoading(false);
      }
    }
    
    if (queryName) {
      fetchNotices();
    }
  }, [queryName, category,  page]);

  const changeURL = value => {
    setSearchParams(value !== "" ? { query: value } : {});
    setNotices([]);
    setPage(1);
  };

  // const isNotices = Boolean(notices.length);

  return (
    <DefaultPage title="Find your favorite pet">
      <NoticesSearch onSubmit={changeURL} />
      <Wrapper>
        <NoticesCategoriesNav />
        <ModalContainer />
      </Wrapper>
      {isLoading && <Loader />}
      <NoticeCategoriesList items={notices} removeNotice={ removeNotice} changeFavorite={changeInFavoriteNotices} update={setUpdate} />
    </DefaultPage>
  );
}