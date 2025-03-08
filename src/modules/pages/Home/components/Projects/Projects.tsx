import {
  RevealDown,
  RevealUp,
} from "@/modules/shared/components/animations/ReavelAnimations/ReavelAnimations";
import { ProjectCard } from "@/modules/shared/components/ProjectCard/ProjectCard";
import { getMainProjects } from "@/modules/shared/functions/getProjects";
import Link from "next/link";

export function Projects() {
  const projects = getMainProjects();

  return (
    <section className="grid gap-2">
      <RevealUp as="h2" className="m-auto text-xl font-bold sm:m-0">
        Projetos pessoais
      </RevealUp>

      <div className="grid gap-5">
        {projects.map((project) => (
          <ProjectCard
            key={project.data.slug}
            title={project.data.title}
            image={project.data.image}
            description={project.content}
            technologies={project.data.technologies}
            links={project.data.links}
          />
        ))}
      </div>

      <RevealDown as="span" className="m-auto">
        <Link href="/projetos" className="m-auto hover:underline">
          VER MAIS
        </Link>
      </RevealDown>
    </section>
  );
}
