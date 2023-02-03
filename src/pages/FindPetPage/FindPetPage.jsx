import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { ModalContainer } from "../../components/ModalAddPet/ModalContainer";
import NoticeCategoriesList from "../../components/Notices/NoticeCategoriesList/NoticeCategoriesList";
import NoticesCategoriesNav from "../../components/Notices/NoticesCategoriesNav/NoticesCategoriesNav";
import SearchForm from "../../components/SearchForm/SearchForm";
import { Wrapper } from "./FindPetPage.styled";


import pets from "../../components/Notices/pets.json"

export default function FindPetPage() {
  return (
    <DefaultPage title="FindPetPage">
      <SearchForm />
      <Wrapper>
        <NoticesCategoriesNav />
        <ModalContainer />
      </Wrapper>
      <NoticeCategoriesList />
    </DefaultPage>
  );
}
