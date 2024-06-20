import Image from "next/image";

import { SkillCardProps } from "./SkillCard.d";

export default function SkillCard({ title, imageUrl }: SkillCardProps) {
  return (
    <article
      title={title}
      className="flex size-32 flex-col items-center justify-center gap-1 rounded bg-color-3/15 p-2 text-center duration-150 ease-in-out hover:bg-color-3/10"
    >
      <Image
        src={imageUrl}
        alt={title}
        width={70}
        height={70}
        className="size-[4.375rem]"
      />
      <span>{title}</span>
    </article>
  );
}
