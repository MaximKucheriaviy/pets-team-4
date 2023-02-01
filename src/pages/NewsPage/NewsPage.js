import { useState, useEffect } from "react";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { getNews } from "../../services/apiNews";
import SearchForm from "../../components/SearchForm";
import NewsList from "../../components/NewsList";
import ErrorMessage from "../../components/ErrorMessage";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => setFilter(e.target.value);

  const clearFilter = () => setFilter("");

  const filteredNews = () => {
    const normalizeFilter = filter.toLowerCase();

    return news.filter((item) =>
      item.title.toLowerCase().includes(normalizeFilter)
    );
  };

  const visibleNews = filteredNews();

  useEffect(() => {
    (async () => {
      try {
        const { data } = await getNews();
        setNews(data);
      } catch (error) {
        setError(error.message);
      }
    })();
  }, []);

  const isShow = news && !error;

  return (
    <DefaultPage title="News">
      <SearchForm
        value={filter}
        changeFilter={handleFilter}
        clearFilter={clearFilter}
      />

      {isShow ? (
        <NewsList newsItems={visibleNews} />
      ) : (
        <ErrorMessage margin="40px">
          {error}😢. Please try again later...
        </ErrorMessage>
      )}
    </DefaultPage>
  );
}
