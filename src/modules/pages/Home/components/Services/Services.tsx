import { ProjectCard } from "@/modules/shared/components/ProjectCard/ProjectCard";
import { getMainServices } from "@/modules/shared/functions/getServices";
import Link from "next/link";

export function Services() {
  const services = getMainServices();

  return (
    <section className="grid gap-2">
      <h2 className="m-auto text-xl font-bold sm:m-0">Serviços</h2>

      <div className="grid gap-5">
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
      </div>

      <Link href="/servicos" className="m-auto hover:underline">
        VER MAIS
      </Link>
    </section>
  );
}
