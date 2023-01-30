import { useState, useEffect } from "react";
import NewsList from "../../components/NewsList/NewsList";
import SearchForm from "../../components/SearchForm/SearchForm";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { getNews } from "./apiNews";
import { Message } from "../../components/ErrorMessage/ErrorMessage.styled";

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

  return (
    <DefaultPage title="News">
      <SearchForm
        value={filter}
        changeFilter={handleFilter}
        clearFilter={clearFilter}
      />
      {error && <Message>{error}😢. Please try again later...</Message>}
      {news && !error && <NewsList newsItems={visibleNews} />}
    </DefaultPage>
  );
}
