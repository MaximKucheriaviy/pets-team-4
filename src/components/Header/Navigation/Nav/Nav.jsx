import { Link } from '../allNavigation/navigation.style';
// import { navLinks } from '../../../../shared/Link/navLink';
import { Ul, Li } from './nav.style';
import { useTranslation } from 'react-i18next';
export const Nav = ({ CloseModal }) => {
	
const { t} = useTranslation();
    return (
        <nav>
		<Ul>
				<Li  onClick={CloseModal}>
			<Link to={"/news"}>
				
					{t("news")}
			
				</Link>
				</Li>
					<Li onClick={CloseModal}>
					<Link to="/notices/sell">
					
					{t("notices")}
					
						
				</Link>
				</Li>
		<Li onClick={CloseModal}>
			<Link to="/friends">
						
					{t("our")}
					
					
			</Link>
			</Li>
            </Ul>
             </nav>
	);
};