import Image from "next/image";
import Link from "next/link";

import Badge from "@/components/Badge/Badge";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

import getPortfolioData from "@/services/portfolioData";

export default async function Home() {
  const data = await getPortfolioData();

  return (
    <section className="space-y-24">
      <article className="flex flex-wrap items-center justify-center gap-5">
        <div>
          <p className=" text-lg sm:text-2xl">
            Olá, eu me chamo <strong>{data.about_me.name}</strong>
          </p>

          <h1 className="flex flex-col text-3xl font-bold text-color-3 sm:text-5xl md:text-6xl lg:text-7xl">
            <span>Desenvolvedor</span>
            <span>Full Stack</span>
          </h1>
        </div>

        <div className="bubble-animation w-fit overflow-hidden rounded-full bg-color-3/15">
          <Image
            src={data?.about_me?.photograph}
            alt="Foto de perfil"
            width={300}
            height={300}
            priority={true}
          />
        </div>
      </article>

      <article className="space-y-5">
        <h2 className="flex items-center justify-center gap-5 whitespace-nowrap text-center text-3xl font-semibold text-color-3 sm:text-4xl">
          Sobre Mim <hr className="w-full" />
        </h2>

        <p className="ml-0 md:ml-5">{data?.about_me?.description}</p>
      </article>

      <article className="space-y-5">
        <h2 className="flex items-center justify-center gap-5 whitespace-nowrap text-center text-3xl font-semibold text-color-3 sm:text-4xl">
          Habilidades <hr className="w-full" />
        </h2>

        <div className="ml-0 flex flex-wrap gap-2 md:ml-5">
          {data.skills.main.map((skill) => (
            <Badge key={skill} title={skill} icon={skill}>
              {skill}
            </Badge>
          ))}
        </div>

        <div className="text-end">
          <Link
            href="/habilidades"
            className="text-lg uppercase hover:underline"
          >
            Ver mais
          </Link>
        </div>
      </article>

      <article className="space-y-5">
        <h2 className="flex items-center justify-center gap-5 whitespace-nowrap text-center text-3xl font-semibold text-color-3 sm:text-4xl">
          Projetos <hr className="w-full" />
        </h2>

        <div className="flex flex-wrap justify-center gap-5">
          {data.projects.main.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              image={project.image}
              description={project.description}
              technologies={project.technologies}
              source_code={project.source_code}
              project_link={project.project_link}
            />
          ))}
        </div>

        <div className="text-center">
          <Link href="/projetos" className="text-lg uppercase hover:underline">
            Ver mais
          </Link>
        </div>
      </article>
    </section>
  );
}
