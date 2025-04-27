import React, {createContext, useContext, useState} from "react";

// Create a context
const ThemeContext = createContext();

// Create a Provider component
export const ThemeProvider = ({children}) => {
    const [theme, setTheme] = useState("light");

    const tooggleTheme = () => {
        setTheme((preTheme) => (preTheme === "light" ? "dark" : "light"));
    };

    return (
        <ThemeContext.Provider value={{theme, tooggleTheme}}>
            {children}
        </ThemeContext.Provider>
    )
    
}

// Create a custom hook to use the ThemeContext
// This is a convenience function to avoid using useContext(ThemeContext) everywhere
// and to provide a more descriptive name for the context
// It also allows us to add more functionality in the future if needed

export const useTheme = () => {
    return useContext(ThemeContext);
}