import { Logo } from "../../Logo/Logo"
import { Header } from "./navigation.style"
import { Nav } from "../Nav/Nav"
import { AuthNav } from "../AuthNav/AuthNav"
import { useEffect, useState } from 'react';
import { ReactComponent as Strips } from './Svg/burger.svg';
import { ReactComponent as Cross } from "./Svg/close.svg";

import { UserNav } from "../UserNav/UserNav";
import  style from "./Header.module.scss"

// import { useAuth } from "../../../shared/useAuth/useAuth"

export function NavigationMobile() {
  // const isLogin = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    

  const toggleBodyHidden = isOpen => {
	if (isOpen) {
		document.body.style.overflow = 'hidden';
	} else {
		document.body.style.overflow = 'auto';
	}
  };
    	const toggleMenu = () => {
		setIsOpen(isOpen => !isOpen);
	};

	useEffect(() => {
		toggleBodyHidden(isOpen);
	}, [isOpen]);
 
  return (
<Header>
     	
			<div className={style.btns}>
				<Logo setIsOpen={setIsOpen} />
				{isOpen ? (
					<>
						<button
							type="button"
							className={style.btnBurger}
							onClick={toggleMenu}
						>
							<Cross
								width="40px"
								heigth="40px"
								aria-label="Меню"
								className={style.cross}
							></Cross>
						</button>
					</>
				) : (
					<>
						<button
							type="button"
							className={style.btnBurger}
							onClick={toggleMenu}
						>
							<Strips
								width="30px"
								heigth="20px"
								aria-label="Меню"
								className={style.strips}
							></Strips>
						</button>
					</>
				)}
			</div>

			<div className={isOpen ? `${style.open}` : `${style.closed}`}>
				<Nav setIsOpen={setIsOpen} />
				
			  <AuthNav setIsOpen={setIsOpen} />
			  <UserNav setIsOpen={setIsOpen} />
				
			</div>
		
          </Header>
)

}