import ProjectCard from './ProjectCard/ProjectCard';
import s from './styles.module.scss';

import projects from '../../utils/projects';

import { Kalam } from 'next/font/google';
const kalam = Kalam({ subsets: ['latin'], weight: '700' });

export default function Projects() {
  return (
    <section id="projects">
      <div>
        <h2 className={kalam.className}>Projetos</h2>
        <div className={s.projects}>
          {projects.map((item) => (
            <ProjectCard
              key={item.title}
              title={item.title}
              image={item.image}
              description={item.description}
              technologies={item.technologies}
              projectLink={item.projectLink}
              sourceCode={item.sourceCode}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
