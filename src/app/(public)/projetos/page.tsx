import ProjectCard from "@/components/ProjectCard/ProjectCard";

import getPortfolioData from "@/services/portfolioData";

import { PiStarFill } from "react-icons/pi";

export default async function Projects() {
  const data = await getPortfolioData();

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

        <section className="flex flex-wrap justify-center gap-5">
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
        </section>
      </section>

      <section className="space-y-5">
        <h2 className="flex items-center justify-center gap-5 whitespace-nowrap text-center text-3xl font-semibold text-color-3 sm:text-4xl">
          Outros <hr className="w-full" />
        </h2>

        <section className="flex flex-wrap justify-center gap-5">
          {data.projects.others.map((project) => (
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
        </section>
      </section>
    </section>
  );
}
