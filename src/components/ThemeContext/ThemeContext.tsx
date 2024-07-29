import {createContext, ReactNode, useEffect, useState} from "react";
import Cookies from "js-cookie";

interface ThemeProviderProps {
    children: ReactNode;
}

interface ThemeContextProps {
    isDarkMode: boolean,
    toggleDarkMode: () => void,
}

function getCookieOrSystem() {
    let darkMode
    const isDarkCookie = Cookies.get('isDarkMode');
    if(isDarkCookie) {
        darkMode = (isDarkCookie === "true")
    } else {
        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
            darkMode = true
            Cookies.set('isDarkMode', 'true')
        } else {
            darkMode = false
            Cookies.set('isDarkMode', 'false')
        }
    }

    return darkMode
}

function updateStyles(isDarkMode: boolean) {
    document.documentElement.style.setProperty('--background-color', isDarkMode ? '#1B1A1F' : '#FAFAFA');
    document.documentElement.style.setProperty('--cutout-color', isDarkMode ? '#343b43' : '#050315');
    document.documentElement.style.setProperty('--text-color', isDarkMode ? '#ffffff' : '#050315');
}

const defaultContext: ThemeContextProps = {
    isDarkMode: getCookieOrSystem(),
    toggleDarkMode: () => {},
}

export const ThemeContext = createContext<ThemeContextProps>(defaultContext)

export function ThemeProvider({children}: ThemeProviderProps) {
    const [darkMode, setDarkMode] = useState(defaultContext.isDarkMode)

    const handleModeToggle = (value: boolean) => {
        setDarkMode(value)
        Cookies.set('isDarkMode', value.toString())
        updateStyles(value)
    }

    useEffect(() => {
        updateStyles(darkMode)
        window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', event => {
            handleModeToggle(event.matches);
        });
        return () => {
            window.matchMedia('(prefers-color-scheme: dark)').removeEventListener('change',event => {
                handleModeToggle(event.matches);
            })
        }
    }, [])

    return (
        <ThemeContext.Provider value={{
            isDarkMode: darkMode,
            toggleDarkMode: () => handleModeToggle(!darkMode),
        }}>
            {children}
        </ThemeContext.Provider>
    )
}