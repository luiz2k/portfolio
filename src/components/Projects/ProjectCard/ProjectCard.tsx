import { skillIcons } from '@/utils/icons';
import s from './styles.module.scss';
import Image from 'next/image';

import { AiFillGithub, AiFillEye } from 'react-icons/ai';

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  projectLink: string;
  sourceCodeLink: string;
};

export default function ProjectCard({
  title,
  image,
  description,
  technologies,
  projectLink,
  sourceCodeLink,
}: ProjectCardProps) {
  return (
    <>
      <article className={s.projectCard}>
        <div className={s.projectCard__title}>
          <h3>{title}</h3>
        </div>

        <div className={s.projectCard__info}>
          <Image
            src={image}
            alt={`Imagem do projeto ${title}`}
            width={500}
            height={281}
            quality={100}
            priority
          />
        </div>

        <div className={s.projectCard__technologies}>
          <h4>Tecnologias Utilizadas</h4>
          <div>
            {technologies.map((technology) => (
              <span key={technology} data-technology={technology}>
                {skillIcons(technology)}
              </span>
            ))}
          </div>
        </div>

        <div className={s.projectCard__description}>
          <h4>Sobre o Projeto</h4>
          <div>
            <p>{description}</p>
          </div>
        </div>

        <div className={s.projectCard__buttons}>
          <a href={projectLink} target="_blank" rel="noreferrer">
            <AiFillEye /> Visitar Projeto
          </a>
          <a href={sourceCodeLink} target="_blank" rel="noreferrer">
            <AiFillGithub /> Código-Fonte
          </a>
        </div>
      </article>
    </>
  );
}
