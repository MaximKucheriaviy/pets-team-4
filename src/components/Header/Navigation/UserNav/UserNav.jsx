import { Link } from 'react-router-dom';
import { useSelector} from "react-redux";
import { selectUser } from '../../../../redux/auth/autSelectors';



export const UserNav = () => {
	const { name } = useSelector(selectUser);

	return (
		<div>
			<Link to="/user">{name}</Link>
		
		</div>
	);
};