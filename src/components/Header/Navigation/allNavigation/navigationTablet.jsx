import { Logo } from "../../Logo/Logo"
import { Header } from "./navigation.style"
import { Nav } from "../Nav/Nav"
import { AuthNav } from "../AuthNav/AuthNav"
import { useEffect, useState } from 'react';
import { ReactComponent as Strips } from './Svg/burger.svg';
import { ReactComponent as Cross } from "./Svg/close.svg";
// import { UserNav } from "../UserNav/UserNav";

import {Btn, Box, LogoBox, LogoBtn, Boxs}  from "./HeaderStyle.jsx"

export  function NavigationTablet() {
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
    
			<Box>
				<LogoBox>
					<Logo setIsOpen={setIsOpen} />
				</LogoBox>
				<LogoBtn>
					
					{!isOpen &&     <AuthNav setIsOpen={setIsOpen} />}
					{isOpen ? (
						<>
							<Btn
								type="button"
								
								onClick={toggleMenu}
							>
								<Cross
									width="40px"
									heigth="40px"
									aria-label="Меню"
									
								></Cross>
							</Btn>
						</>
					) : (
						<>
							<Btn
								type="button"
								
								onClick={toggleMenu}
							>
								<Strips
									width="30px"
									heigth="20px"
									aria-label="Меню"
								
								></Strips>
							</Btn>
						</>
					)}
				</LogoBtn>
			</Box>

			
		
		  <Boxs isOpen = {isOpen}>
			  
				<Nav setIsOpen={setIsOpen} CloseModal={toggleMenu } />
		
				
			 
			  </Boxs>
		  
       </Header>   
)

}