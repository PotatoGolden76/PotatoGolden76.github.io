import {useContext, useMemo} from "react";
import {ThemeContext} from "../../contexts/ThemeContext/ThemeContext.tsx";
import styles from "./Projects.module.css"
import classNames from "classnames";
import BackButton from "../../components/BackButton/BackButton.tsx";
import {ProjectContext} from "../../contexts/ProjectContext/ProjectContext.tsx";
import ProjectCard from "../../components/ProjectCard/ProjectCard.tsx";
import ThemeSwitcher from "../../components/ThemeSwitcher/ThemeSwitcher.tsx";

function Projects() {
    const {isDarkMode} = useContext(ThemeContext)
    const {getAll} = useContext(ProjectContext);
    const projects = useMemo(() => getAll(), [getAll]);

    return (
        <>
            <BackButton/>
            <div className={classNames(styles.content, {"dark": isDarkMode})}>
                <h1 className={styles.title}>
                    My Projects
                </h1>
                {projects.map((e, i) => {
                    const projectProps = {
                        id: i,
                        name: e.name? e.name : "",
                        description: e.short_desc? e.short_desc : "",
                        website: e.website || e.repository,
                        isRepoOnly: !e.website? !!e.repository : false,
                    }
                    return <ProjectCard key={i} {...projectProps}/>
                    }
                )}
            </div>
            <ThemeSwitcher isOnTheRight/>
        </>
    )
}

export default Projects
