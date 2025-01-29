import { Figma, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="bg-accent px-3.5 py-5">
      <div className="m-auto flex max-w-3xl flex-col items-center justify-between gap-5 sm:flex-row">
        <div className="grid gap-2">
          <h2 className="font-bold text-white">Sobre o Portfólio</h2>

          <ul className="flex flex-col items-center gap-1 sm:items-stretch">
            <li>
              <span className="flex gap-1 text-white">
                <Github size="24" strokeWidth="1.5" />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://github.com/luiz2k/portfolio"
                  className="hover:underline"
                >
                  Código-fonte
                </Link>
              </span>
            </li>

            <li>
              <span className="flex gap-1 text-white">
                <Figma size="24" strokeWidth="1.5" />
                <Link
                  target="_blank"
                  rel="noopener noreferrer"
                  href="https://www.figma.com/design/uBT2kkwWmCFddB8G0hXqbM/Portf%C3%B3lio?node-id=0-1&t=r4frP4C1ozmZA59S-1"
                  className="hover:underline"
                >
                  Figma
                </Link>
              </span>
            </li>
          </ul>
        </div>

        <Image
          src="/luiz-02.jpg"
          width={250}
          height={250}
          alt="Foto do desenvolvedor"
          className="h-[8.333rem] w-[6.25rem] rounded-full border-2 border-white"
        />
      </div>
    </footer>
  );
}
