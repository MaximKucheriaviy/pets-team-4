import { Form, Input, Button } from "./SearchForm.styled";
import SearchIcon from "@mui/icons-material/Search";
import HighlightOffIcon from "@mui/icons-material/HighlightOff";
import { useTranslation } from 'react-i18next';
import { Notify } from "notiflix/build/notiflix-notify-aio";

const SearchForm = ({ value, changeFilter, clearFilter }) => {
  	const { t} = useTranslation();
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!e.currentTarget.elements.search.value)
      Notify.info("Enter some value to search");
  };

  return (
    <Form onSubmit={handleSubmit} autoComplete="off">
      <Input
        onChange={changeFilter}
        value={value}
        type="text"
        name="search"
        placeholder={t("search")}
      />
      <Button value={value} onClick={clearFilter} type="button">
        {value ? <HighlightOffIcon /> : <SearchIcon />}
      </Button>
    </Form>
  );
};

export default SearchForm;
