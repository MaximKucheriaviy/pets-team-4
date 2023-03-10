import { Link } from '../allNavigation/navigation.style';
import { navLinks } from '../../../../shared/Link/navLink';
import { Ul, Li } from './nav.style';

export const Nav = ({ CloseModal }) => {
	

    return (
        <nav>
		<Ul>
			{navLinks.map((el, index) => (
				<Li key={index} onClick={CloseModal}>
					<Link
						to={el.path}>
						{el.text}
					</Link>
				</Li>
			))}
            </Ul>
             </nav>
	);
};