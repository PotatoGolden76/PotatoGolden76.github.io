import {useContext} from "react";
import styles from "./ThemeSwitcher.module.css"
import {ThemeContext} from "../ThemeContext/ThemeContext.tsx";
import {Moon, Sun} from "react-feather";

function ThemeSwitcher() {
    const {isDarkMode, toggleDarkMode} = useContext(ThemeContext)

    return (
        <button className={styles["theme-button"]} onClick={toggleDarkMode}>
            {isDarkMode ? <Sun size={32} /> : <Moon size={32} />}
        </button>
    )
}

export default ThemeSwitcher
