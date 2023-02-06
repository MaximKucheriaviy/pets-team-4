import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { ModalContainer } from "../../components/ModalAddPet/ModalContainer";
import NoticeCategoriesList from "../../components/Notices/NoticeCategoriesList/NoticeCategoriesList";
import NoticesCategoriesNav from "../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Wrapper } from "./FindPetPage.styled";

import { getNoticesByCategory } from "../../services/apiNotices";
import { useEffect, useState } from "react";
import { SlArrowUp } from "react-icons/sl";
import { useParams } from "react-router-dom";
import { ButtonToTop } from "../../components/ButtonToTop";
import { scrollTopPage } from "../../helpers/scrollUp";

// token ="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RkOGQwNTI5NTEyZGY5N2Q3ZjI3ZDIiLCJpYXQiOjE2NzU0NjM5NDF9.jcqhFXup9wp8GmICuMdMU_zVs2vs5zZVKfj7D04JceY"
// id=63dd8d0529512df97d7f27d2

// const [favorite, setFavorite] = useState(false);

// function handleClick() {
//   if (favorite === true) {
//     setFavorite(false);
//   }
//     setFavorite(true);
// }
const PAGE_SCROLL_DOWN = 600;

export default function FindPetPage() {
  const [notices, setNotices] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [scrollTop, setScrollTop] = useState(0);

  const { category } = useParams();

  const handleFilter = (e) => {
    e.preventDefault();
    setFilter(e.target.value);
  };

  //   const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setFilter(e.target.value);
  // }

  const clearFilter = () => setFilter("");

  const filteredNotices = () => {
    const normalizeFilter = filter.toLowerCase();

    return notices.filter((item) =>
      item.title.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleNotices = filteredNotices();

  useEffect(() => {
    (async () => {
      try {
        const data = await getNoticesByCategory(category);
        console.log(data);
        setNotices(data);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, [category]);

  useEffect(() => {
    const handleScroll = () => {
      setScrollTop(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isShowButtonTop = scrollTop > PAGE_SCROLL_DOWN;

  return (
    <DefaultPage title="FindPetPage">
      <SearchForm
        value={filter}
        changeFilter={handleFilter}
        clearFilter={clearFilter}
        // handleSubmit={handleSubmit}
      />
      <Wrapper>
        <NoticesCategoriesNav />
        <ModalContainer />
      </Wrapper>
      <NoticeCategoriesList categoryNotice={category} items={visibleNotices} />

      {isShowButtonTop && (
        <ButtonToTop onClick={scrollTopPage}>
          <SlArrowUp />
        </ButtonToTop>
      )}
    </DefaultPage>
  );
}
