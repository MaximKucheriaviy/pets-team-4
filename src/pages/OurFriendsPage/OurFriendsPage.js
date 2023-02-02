import { getAllSponsors } from "../../services/apiSponsors";
import { DefaultPage } from "../../components/DefaultPage/DefaultPage";
import { useEffect, useState } from "react";
import { SponsorsList } from "../../components/Sponsors/SponsorsList";
export default function OurFriendsPage() {
  const [sponsors, setSponsors] = useState([]);
  useEffect(() => {
    const fechSponsors = async () => {
      try {
        const { data } = await getAllSponsors();
        console.log(data);
        setSponsors(data);
      } catch (error) {
        console.log(error.message);
      }
    };
    fechSponsors();
  }, []);
  return (
    <DefaultPage title="Our Friends">
      <SponsorsList info={sponsors} />
    </DefaultPage>
  );
}
