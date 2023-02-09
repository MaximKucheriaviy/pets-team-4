import { Link } from '../allNavigation/navigation.style';

import { Ul, Li } from './nav.style';
import { useTranslation } from 'react-i18next';
export const Nav = ({ CloseModal }) => {
	const { t} = useTranslation();

    return (
        <nav>
		<Ul>
		
				<Li >
					<Link
						to="news">
						{t("news") }
					</Link>
				</Li>

				<Li >
					<Link
						to="/notices/sell">
						{t("notices") }
					</Link>
				</Li>

				<Li >
					<Link
						to="friends">
						{t("our") }
					</Link>
				</Li>
		
            </Ul>
             </nav>
	);
};