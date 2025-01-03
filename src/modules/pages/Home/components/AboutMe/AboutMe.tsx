import { RenderMarkdown } from "@/modules/shared/components/RenderMarkdown/RenderMarkdown";
import { getMainInformations } from "@/modules/shared/functions/getInformations";

export function AboutMe() {
  const mainInformations = getMainInformations();

  return (
    <section className="flex flex-col gap-2">
      <h2 className="m-auto text-xl font-bold sm:m-0">Sobre mim</h2>

      <RenderMarkdown>{mainInformations.content}</RenderMarkdown>
    </section>
  );
}
