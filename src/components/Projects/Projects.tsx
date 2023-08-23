import ProjectCard from './ProjectCard/ProjectCard';
import s from './styles.module.scss';

import { Kalam } from 'next/font/google';
const kalam = Kalam({ subsets: ['latin'], weight: '700' });

type ProjectsProps = {
  projects: {
    map(
      arg0: (item: ProjectCardType) => import('react').JSX.Element,
    ): import('react').ReactNode;
    title: string;
    image: string;
    description: string;
    technologies: string[];
    projectLink: string;
    sourceCodeLink: string;
  };
};

type ProjectCardType = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  projectLink: string;
  sourceCodeLink: string;
};

export default function Projects({ projects }: ProjectsProps) {
  return (
    <section id="projects">
      <div>
        <h2 className={kalam.className}>Projetos</h2>
        <div className={s.projects}>
          {projects.map((project: ProjectCardType) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              projectLink={project.projectLink}
              sourceCodeLink={project.sourceCodeLink}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
