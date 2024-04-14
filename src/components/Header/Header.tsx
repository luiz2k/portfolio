"use client";

import ThemeMenu from "../ThemeMenu/ThemeMenu";
import Anchor from "../Anchor/Anchor";

import useHeader from "./useHeader";

import {
  LuBookOpenCheck,
  LuBrain,
  LuCircle,
  LuExternalLink,
  LuGithub,
  LuLinkedin,
  LuMenu,
  LuSmartphone,
  LuUser,
} from "react-icons/lu";

export default function Header() {
  const { pathName, openNav, setOpenNav } = useHeader();

  return (
    <header className="fixed inset-x-0 top-0 z-10 flex items-center justify-end gap-5 border-b border-color-3/10 bg-color-1 p-5 text-lg dark:bg-color-5 md:block md:h-screen md:w-60 md:border-b-0 md:border-r">
      <ul className="flex gap-1 md:absolute md:bottom-5 md:right-5">
        <li>
          <ThemeMenu />
        </li>

        <li className="md:hidden">
          <button
            onClick={() => setOpenNav((prev) => !prev)}
            className="block rounded border border-color-3/10 p-1.5 duration-150 ease-in-out hover:bg-color-3/5"
          >
            <LuMenu size={20} />
          </button>
        </li>
      </ul>

      <div
        data-nav={openNav}
        className="fixed inset-x-0 top-[4.688rem] h-0 overflow-hidden border-color-3/10 bg-color-1 duration-150 ease-in-out data-[nav=true]:h-[22.25rem] data-[nav=true]:border-b dark:bg-color-5 md:static md:h-fit md:data-[nav=true]:border-b-0"
      >
        <div className="flex flex-col gap-5 p-5 md:p-0">
          <div>
            <h2 className="mb-1 text-sm text-color-3">
              <LuCircle className="inline" size={7} /> Navegação
            </h2>

            <nav>
              <ul className="space-y-1 pl-5">
                <li>
                  <Anchor href="/" pathName={pathName} leftIcon={<LuUser />}>
                    Sobre Mim
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    href="/habilidades"
                    pathName={pathName}
                    leftIcon={<LuBrain />}
                  >
                    Habilidades
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    href="/projetos"
                    pathName={pathName}
                    leftIcon={<LuBookOpenCheck />}
                  >
                    Projetos
                  </Anchor>
                </li>
                <li>
                  <Anchor
                    href="/contatos"
                    pathName={pathName}
                    leftIcon={<LuSmartphone />}
                  >
                    Contatos
                  </Anchor>
                </li>
              </ul>
            </nav>
          </div>

          <div>
            <h2 className="mb-1 text-sm text-color-3">
              <LuCircle className="inline" size={7} /> Redes
            </h2>

            <ul className="space-y-1 pl-5">
              <li>
                <Anchor
                  href="https://github.com/luiz2k"
                  target="_blank"
                  leftIcon={<LuGithub />}
                  rightIcon={<LuExternalLink />}
                >
                  GitHub
                </Anchor>
              </li>
              <li>
                <Anchor
                  href="https://www.linkedin.com/in/luiz2k"
                  target="_blank"
                  leftIcon={<LuLinkedin />}
                  rightIcon={<LuExternalLink />}
                >
                  LinkedIn
                </Anchor>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
}
