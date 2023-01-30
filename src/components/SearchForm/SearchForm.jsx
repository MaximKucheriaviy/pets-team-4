import { useState } from "react";
import { Form, Input, Button } from "./SearchForm.styled";

const SearchForm = () => {
  const [value, setValue] = useState("");

  const handleChange = (e) => setValue(e.target.value);

  const clearInput = () => setValue("");

  return (
    <Form autoComplete="off">
      <Input
        onChange={handleChange}
        value={value}
        type="text"
        name="search"
        placeholder="Search"
      />
      <Button onClick={clearInput} type="button">
        {value ? "X" : "O"}
      </Button>
    </Form>
  );
};

export default SearchForm;
