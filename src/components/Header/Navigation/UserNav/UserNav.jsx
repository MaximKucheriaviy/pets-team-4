import { AccountLink } from "./user.style";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { Con, Account } from "./user.style";
import { useTranslation } from 'react-i18next';

export const UserNav = ({ CloseModal }) => {
	const { t} = useTranslation();

  return (
    <div>
      <AccountLink to="/user" onClick={CloseModal}>
        <Con>
          <AccountCircleIcon sx={{ color: " #FFFFFF" }} />
          <Account>{t("accaunt")}</Account>
        </Con>
      </AccountLink>
    </div>
  );
};
