"use client";

import { usePathname } from "next/navigation";

type HeaderAnchorProps = {
  href: string;
  children: React.ReactNode;
};

export function NavigationAnchor({ href, children }: HeaderAnchorProps) {
  const pathname = usePathname();

  // Verifica se a página atual corresponde ao `href`
  const currentPage = pathname === href;

  return (
    <a
      href={href}
      data-currentpage={currentPage}
      className="text-black hover:text-accent data-[currentpage=true]:pointer-events-none data-[currentpage=true]:cursor-text data-[currentpage=true]:font-bold data-[currentpage=true]:text-accent"
    >
      {children}
    </a>
  );
}
