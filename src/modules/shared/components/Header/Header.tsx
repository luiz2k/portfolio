"use client";

import { Menu } from "lucide-react";
import { useState } from "react";
import { Navigation } from "./components/Navigation/Navigation";
import { Socials } from "./components/Socials/Socials";

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const handleNavigation = () => {
    setIsOpen((prev) => !prev);

    if (!isOpen) {
      window.document.body.style.overflow = "hidden";
    } else {
      window.document.body.style.overflow = "";
    }
  };

  return (
    <div
      data-open={isOpen}
      className={`fixed top-5 left-1/2 z-10 w-full -translate-x-1/2 px-3.5 ${isOpen && "bottom-5"}`}
    >
      <header className="m-auto flex h-full w-full max-w-3xl flex-col-reverse justify-between gap-5 rounded-2xl p-5 shadow-sm backdrop-blur-lg sm:flex-row">
        {/* Navegação no mobile */}
        {isOpen && (
          <div className="h-full sm:hidden">
            <hr className="sm:hidden" />

            <Navigation />
          </div>
        )}

        {/* Navegação no desktop */}
        <div className="hidden sm:block">
          <Navigation />
        </div>

        <div className="flex w-full justify-between sm:w-fit">
          <Socials />

          {/* Abrir/Fechar a barra de navegação no mobile */}
          <button
            type="button"
            onClick={handleNavigation}
            aria-label="Navegação"
            className="hover:text-accent sm:hidden"
          >
            <Menu strokeWidth="1.5" />
          </button>
        </div>
      </header>
    </div>
  );
}
