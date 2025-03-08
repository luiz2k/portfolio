import {
  RevealDown,
  RevealUp,
} from "@/modules/shared/components/animations/ReavelAnimations/ReavelAnimations";
import { RenderMarkdown } from "@/modules/shared/components/RenderMarkdown/RenderMarkdown";
import { getSummary } from "@/modules/shared/functions/getSummary";

export function AboutMe() {
  const mainInformations = getSummary();

  return (
    <section className="flex flex-col gap-2">
      <RevealUp as="h2" className="m-auto text-xl font-bold sm:m-0">
        Sobre mim
      </RevealUp>

      <RevealDown as="div">
        <RenderMarkdown>{mainInformations.content}</RenderMarkdown>
      </RevealDown>
    </section>
  );
}
