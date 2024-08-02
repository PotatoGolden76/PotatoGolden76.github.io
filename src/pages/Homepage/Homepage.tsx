import styles from "./Homepage.module.css"
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher.tsx";
import {Link} from "react-router-dom";

function Homepage() {

    return (
        <div className={styles.content}>
            <h1 className={styles.title}>
                {`<Hi, I'm Robert />`}
            </h1>

            <div className={styles["link-wrapper"]}>
                <Link className={styles.link} to="/projects">Projects</Link>
                <a className={styles.link} href="/Robert_Harangus_Resume.pdf">Resume</a>
                <Link className={styles.link} to="/contact">Contact</Link>
            </div>

            <ThemeSwitcher/>
        </div>
    )
}

export default Homepage
