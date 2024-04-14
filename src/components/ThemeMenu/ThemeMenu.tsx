import useThemeMenu from "./useThemeMenu";

import {
  LuCircle,
  LuComputer,
  LuMoonStar,
  LuSun,
  LuSunMoon,
} from "react-icons/lu";

export default function ThemeMenu() {
  const { openMenu, setOpenMenu, setTheme } = useThemeMenu();

  return (
    <div className="relative z-10">
      <button
        onClick={() => setOpenMenu((prev) => !prev)}
        className="block rounded border border-color-3/10 p-1.5 duration-150 ease-in-out hover:bg-color-3/5"
      >
        <LuSunMoon size={20} />
      </button>

      <menu
        data-open={openMenu}
        className="invisible absolute right-1/2 top-0 mt-10 translate-x-1/2 translate-y-2 rounded border border-color-3/10 bg-color-1 p-1.5 opacity-0 duration-150 ease-in-out data-[open=true]:visible data-[open=true]:translate-y-0 data-[open=true]:opacity-100 dark:bg-color-5 md:bottom-0 md:top-auto md:mb-10 md:-translate-y-2"
      >
        <h2 className="text-sm text-color-3">
          <LuCircle className="inline" size={7} /> Temas
        </h2>

        <li>
          <button
            onClick={() => setTheme("light")}
            className="flex w-full items-center gap-1 rounded p-1 text-start duration-150 ease-in-out hover:bg-color-3/5"
          >
            <LuSun /> Claro
          </button>
        </li>
        <li>
          <button
            onClick={() => setTheme("dark")}
            className="flex w-full items-center gap-1 rounded p-1 text-start duration-150 ease-in-out hover:bg-color-3/5"
          >
            <LuMoonStar /> Escuro
          </button>
        </li>
        <li>
          <button
            onClick={() => setTheme("system")}
            className="flex w-full items-center gap-1 rounded p-1 text-start duration-150 ease-in-out hover:bg-color-3/5"
          >
            <LuComputer /> Sistema
          </button>
        </li>
      </menu>
    </div>
  );
}
