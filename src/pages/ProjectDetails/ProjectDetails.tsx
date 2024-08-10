import {useContext, useMemo} from "react";
import {ThemeContext} from "../../contexts/ThemeContext/ThemeContext.tsx";
import styles from "./ProjectDetails.module.css"
import classNames from "classnames";
import BackButton from "../../components/BackButton/BackButton.tsx";
import {ProjectContext} from "../../contexts/ProjectContext/ProjectContext.tsx";
import {Link, useParams} from "react-router-dom";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher.tsx";

function ProjectDetails() {
    const {isDarkMode} = useContext(ThemeContext)
    const {id} = useParams()
    const {getProject} = useContext(ProjectContext);

    const project = useMemo(() => getProject(parseInt(id!) - 1), [id, getProject]);

    return (
        <>
            <BackButton/>
            <div className={classNames(styles.content, {"dark": isDarkMode})}>
                <h1 className={styles.title}>
                    {project?.name}
                </h1>

                <ul className={styles["overview-list"]}>
                    <li><b>Project Status:</b> {project?.status}</li>
                    {project?.tech && project?.tech.length > 0 ?
                        <li><b>Technologies:</b> {project?.tech.map((item, index) => (
                            <span>{item}{index != project?.tech.length - 1 ? ", " : ""}</span>
                        ))}</li> : null}
                </ul>

                <div className={styles["button-wrapper"]}>
                    {project?.website ? <Link className={styles.button} to={project?.website} target="_blank">Website</Link> : null}
                    {project?.repository ?
                        <Link className={styles.button} to={project?.repository} target="_blank">Repository</Link> : null}
                </div>

                {project?.long_desc ? <p className={styles.description}>{project?.long_desc}</p> : null}
            </div>
            <ThemeSwitcher isOnTheRight/>
        </>
    )
}

export default ProjectDetails
