import Image from "next/image";
import { BadgeProps } from "./Badge.d";

export default function Badge({ title, imageUrl, children }: BadgeProps) {
  return (
    <article
      title={title}
      className="group relative inline-flex items-center gap-1 rounded bg-color-3/15 p-2 duration-150 ease-in-out hover:bg-color-3/10"
    >
      {imageUrl && (
        <Image key={title} src={imageUrl} alt={title} width={20} height={20} />
      )}

      {!children && (
        <span className="pointer-events-none invisible absolute -top-8 left-1/2 -translate-x-1/2 rounded bg-color-4 p-1 text-xs text-white opacity-0 duration-150 ease-in-out group-hover:visible group-hover:-top-6 group-hover:opacity-100 dark:bg-color-2 dark:text-black">
          {title}
          <span className="absolute -bottom-1 left-1/2 size-2 -translate-x-1/2 rotate-45 bg-color-4 dark:bg-color-2" />
        </span>
      )}

      {children}
    </article>
  );
}
