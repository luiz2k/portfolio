import Image from "next/image";
import Link from "next/link";

import Badge from "@/components/Badge/Badge";
import ProjectCard from "@/components/ProjectCard/ProjectCard";

import { getMainSkills, getMe, getProjects } from "@/api/sanityServices";
import { PortableText } from "@portabletext/react";
import { ModalContextProvider } from "@/contexts/ModalContextProvider";

export default async function Home() {
  const me = await getMe();
  const skills = await getMainSkills();
  const projects = await getProjects("main");

  return (
    <section className="space-y-24">
      <article className="flex flex-wrap items-center justify-center gap-5">
        <div>
          <p className=" text-lg sm:text-2xl">
            Olá, eu me chamo <strong>{me.name}</strong>
          </p>

          <h1 className="flex flex-col text-3xl font-bold text-color-3 sm:text-5xl md:text-6xl lg:text-7xl">
            <span>Desenvolvedor</span>
            <span>Full Stack</span>
          </h1>
        </div>

        <div className="bubble-animation w-fit overflow-hidden rounded-full bg-color-3/15">
          <Image
            src={me.imageUrl}
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

        <div className="ml-0 md:ml-5 ">
          <PortableText value={me.about_me} />
        </div>
      </article>

      <article className="space-y-5">
        <h2 className="flex items-center justify-center gap-5 whitespace-nowrap text-center text-3xl font-semibold text-color-3 sm:text-4xl">
          Habilidades <hr className="w-full" />
        </h2>

        <div className="ml-0 flex flex-wrap gap-2 md:ml-5">
          {skills.main.map((skill) => (
            <Badge key={skill._id} title={skill.name} imageUrl={skill.imageUrl}>
              {skill.name}
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

        <div className="ml-0 flex flex-wrap  justify-center gap-5 md:ml-5">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
              technologies={project.technologies}
              links={project.links}
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
