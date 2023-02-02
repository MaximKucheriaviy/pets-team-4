import { DefaultPage } from '../../components/DefaultPage/DefaultPage';
import AddNoticeButton from '../../components/Notices/AddNoticeButton/AddNoticeButton';
import NoticeCategoriesList from '../../components/Notices/NoticeCategoriesList/NoticeCategoriesList';
import NoticesCategoriesNav from '../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav';
import SearchForm from '../../components/SearchForm/SearchForm';
import { Wrapper } from './FindPetPage.styled';

export default function FindPetPage() {
  return <DefaultPage title="FindPetPage">
    <SearchForm />
    <Wrapper>
      <NoticesCategoriesNav />
      <AddNoticeButton />
    </Wrapper>
    <NoticeCategoriesList />
    </DefaultPage>
}