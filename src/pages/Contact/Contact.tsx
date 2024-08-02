import {useContext} from "react";
import {ThemeContext} from "../../contexts/ThemeContext/ThemeContext.tsx";
import styles from "./Contact.module.css"
import classNames from "classnames";
import {GitHub, Linkedin} from "react-feather";
import {Link} from "react-router-dom";
import BackButton from "../../components/BackButton/BackButton.tsx";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher.tsx";

function Contact() {
    const {isDarkMode} = useContext(ThemeContext)

    return (
        <>
            <BackButton/>
            <div className={classNames(styles.content, {"dark": isDarkMode})}>
                <h1 className={styles.title}>
                    Get in touch!
                </h1>
                <div className={styles["socials-wrapper"]}>
                    <Link to="https://github.com/PotatoGolden76/" target="_blank">
                        <GitHub size={48} strokeWidth={isDarkMode ? 1 : 2}/>
                    </Link>
                    <Link to="https://www.linkedin.com/in/robert-adrian-harangus/" target="_blank">
                    <Linkedin size={48} strokeWidth={isDarkMode ? 1 : 2}/>
                    </Link>
                </div>
                <ul className={styles["contact-wrapper"]}>
                    <li><b>Email:</b><a href="mailto:robert.harangus@gmail.com"> robert.harangus@gmail.com</a></li>
                    <li><b>Phone:</b><a href="tel:+40787752332"> +(40) 787 752 332</a></li>
                </ul>
            </div>
            <ThemeSwitcher isOnTheRight/>
        </>
    )
}

export default Contact
