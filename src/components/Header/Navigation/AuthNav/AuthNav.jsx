
import { Li,Ul,Link } from './auth.style';



export const AuthNav = () => {
	return (
		
			<Ul>
				<Link to="/login">
					<Li>
					Login</Li>
				</Link>

				<Link to="/register">
						<Li>
						Registration
						</Li>
				</Link>
			</Ul>

	
	);
};