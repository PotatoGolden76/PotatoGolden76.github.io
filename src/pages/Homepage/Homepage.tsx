import styles from "./Homepage.module.css"
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher.tsx";

function Homepage() {

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>
                {`<Hi, I'm Robert />`}
            </h1>

            <div className={styles["link-wrapper"]}>
                <a className={styles.link} href="#/projects">Projects</a>
                <a className={styles.link} href="/Robert_Harangus_Resume.pdf">Resume</a>
                <a className={styles.link} href="#/contact">Contact</a>
            </div>

            <ThemeSwitcher/>
        </div>
    )
}

export default Homepage
