import { skillIcons } from "@/utils/icons";

import { SkillCardProps } from "./SkillCard.d";

export default function SkillCard({ title, icon }: SkillCardProps) {
  return (
    <article
      title={title}
      className="flex size-32 flex-col items-center justify-center gap-1 rounded bg-color-3/15 p-2 text-center duration-150 ease-in-out hover:bg-color-3/10"
    >
      <span className="text-7xl">{skillIcons(icon)}</span>
      <span>{title}</span>
    </article>
  );
}
