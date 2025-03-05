"use client";

import { GirdImage } from "./components/GirdImage/GirdImage";

export function Introductory() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between">
      <div className="flex flex-col items-center md:items-stretch">
        <p className="text-xl">
          Olá, eu me chamo <strong>Luiz</strong>
        </p>

        <h1 className="text-accent flex flex-col items-center text-5xl font-bold md:items-stretch md:text-6xl">
          <span>Desenvolvedor</span>
          <span>Full Stack</span>
        </h1>
      </div>

      <GirdImage />
    </section>
  );
}
