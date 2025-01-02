import { getMainInformations } from "@/modules/shared/functions/getInformations";
import Markdown from "markdown-to-jsx";

export function AboutMe() {
  const mainInformations = getMainInformations();

  return (
    <section className="flex flex-col gap-2">
      <h2 className="m-auto text-xl font-bold sm:m-0">Sobre mim</h2>

      <Markdown>{mainInformations.content}</Markdown>

      <div></div>
    </section>
  );
}
