import * as React from "react";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { ModalContainer } from "../../components/ModalAddPet/ModalContainer";
import NoticeCategoriesList from "../../components/Notices/NoticeCategoriesList/NoticeCategoriesList";
import NoticesCategoriesNav from "../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav";
import { Wrapper } from "./FindPetPage.styled";

import { addToFavorite, getFavorites, getNoticesByCategory, getOwnerNotise, removeNoticeById, removeToFavorite } from "../../services/apiNotices";
import { useEffect, useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectToken } from "../../redux/auth/autSelectors";
// import NoticesSearch from "../../components/NoticesSearch/NoticesSearch";
import Loader from "../../components/Loader/Loader";
import { ButtonToTop } from "../../components/ButtonToTop";
import { SlArrowUp } from "react-icons/sl";
import { scrollTopPage } from "../../helpers/scrollUp";
import SearchForm from "../../components/SearchForm";
import NotificationMessage from "../../components/NotificationMessage";

const PAGE_SCROLL_DOWN = 600;

export default function FindPetPage() {
const [notices, setNotices] = useState([]);
const [, setError] = useState(null);
const [isLoading, setIsLoading] = useState(false);
const [update, setUpdate] = useState(true);
// const [, setPage] = useState(1);
// const [, setNotFound] = useState(false);  
const [scrollTop, setScrollTop] = useState(0);
const [filter, setFilter] = useState("");
  
const { category } = useParams();
const token = useSelector(selectToken);
const location = useLocation();
  
  const isLostPage = location.pathname.includes("lost-found");
  const isFreePage = location.pathname.includes("for-free");
  const isSellPage = location.pathname.includes( "sell");
  const isFavoritePage = location.pathname.includes("favorite");
  const isOwnPage = location.pathname.includes("own");

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    (async () => {
      setIsLoading(true);
      setError(null);
      setNotices([]);
      setUpdate(true);
      setFilter("");
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
        console.log(userFavorite)
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

  const handleFilter = (e) => setFilter(e.target.value);

  const clearFilter = () => setFilter("");

  const filteredNews = () => {
    const normalizeFilter = filter.toLowerCase();

    return notices.filter((item) =>
      item.title.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleNews = filteredNews();
  const isNotification = visibleNews.length === 0 && !isLoading;

  // const isNotices = Boolean(notices.length);
  const isShowButtonTop = scrollTop > PAGE_SCROLL_DOWN;


  return (
    <DefaultPage title="Find your favorite pet">
      <SearchForm
        value={filter}
        changeFilter={handleFilter}
        clearFilter={clearFilter}/>
      {/* <NoticesSearch onSubmit={changeURL} /> */}
      <Wrapper>
        <NoticesCategoriesNav />
        <ModalContainer />
      </Wrapper>
      {isNotification && (
        <NotificationMessage text="No ad found for your request 🤷‍♂️. Try changing the keyword" />
      )}
      {isLoading && <Loader />}
      <NoticeCategoriesList items={visibleNews} removeNotice={removeNotice} changeFavorite={changeInFavoriteNotices} update={setUpdate} />
            {isShowButtonTop && (
        <ButtonToTop onClick={scrollTopPage} aria-label="To top page">
          <SlArrowUp />
        </ButtonToTop>
      )}
    </DefaultPage>
  );
}