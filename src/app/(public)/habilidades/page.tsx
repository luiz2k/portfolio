import { getAllSkills } from "@/api/sanityServices";
import SkillCard from "@/components/SkillCard/SkillCard";

export default async function Skills() {
  const skills = await getAllSkills();

  return (
    <section className="space-y-24">
      <h1 className="flex flex-col text-center text-4xl font-bold text-color-3 sm:text-5xl md:text-6xl lg:text-7xl">
        Habilidades
      </h1>

      {skills.map((skill) => (
        <section key={skill.category} className="space-y-5">
          <h2 className="flex items-center justify-center gap-5 whitespace-nowrap text-center text-3xl font-semibold text-color-3 sm:text-4xl">
            {skill.category} <hr className="w-full" />
          </h2>

          <div className="ml-0 grid grid-cols-[repeat(auto-fill,8rem)] justify-center gap-5 md:ml-5 md:justify-normal">
            {skill.skills.map((technology) => (
              <SkillCard
                key={technology._id}
                title={technology.name}
                imageUrl={technology.imageUrl}
              />
            ))}
          </div>
        </section>
      ))}
    </section>
  );
}
