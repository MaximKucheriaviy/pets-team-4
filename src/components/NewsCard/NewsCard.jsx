import React from "react";
import { Card, Title, Text, Wrap, Date, Link } from "./NewsCard.styled";

const NewsCard = ({ title, description, date, url }) => {
  return (
    <Card>
      <Title>{title}</Title>
      <Text>{description}</Text>
      <Wrap>
        <Date>{date}</Date>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          Read more
        </Link>
      </Wrap>
    </Card>
  );
};

export default NewsCard;
