import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "./defaultThtme";
import { useSelector } from "react-redux";


export const Theme =  ({children}) => {
const thema = useSelector(state => state.thema.thema)
console.log(thema)


    return <ThemeProvider theme={thema ? darkTheme :  defaultTheme}>
        {children}
    </ThemeProvider>
}