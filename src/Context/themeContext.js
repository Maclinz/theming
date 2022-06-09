import React, { useContext, useState } from 'react';
import colorThemes from '../colorThemes';

const ThemeContext = React.createContext();
const ThemeContextUpdate = React.createContext()

export const useTheme = () => {
    return useContext(ThemeContext)
}

export const useThemeUpadate = () => {
    return useContext(ThemeContextUpdate)
}

export const ThemeProvider = ({ children }) => {
    const [selectTheme, setSelectTheme] = useState(0)

    const theme = colorThemes[selectTheme]
    return (
        <ThemeContext.Provider value={theme}>
            <ThemeContextUpdate.Provider value={setSelectTheme}>
                {children}
            </ThemeContextUpdate.Provider>
        </ThemeContext.Provider>
    )
}