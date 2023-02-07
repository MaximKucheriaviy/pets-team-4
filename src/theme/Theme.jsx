import { ThemeProvider } from "styled-components";
import { defaultTheme, darkTheme } from "./defaultThtme";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { setDarkThema, setDefaultThema } from "../redux/thema/themaSlice";



export const Theme =  ({children}) => {
   
const thema = useSelector(state => state.thema.thema)
const dispatch = useDispatch()
useEffect(() => {
 const key = window.localStorage.getItem("LS_KEY")
 
    if(key === "dark") {
        dispatch(setDarkThema(true)) 
    }

    if(key === "light") {
        dispatch(setDefaultThema(false)) 
    }

} )




    return <ThemeProvider theme={thema ? darkTheme :  defaultTheme}>
        {children}
    </ThemeProvider>
}