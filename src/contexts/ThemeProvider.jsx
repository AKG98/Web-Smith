import { useState } from "react";
import ThemeContext from "./ThemeContext";

const ThemeProvider = ({children}) => {
    const [cmTheme,setcmTheme] = useState('dark');
    return(
        <ThemeContext.Provider value={{cmTheme,setcmTheme}}>
            {children}
        </ThemeContext.Provider>
    );

}
export default ThemeProvider;