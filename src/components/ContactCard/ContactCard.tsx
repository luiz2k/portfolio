import { contactIcons } from "@/utils/icons/icons";

import { LuCopy, LuExternalLink } from "react-icons/lu";

import { ContactCardProps } from "./ContactCard.d";

export default function ContactCard({
  icon,
  description,
  ...props
}: ContactCardProps) {
  return (
    <article
      className="relative flex size-60 flex-col items-center justify-center gap-1 rounded bg-color-3/15 p-2 text-center duration-200 ease-in-out hover:bg-color-3/10"
      {...props}
    >
      <div className="text-9xl">{contactIcons(icon)}</div>

      <div>
        <h3 className="text-lg font-medium">{icon}</h3>

        <p>{description}</p>
      </div>

      {description[0] === "@" && (
        <LuExternalLink className="absolute right-2 top-2" />
      )}

      {description[0] !== "@" && <LuCopy className="absolute right-2 top-2" />}
    </article>
  );
}
