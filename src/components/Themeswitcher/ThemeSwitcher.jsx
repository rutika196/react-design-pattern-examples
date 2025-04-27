import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

export const ThemeSwitcher = () => {
    const { theme, tooggleTheme } = useTheme();
    
    return (
        <div>
        <h2>Current Theme: {theme}</h2>
        <button onClick={tooggleTheme}>
            Switch Theme === {theme === "light" ? "dark" : "light"} Mode
        </button>
        <p>Current theme: {theme}</p>
        </div>
    );
}