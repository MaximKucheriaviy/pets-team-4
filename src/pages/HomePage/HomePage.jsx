import { Helmet } from "react-helmet";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { ModalContainer } from "../../components/ModalAddPet/ModalContainer";

export default function HomePage() {
  return (
    <DefaultPage>
      <Helmet>
        <title>HomePage</title>
      </Helmet>
      <h3>HomePage</h3>
      <ModalContainer />
    </DefaultPage>
  );
}
