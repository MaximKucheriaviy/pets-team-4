import { useState } from "react";
import { Form, Input, Button } from "./NoticesSearch.styled";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

import { Notify } from "notiflix/build/notiflix-notify-aio";

const NoticesSearch = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handlechange = (e) => setSearch(e.target.value);

  const clearSearch = () => setSearch("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!e.currentTarget.elements.search.value)
      return Notify.info("Enter some value to search");
    onSubmit(search);
    setSearch("");
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Input
        onChange={handlechange}
        value={search}
        type="text"
        name="search"
        placeholder="Search"
        pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
      />
      <Button search={search} onClick={clearSearch} type="button">
        {search ? <HighlightOffIcon /> : <SearchIcon />}
      </Button>
    </Form>
  );
};

export default NoticesSearch;
