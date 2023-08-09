import { icons } from '@/utils/icons';
import s from './styles.module.scss';
import Image, { StaticImageData } from 'next/image';

import { AiFillGithub, AiFillEye } from 'react-icons/ai';

type ProjectCardProps = {
  title: string;
  image: StaticImageData;
  description: string;
  technologies: string[];
  projectLink: string;
  sourceCode: string;
};

export default function ProjectCard({
  title,
  image,
  description,
  technologies,
  projectLink,
  sourceCode,
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
            priority={true}
          />
        </div>

        <div className={s.projectCard__technologies}>
          <h4>Tecnologias Utilizadas</h4>
          <div>
            {technologies.map((technology) => (
              <span key={technology} data-technology={technology}>
                {icons(technology)}
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
          <a href={sourceCode} target="_blank" rel="noreferrer">
            <AiFillGithub /> Código-Fonte
          </a>
        </div>
      </article>
    </>
  );
}
