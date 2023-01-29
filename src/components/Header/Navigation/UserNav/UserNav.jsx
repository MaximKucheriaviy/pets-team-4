import { AccountLink } from './user.style';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Con, Account} from './user.style';

// import { useSelector} from "react-redux";
// import { selectUser } from '../../../../redux/auth/autSelectors';



export const UserNav = () => {
	// const { name } = useSelector(selectUser);

	return (
		<div>
			< AccountLink  to="/user" style={{ color:"white" }}>
		<Con >
					<AccountCircleIcon sx={{ color: " #FFFFFF" }} />
					<Account>Account</Account>
		
			</Con>
			</ AccountLink >
			</div>
	);
};