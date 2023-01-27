import { NavLink } from 'react-router-dom';
import { navLinks } from '../../../../shared/Link/navLink';


export const Nav = () => {
	

    return (
        <nav>
		<ul>
			{navLinks.map((el, index) => (
				<li key={index}>
					<NavLink
						to={el.path}>
						{el.text}
					</NavLink>
				</li>
			))}
            </ul>
            </nav>
	);
};