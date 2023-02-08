import { useState } from "react";
import { Form, Input, Button } from "./NoticesSearch.styled";
import SearchIcon from "@mui/icons-material/Search";

import { Notify } from "notiflix/build/notiflix-notify-aio";

const NoticesSearch = ({ onSubmit }) => {
  const [search, setSearch] = useState("");

  const handlechange = (e) => {
    const { value } = e.target;
    setSearch(value.toLowerCase());
  };

  const clearSearch = () => setSearch("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (search.trim() === "") {
      return Notify.info("Enter some value to search");
    }
    onSubmit(search.trim());
    clearSearch();
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
      <Button search={search} type="submit"  onClick={handleSubmit} >
        <SearchIcon />
      </Button>
    </Form>
  );
};

export default NoticesSearch;
