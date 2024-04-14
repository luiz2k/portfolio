import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

export default function useHeader() {
  const pathName: string = usePathname();

  const [openNav, setOpenNav] = useState<boolean>(false);

  useEffect(() => {
    if (!openNav) return;

    const documentEvent = (event: MouseEvent): void => {
      const target = event.target as HTMLElement | null;
      const nav = target?.closest("[data-nav]") as HTMLDivElement | null;

      const CLICK_ON_THE_NAV_OPTION: boolean | null = !(
        nav &&
        target?.tagName !== "A" &&
        !!!target?.closest("svg") &&
        !!!target?.closest("span")
      );

      // Fechar a barra de navegação apenas quando clicar em uma de suas opções, ou fora da barra de navegação.
      if (CLICK_ON_THE_NAV_OPTION) {
        setOpenNav((prev) => !prev);
      }
    };

    window.document.addEventListener("click", documentEvent);

    return () => window.document.removeEventListener("click", documentEvent);
  }, [openNav]);

  return { pathName, openNav, setOpenNav };
}
