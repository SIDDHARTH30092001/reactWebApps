import { useContext, createContext } from "react";

export const ThemeContext=createContext({
    themeMode:"light",
    darkTheme:()=>{},//created lightThemeFunction, i.e. we can provide variable as well as method in js
    lightTheme:()=>{}, //created lightThemeFunction
})


//directly exporting here instead ThemeContextProvider.jsx like in previous project....
export const ThemeProvider=ThemeContext.Provider


//we were using everywhere Profilejsx and loginjsx that useContext(userContext). here we need to import theme.js will do rest automatically access inside it
export default function useTheme(){
    return useContext(ThemeContext)
}