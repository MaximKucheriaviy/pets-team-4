import React from "react";
import NewsCard from "../NewsCard";
import { CardList } from "./NewsList.styled";

const NewsList = ({ newsItems }) => {
  return (
    <CardList>
      {newsItems.map(({ title, description, date, url }, idx) => {
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
