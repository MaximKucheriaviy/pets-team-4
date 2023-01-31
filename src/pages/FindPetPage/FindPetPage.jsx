import { DefaultPage } from '../../components/DefaultPage/DefaultPage';
import NoticeCategoriesList from '../../components/Notices/NoticeCategoriesList/NoticeCategoriesList';
import NoticesCategoriesNav from '../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import SearchForm from '../../components/SearchForm/SearchForm';

export default function FindPetPage() {
  return <DefaultPage title="FindPetPage">
    <SearchForm/>
    <NoticesCategoriesNav/>
    <NoticeCategoriesList />
    </DefaultPage>
}