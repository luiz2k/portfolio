import { ProjectCard } from "@/modules/shared/components/ProjectCard/ProjectCard";
import { getMainProjects } from "@/modules/shared/functions/getProjects";
import Link from "next/link";

export function Projects() {
  const projects = getMainProjects();

  return (
    <section className="grid gap-2">
      <h2 className="m-auto text-xl font-bold sm:m-0">Projetos pessoais</h2>

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

      <Link href="/projetos" className="m-auto hover:underline">
        VER MAIS
      </Link>
    </section>
  );
}
