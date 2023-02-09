import { useState, useEffect } from "react";
import { SlArrowUp } from "react-icons/sl";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { getNews } from "../../services/apiNews";
import { ButtonToTop } from "../../components/ButtonToTop";
import SearchForm from "../../components/SearchForm";
import NewsList from "../../components/NewsList";
import ErrorMessage from "../../components/ErrorMessage";
import NotificationMessage from "../../components/NotificationMessage";
import { useTranslation } from 'react-i18next';
import { scrollTopPage } from "../../helpers/scrollUp";

const PAGE_SCROLL_DOWN = 600;

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);
  	const { t} = useTranslation();
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
      try {
        setIsLoading(true);
        const { data } = await getNews();
        setIsLoading(false);
        setNews(data);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  const handleFilter = (e) => setFilter(e.target.value);

  const clearFilter = () => setFilter("");

  const filteredNews = () => {
    const normalizeFilter = filter.toLowerCase();

    return news.filter((item) =>
      item.title.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleNews = filteredNews();
  const isNotification = visibleNews.length === 0 && !isLoading;
  const isShowButtonTop = scrollTop > PAGE_SCROLL_DOWN;

  return (
    <DefaultPage title={t("news") }>
      <SearchForm
        value={filter}
        changeFilter={handleFilter}
        clearFilter={clearFilter}
      />

      {isLoading ? <p>Loading...</p> : <NewsList newsItems={visibleNews} />}

      {isNotification && (
        <NotificationMessage text="No news was found matching your search 🤷‍♂️. Try changing the keyword" />
      )}

      {error && (
        <ErrorMessage margin="40px">
          {error}😢. Please try again later...
        </ErrorMessage>
      )}

      {isShowButtonTop && (
        <ButtonToTop onClick={scrollTopPage} aria-label="To top page">
          <SlArrowUp />
        </ButtonToTop>
      )}
    </DefaultPage>
  );
}
