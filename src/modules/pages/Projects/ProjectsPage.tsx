import { IntroductoryTitle } from "@/modules/shared/components/IntroductoryTitle/IntroductoryTitle";
import { ProjectCard } from "@/modules/shared/components/ProjectCard/ProjectCard";
import { getAllProjects } from "@/modules/shared/functions/getProjects";

export function ProjectsPage() {
  const projects = getAllProjects();

  return (
    <section className="grid gap-10">
      <IntroductoryTitle
        title="Projetos"
        description="Alguns dos meus projetos pessoais"
      />

      <section className="grid gap-5">
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
      </section>
    </section>
  );
}
