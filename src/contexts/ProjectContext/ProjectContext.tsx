import {createContext, ReactNode, useCallback, useMemo} from "react";
import ProjectData from "../../../public/projects.json"

interface Project {
    name: string;
    short_desc: string;
    long_desc: string;
    website: string;
    repository: string;
    status: string;
    tech: Array<string>;
}

interface ProjectProviderProps {
    children: ReactNode;
}

interface ProjectContextProps {
    data: Array<Project>,
    getAll: () => Array<Partial<Project>>,
    getProject: (index: number) => Project | undefined,
}


const defaultContext: ProjectContextProps = {
    data: [],
    getAll: () => [],
    getProject: () => undefined
}

export const ProjectContext = createContext<ProjectContextProps>(defaultContext)

export function ProjectProvider({children}: ProjectProviderProps) {
    const data: Array<Project> = useMemo(() => ProjectData, [])

    const getAll = useCallback(() => {
        return data.map((e) => {
            return {
                name: e.name,
                short_desc: e.short_desc,
                website: e.website,
                repository: e.repository,
            }
        })
    }, [data])

    const getProject = useCallback((index: number) => {
        return data[index]
    }, [data])

    return (
        <ProjectContext.Provider value={{
            data, getAll, getProject
        }}>
            {children}
        </ProjectContext.Provider>
    )
}