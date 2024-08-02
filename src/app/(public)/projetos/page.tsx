import { getAllProjects } from "@/api/sanityServices";
import ProjectCard from "@/components/ProjectCard/ProjectCard";
import { ModalContextProvider } from "@/contexts/ModalContextProvider";

import { PiStarFill } from "react-icons/pi";

export default async function Projects() {
  const mainProjects = await getAllProjects("Principais");
  const otherProjects = await getAllProjects("Outros");

  return (
    <section className="space-y-24">
      <h1 className="flex flex-col text-center text-4xl font-bold text-color-3 sm:text-5xl md:text-6xl lg:text-7xl">
        Projetos
      </h1>

      <section className="space-y-5">
        <h2 className="flex items-center justify-center gap-5 text-center text-3xl font-semibold text-color-3 sm:text-4xl">
          <span className="flex items-center justify-center gap-1 whitespace-nowrap">
            <PiStarFill /> Principais
          </span>
          <hr className="w-full" />
        </h2>

        <section className="ml-0 flex flex-wrap justify-center gap-5 md:ml-5">
          {mainProjects.projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
              technologies={project.technologies}
              links={project.links}
            />
          ))}
        </section>
      </section>

      <section className="space-y-5">
        <h2 className="flex items-center justify-center gap-5 whitespace-nowrap text-center text-3xl font-semibold text-color-3 sm:text-4xl">
          Outros <hr className="w-full" />
        </h2>

        <section className="ml-0 flex flex-wrap justify-center gap-5 md:ml-5">
          {otherProjects.projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              imageUrl={project.imageUrl}
              description={project.description}
              technologies={project.technologies}
              links={project.links}
            />
          ))}
        </section>
      </section>
    </section>
  );
}
