"use client";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

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
      className="hover:text-accent data-[currentpage=true]:text-accent text-black data-[currentpage=true]:pointer-events-none data-[currentpage=true]:cursor-text data-[currentpage=true]:font-bold"
      {...rest}
    >
      {children}
    </Link>
  );
}
