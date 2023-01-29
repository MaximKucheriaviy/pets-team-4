import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./defaultThtme";

export const Theme =  ({children}) => {
    return <ThemeProvider theme={defaultTheme}>
        {children}
    </ThemeProvider>
}