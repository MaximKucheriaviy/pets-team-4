
import { Li,Ul,Link } from './auth.style';

import { useTranslation } from 'react-i18next';

export const AuthNav = ({ CloseModal }) => {

	const { t, i18n } = useTranslation();
	return (
		
			<Ul>
				<Link to="/login" >
					<Li onClick={CloseModal}>
					{t("login") }</Li>
				</Link>

				<Link to="/register">
						<Li onClick={CloseModal}>
						{t("registration") }
						</Li>
				</Link>
			</Ul>

	
	);
};