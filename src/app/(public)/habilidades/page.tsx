import SkillCard from "@/components/SkillCard/SkillCard";
import getPortfolioData from "@/services/portfolioData";

export default async function Skills() {
  const data = await getPortfolioData();

  return (
    <section className="space-y-24">
      <h1 className="flex flex-col text-center text-4xl font-bold text-color-3 sm:text-5xl md:text-6xl lg:text-7xl">
        Habilidades
      </h1>

      <section className="space-y-5">
        <h2 className="flex items-center justify-center gap-5 whitespace-nowrap text-center text-3xl font-semibold text-color-3 sm:text-4xl">
          Front-End <hr className="w-full" />
        </h2>

        <section className="ml-0 grid grid-cols-[repeat(auto-fill,8rem)] justify-center gap-5 md:ml-5 md:justify-normal">
          {data.skills.front_end.map((skill) => (
            <SkillCard key={skill} title={skill} icon={skill} />
          ))}
        </section>
      </section>

      <section className="space-y-5">
        <h2 className="flex items-center justify-center gap-5 whitespace-nowrap text-center text-3xl font-semibold text-color-3 sm:text-4xl">
          Back-End <hr className="w-full" />
        </h2>

        <section className="ml-0 grid grid-cols-[repeat(auto-fill,8rem)] justify-center gap-10 md:ml-5 md:justify-normal">
          {data.skills.back_end.map((skill) => (
            <SkillCard key={skill} title={skill} icon={skill} />
          ))}
        </section>
      </section>

      <section className="space-y-5">
        <h2 className="flex items-center justify-center gap-5 whitespace-nowrap text-center text-3xl font-semibold text-color-3 sm:text-4xl">
          Banco de Dados <hr className="w-full" />
        </h2>

        <section className="ml-0 grid grid-cols-[repeat(auto-fill,8rem)] justify-center gap-10 md:ml-5 md:justify-normal">
          {data.skills.database.map((skill) => (
            <SkillCard key={skill} title={skill} icon={skill} />
          ))}
        </section>
      </section>

      <section className="space-y-5">
        <h2 className="flex items-center justify-center gap-5 whitespace-nowrap text-center text-3xl font-semibold text-color-3 sm:text-4xl">
          Formatação <hr className="w-full" />
        </h2>

        <section className="ml-0 grid grid-cols-[repeat(auto-fill,8rem)] justify-center gap-10 md:ml-5 md:justify-normal">
          {data.skills.lint.map((skill) => (
            <SkillCard key={skill} title={skill} icon={skill} />
          ))}
        </section>
      </section>
    </section>
  );
}
