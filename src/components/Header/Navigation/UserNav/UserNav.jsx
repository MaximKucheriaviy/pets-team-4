import { AccountLink } from "./user.style";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Con, Account } from "./user.style";

import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../../../../services/apiAuth";

export const UserNav = ({ CloseModal }) => {
  const token = useSelector((state) => state.auth.token);
  const [userName, setUserName] = useState("");
  useEffect(() => {
    if (!token) {
      return;
    }
    (async () => {
      try {
        const result = await getCurrentUser(token);
        setUserName(result.name);
      } catch (err) {
        console.log(err);
      }
    })()
    .catch(err => {
      console.log(err);
    })
  });

  return (
    <div>
      <AccountLink to="/user" onClick={CloseModal}>
        <Con>
          <AccountCircleIcon sx={{ color: " #FFFFFF" }} />
          <Account>{userName}</Account>
        </Con>
      </AccountLink>
    </div>
  );
};
