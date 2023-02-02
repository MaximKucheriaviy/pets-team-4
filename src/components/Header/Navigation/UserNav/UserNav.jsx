import { AccountLink } from "./user.style";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Con, Account } from "./user.style";

// import { useSelector } from "react-redux";
// import { selectUser } from "../../../../redux/auth/autSelectors";

export const UserNav = ({ CloseModal }) => {
//   const { name } = useSelector(selectUser);

  return (
    <div>
      <AccountLink to="/user" onClick={CloseModal}>
        <Con>
          <AccountCircleIcon sx={{ color: " #FFFFFF" }} />
          <Account>{"Username"}</Account>
        </Con>
      </AccountLink>
    </div>
  );
};
