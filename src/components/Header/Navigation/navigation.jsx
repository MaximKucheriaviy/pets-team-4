import { Logo } from "../Logo/Logo"
import { UserNav } from "./UserNav/UserNav"
import { Nav } from "./Nav/Nav"
import { AuthNav } from "./AuthNav/AuthNav"
import { useAuth } from "../../../shared/useAuth/useAuth"

export default function Navigation() {
  const isLogin = useAuth();

    return (
        
        <header>
         
           
            <div>
                <Logo />
                {/* <Nav />
                <AuthNav />
                <UserNav /> */}
                 <Nav />
            
                {isLogin ?     <UserNav /> : <AuthNav />}
                
            </div>


            </header>
          
)

}