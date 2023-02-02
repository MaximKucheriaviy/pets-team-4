import React from "react";
import NewsCard from "../NewsCard";
import { CardList } from "./NewsList.styled";

const NewsList = ({ newsItems }) => {
  const formatDate = newsItems.map((item) => {
    if (item.date) {
      return item;
    }
    const newDate = new Date().toLocaleDateString();
    return {
      ...item,
      date: newDate.split(".").reverse().join("-"),
    };
  });

  const sortedDate = [...formatDate].sort((a, b) =>
    b.date.localeCompare(a.date)
  );

  return (
    <CardList>
      {sortedDate.map(({ title, description, date, url }, idx) => {
        const formatedDate = date?.split("-").reverse().join("/");

        return (
          <NewsCard
            key={idx}
            title={title}
            description={description}
            date={formatedDate}
            url={url}
          />
        );
      })}
    </CardList>
  );
};

export default NewsList;
