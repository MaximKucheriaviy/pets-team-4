import { Logo } from "../../Logo/Logo"
import { Header } from "./navigation.style"
import { Nav } from "../Nav/Nav"
import { AuthNav } from "../AuthNav/AuthNav"
import { useEffect, useState } from 'react';
import { ReactComponent as Strips } from './Svg/burger.svg';
import { ReactComponent as Cross } from "./Svg/close.svg";
import {Btn, Box, Boxi}  from "./HeaderStyle.jsx"
import { UserNav } from "../UserNav/UserNav";
import style from "./Header.module.scss"




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
     	
			<Box >
				<Logo setIsOpen={setIsOpen} />
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
				</Box>
					
		  <Boxi isOpen = {isOpen}>
			  
				<Nav setIsOpen={setIsOpen} />
				
			  <AuthNav setIsOpen={setIsOpen} />
			  <UserNav setIsOpen={setIsOpen} />
				
			  </Boxi>
			 
		  
		
		    
			
		
          </Header>
)

}