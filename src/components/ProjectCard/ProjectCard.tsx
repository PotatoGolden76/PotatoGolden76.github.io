import {GitHub, Globe, IconProps} from "react-feather";
import {Link} from "react-router-dom";
import styles from "./ProjectCard.module.css"
import {useContext, useMemo} from "react";
import {ThemeContext} from "../../contexts/ThemeContext/ThemeContext.tsx";
import {Link as LinkIcon} from "react-feather";

interface ProjectCardProps {
    id: number,
    name: string,
    description: string,
    website?: string,
    isRepoOnly: boolean
}

function ProjectCard(props: ProjectCardProps) {
    const {
        id,
        name,
        description,
        website,
        isRepoOnly = false
    } = props

    const {isDarkMode} = useContext(ThemeContext)
    const iconProps = useMemo<Partial<IconProps>>(() => {
        return {
            size: 32,
            strokeWidth: isDarkMode ? 1 : 2
        }}, [isDarkMode])

    return (
        <div className={styles.wrapper}>
            <div className={styles.content}>
                <Link to={`/projects/${id+1}`} className={styles.name}>{name} <span><LinkIcon  {...iconProps} size={16}/></span></Link>
                <p className={styles.description}>{description}</p>
            </div>
            {website ?
                <Link className={styles["website-button"]} to={website} target="_blank">
                    {isRepoOnly ? <GitHub {...iconProps}/> : <Globe {...iconProps}/>}
                </Link> : null}
        </div>
    )
}

export default ProjectCard
