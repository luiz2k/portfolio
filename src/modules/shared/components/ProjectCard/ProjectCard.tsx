import Image from "next/image";
import Link from "next/link";
import { getIcons } from "../../functions/getIcons";
import { RenderMarkdown } from "../RenderMarkdown/RenderMarkdown";
import { SkillBadge } from "../SkillBadge/SkillBadge";

type ProjectCardProps = {
  title: string;
  image: string;
  description: string;
  technologies: string[];
  links: {
    sourceCode?: string;
    demo?: string;
    docs?: string;
    figma?: string;
  };
};

export function ProjectCard({
  title,
  image,
  description,
  technologies,
  links,
}: ProjectCardProps) {
  return (
    <div className="grid w-full max-w-3xl gap-4 rounded-lg p-4 shadow backdrop-blur-xs">
      <div className="grid gap-4 sm:grid-cols-2">
        <Image
          src={image}
          width={360}
          height={203.38}
          alt={title}
          className="size-full h-[12.711rem] w-[22.5rem] border object-cover"
        />

        <div className="grid gap-2">
          <h3 className="m-auto text-lg font-semibold sm:m-0">{title}</h3>

          <hr className="border-1 border-black/10" />

          <RenderMarkdown className="scroll-md h-[6.031rem] overflow-auto pr-2">
            {description}
          </RenderMarkdown>

          <hr className="border-1 border-black/10" />

          <div className="flex gap-2">
            {technologies.map((technologie) => (
              <SkillBadge
                key={technologie}
                icon={getIcons(technologie)}
                title={technologie}
              />
            ))}
          </div>

          <hr className="border-1 border-black/10" />
        </div>
      </div>

      <div className="flex flex-wrap justify-center gap-2">
        {links?.sourceCode && (
          <Link
            href={links.sourceCode}
            target="_blank"
            className="hover:underline"
          >
            Código-fonte
          </Link>
        )}

        {links?.demo && (
          <Link href={links.demo} target="_blank" className="hover:underline">
            Demonstração
          </Link>
        )}

        {links?.docs && (
          <Link href={links.docs} target="_blank" className="hover:underline">
            Documentação
          </Link>
        )}

        {links?.figma && (
          <Link href={links.figma} target="_blank" className="hover:underline">
            Figma
          </Link>
        )}
      </div>
    </div>
  );
}
