import Image from "next/image";

export function Introductory() {
  return (
    <section className="flex flex-col items-center justify-center gap-5 md:flex-row md:justify-between">
      <div className="flex flex-col items-center md:items-stretch">
        <p className="text-xl">
          Olá, eu me chamo <strong>Luiz</strong>
        </p>

        <h1 className="flex flex-col items-center text-5xl font-bold text-accent md:items-stretch md:text-6xl">
          <span>Desenvolvedor</span>
          <span>Full Stack</span>
        </h1>
      </div>

      <Image
        src="/luiz-01.jpg"
        width={340}
        height={340}
        loading="eager"
        alt="Foto do desenvolvedor"
        className="size-60 rounded-full border-2 border-black object-cover"
      />
    </section>
  );
}
