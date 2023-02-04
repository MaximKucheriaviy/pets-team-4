// import { useState } from "react";
import { Helmet } from "react-helmet";

import User from "../../components/User/User";

// import { getUserInfo } from "../../services/apiUser";
// import getCurrentUser from "../../services/apiAuth";

export default function UserPage() {
  // const [infoUser, setUser] = useState([]);

  // useEffect(() => {
  //   (async () => {
  //     try {
  //       const { data } = await getCurrentUser();
  //       setUser(data);
  //     } catch (error) {
  //       console.log(error.message);
  //     }
  //   })();
  // }, []);

  return (
    <div>
      <Helmet>
        <title>User</title>
      </Helmet>
      <User />
    </div>
  );
}
