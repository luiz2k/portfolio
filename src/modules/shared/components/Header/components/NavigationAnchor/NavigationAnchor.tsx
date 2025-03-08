"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { twMerge } from "tailwind-merge";

type HeaderAnchorProps = React.ComponentProps<typeof Link> & {
  href: string;
  children: React.ReactNode;
};

export function NavigationAnchor({
  href,
  children,
  ref,
  ...rest
}: HeaderAnchorProps) {
  const pathname = usePathname();
  const router = useRouter();

  // Verifica se a página atual corresponde ao `href`
  const currentPage = pathname === href;

  return (
    <Link
      href={href}
      data-currentpage={currentPage}
      onMouseEnter={() => router.prefetch(href)} // Precarrega a página
      ref={ref} // Passa o ref para o Link
      className={twMerge(
        "hover:text-accent",
        currentPage && "text-accent pointer-events-none cursor-text font-bold",
      )}
      {...rest}
    >
      {children}
    </Link>
  );
}
