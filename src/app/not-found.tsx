import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Portfólio - Não Encontrado",
  description: "Página não encontrada",
};

export default function NotFound() {
  return (
    <section className="flex min-h-screen flex-col items-center justify-center font-bold uppercase">
      <p className="text-2xl">404</p>
      <h1 className="text-[2rem]">Não encontrado</h1>

      <Link
        href="/"
        className="text-accent hover:bg-accent/10 rounded-sm px-4 py-2 text-[2rem] duration-200 hover:drop-shadow-xl"
      >
        Voltar
      </Link>
    </section>
  );
}
