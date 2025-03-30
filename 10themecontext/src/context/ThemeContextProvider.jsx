import React, {useState, useContext} from "react";
import ThemeContext from "./ThemeContext";

function ThemeContextProvider({children}){
    // const [mode, setMode] = useState('dark')
    return (
        <ThemeContext.Provider>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContextProvider