import {  useState } from 'react';
import { DefaultPage } from '../../components/DefaultPage/DefaultPage';
import AddNoticeButton from '../../components/Notices/AddNoticeButton/AddNoticeButton';
import NoticeCategoriesList from '../../components/Notices/NoticeCategoriesList/NoticeCategoriesList';
import NoticesCategoriesNav from '../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import SearchForm from '../../components/SearchForm/SearchForm';
import { Wrapper } from './FindPetPage.styled';


import pets from "../../components/Notices/pets.json"

export default function FindPetPage() {

  // const [pets, setPets] = useState([]);
  // const [error, setError] = useState(null);
  const [filter, setFilter] = useState("");

  const handleFilter = (e) => setFilter(e.target.value);

  const clearFilter = () => setFilter("");

  const filteredPets = () => {
    const normalizeFilter = filter.toLowerCase();
    console.log(pets);

    return pets.filter((item) =>
      item.title.toLowerCase().includes(normalizeFilter)
    );
  };

  const visiblePets = filteredPets();


  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await getPets();
  //       setPets(data);
  //       console.log("data", data);
  //     } catch (error) {
  //       setError(error.message);
  //     }
  //   })();
  // }, []);

  // const isShow = pets && !error;

  return <DefaultPage title="FindPetPage">
    <SearchForm
      value={filter}
      changeFilter={handleFilter}
      clearFilter={clearFilter}
    />
    <Wrapper>
      <NoticesCategoriesNav />
      <AddNoticeButton />
    </Wrapper>
    <NoticeCategoriesList  items={visiblePets}/>
    </DefaultPage>
}
