import { Logo } from "../../Logo/Logo"
import { Header } from "./navigation.style"
import { Nav } from "../Nav/Nav"
import { AuthNav } from "../AuthNav/AuthNav"
import {UserNav} from "../UserNav/UserNav"
import { useAuth } from "../../../../shared/useAuth/useAuth"
import { Thema } from "../../Thema/thema"

export function NavigationDekstop () {
  const isLogin = useAuth();
 
  return (
   
    <Header>

  
        <Logo />
    
              <Nav />
              <Thema/>
                {isLogin ? <UserNav /> :    <AuthNav />}
                
                 </Header>
                
)

}
