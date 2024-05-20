import Image from "next/image";
import { BadgeProps } from "./Badge.d";

export default function Badge({ title, imageUrl, children }: BadgeProps) {
  return (
    <article
      title={title}
      className="inline-flex items-center gap-1 rounded bg-color-3/15 p-2 duration-150 ease-in-out hover:bg-color-3/10"
    >
      {imageUrl && (
        <Image key={title} src={imageUrl} alt={title} width={20} height={20} />
      )}

      {children}
    </article>
  );
}
