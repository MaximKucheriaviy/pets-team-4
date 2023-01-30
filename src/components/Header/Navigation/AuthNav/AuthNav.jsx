
import { Li,Ul,Link } from './auth.style';



export const AuthNav = ({ CloseModal }) => {
	return (
		
			<Ul>
				<Link to="/login" >
					<Li onClick={CloseModal}>
					Login</Li>
				</Link>

				<Link to="/register">
						<Li onClick={CloseModal}>
						Registration
						</Li>
				</Link>
			</Ul>

	
	);
};