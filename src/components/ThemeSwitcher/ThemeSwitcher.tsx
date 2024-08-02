import {useContext} from "react";
import styles from "./ThemeSwitcher.module.css"
import {ThemeContext} from "../../contexts/ThemeContext/ThemeContext.tsx";
import {Moon, Sun} from "react-feather";
import classNames from "classnames";

interface ThemeSwitcherProps {
    isOnTheRight?: boolean
}

function ThemeSwitcher({isOnTheRight = false}: ThemeSwitcherProps) {
    const {isDarkMode, toggleDarkMode} = useContext(ThemeContext)

    return (
        <button className={classNames(styles["theme-button"], isOnTheRight ? styles.right : "")} onClick={toggleDarkMode}>
            {isDarkMode ? <Sun size={32} /> : <Moon size={32} />}
        </button>
    )
}

export default ThemeSwitcher
