import { LuExternalLink } from "react-icons/lu";

import Image from "next/image";
import { ContactCardProps } from "./ContactCard.d";

export default function ContactCard({
  title,
  description,
  imageUrl,
}: ContactCardProps) {
  return (
    <article
      title={title}
      className="relative flex size-60 flex-col items-center justify-center gap-1 rounded bg-color-3/15 p-2 text-center duration-200 ease-in-out hover:bg-color-3/10"
    >
      <div className="text-9xl">
        <Image alt={title} src={imageUrl} width={128} height={128} />
      </div>

      <div>
        <h3 className="text-lg font-medium">{title}</h3>

        <p>{description}</p>
      </div>

      {description[0] === "@" && (
        <LuExternalLink className="absolute right-2 top-2" />
      )}

      {/* {description[0] !== "@" && <LuCopy className="absolute right-2 top-2" />} */}
    </article>
  );
}
