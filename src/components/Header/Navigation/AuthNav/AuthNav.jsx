import { Link } from 'react-router-dom';



export const AuthNav = () => {
	return (
		<div >
			<div >
				<Link to="/login">
					Login
				</Link>
			</div>
			<div>
				<Link to="/register">
					Registration
				</Link>
			</div>
		</div>
	);
};