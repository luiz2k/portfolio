import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export default function useThemeMenu() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  const { setTheme } = useTheme();

  useEffect(() => {
    if (!openMenu) return;

    const documentEvent = (event: MouseEvent): void => {
      const target = event.target as HTMLElement | null;
      const menu = target?.closest("[data-open]") as HTMLMenuElement | null;

      const CLICK_ON_THE_MENU_OPTION: boolean | null = !(
        menu &&
        target?.tagName !== "BUTTON" &&
        !!!target?.closest("svg")
      );

      // Fechar o menu de temas apenas quando clicar em uma de suas opções, ou fora do menu.
      if (CLICK_ON_THE_MENU_OPTION) {
        setOpenMenu((prev) => !prev);
      }
    };

    window.document.addEventListener("click", documentEvent);

    return () => window.document.removeEventListener("click", documentEvent);
  }, [openMenu]);

  return {
    openMenu,
    setOpenMenu,
    setTheme,
  };
}
