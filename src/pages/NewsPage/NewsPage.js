import { useState, useEffect } from "react";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { getNews } from "../../services/apiNews";
import SearchForm from "../../components/SearchForm";
import NewsList from "../../components/NewsList";
import ErrorMessage from "../../components/ErrorMessage";
import NotificationMessage from "../../components/NotificationMessage";

export default function NewsPage() {
  const [news, setNews] = useState([]);
  const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");
  const [isLoading, setIsLoading] = useState(false);

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

  return (
    <DefaultPage title="News">
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
    </DefaultPage>
  );
}
