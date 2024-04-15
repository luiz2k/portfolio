import { skillIcons } from "@/utils/icons";

import { BadgeProps } from "./Badge.d";

export default function Badge({ title, icon, children }: BadgeProps) {
  return (
    <article
      title={title}
      className="inline-flex items-center gap-1 rounded bg-color-3/15 p-2 duration-150 ease-in-out hover:bg-color-3/10"
    >
      <span className="text-2xl">{icon && skillIcons(icon)}</span> {children}
    </article>
  );
}
