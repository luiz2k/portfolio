import { IntroductoryTitle } from "@/modules/shared/components/IntroductoryTitle/IntroductoryTitle";
import { ProjectCard } from "@/modules/shared/components/ProjectCard/ProjectCard";
import { getAllServices } from "@/modules/shared/functions/getServices";

export function ServicesPage() {
  const services = getAllServices();

  return (
    <section className="grid gap-10">
      <IntroductoryTitle
        title="Serviços"
        description="Projetos reais desenvolvidos como freelancer"
      />

      <section className="grid gap-5">
        {services.map((service) => (
          <ProjectCard
            key={service.data.slug}
            title={service.data.title}
            image={service.data.image}
            description={service.content}
            technologies={service.data.technologies}
            links={service.data.links}
          />
        ))}
      </section>
    </section>
  );
}
