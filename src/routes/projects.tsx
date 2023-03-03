import Header from '../components/header';
import styles from '../styles/projects.module.scss'

import dataJSON from '../projects.json'
import classNames from 'classnames';
import ProjectCard from '../components/projectCard';

interface Project {
  name: string,
  icon?: string,
  color: string,
  link: string
}
export default function Projects(props: any) {

  const data: Project[] = dataJSON;

  return (
    <>
        <Header />
        
        <div className={classNames("container mx-auto flex flex-row gap-8 justify-center flex-wrap ")}>
          {data.map((e: Project) => { return <ProjectCard/>})}
        </div>
    </>
  );
}

