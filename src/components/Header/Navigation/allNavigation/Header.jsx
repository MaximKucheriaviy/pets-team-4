import { useMediaQuery } from 'react-responsive';

import { NavigationMobile } from './navigationMobile';
import {NavigationTablet} from './navigationTablet';
import { NavigationDekstop } from './navigationDekstop';

export const Header = () => {
	const isTablet = useMediaQuery({ query: '(min-width: 768px)' });
	const isDesktop = useMediaQuery({ query: '(min-width: 1280px)' });
	return (
		<>
			{isDesktop ? (
				<NavigationDekstop  />
			) : isTablet ? (
				<NavigationTablet />
			) : (
				<NavigationMobile />
			)}
		</>
	);
};