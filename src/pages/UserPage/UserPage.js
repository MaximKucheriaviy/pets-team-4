// import { useState } from "react";
import { Helmet } from "react-helmet";

import User from "../../components/User/User";

export default function UserPage() {
  return (
    <div>
      <Helmet>
        <title>User</title>
      </Helmet>
      <User />
    </div>
  );
}
