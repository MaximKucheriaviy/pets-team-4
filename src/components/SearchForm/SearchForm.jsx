// import { useState } from "react";
import { Form, Input, Button } from "./SearchForm.styled";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";

const SearchForm = ({ value, changeFilter, clearFilter }) => {
  return (
    <Form autoComplete="off">
      <Input
        onChange={changeFilter}
        value={value}
        type="text"
        name="search"
        placeholder="Search"
      />
      <Button onClick={clearFilter} type="button">
        {value ? <HighlightOffIcon /> : <SearchIcon />}
      </Button>
    </Form>
  );
};

export default SearchForm;
