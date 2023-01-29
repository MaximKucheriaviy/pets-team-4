import { Helmet } from "react-helmet";
import { getAllSponsors } from "./apiSponsors";
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
    <div>
      <Helmet>
        <title>OurFriendsPage</title>
      </Helmet>
      <h3>Our Friends</h3>|
      <SponsorsList info={sponsors} />
    </div>
  );
}
