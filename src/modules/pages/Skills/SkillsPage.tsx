import { IntroductoryTitle } from "@/modules/shared/components/IntroductoryTitle/IntroductoryTitle";
import { SkillCard } from "@/modules/shared/components/SkillCard/SkillCard";
import { getIcons } from "@/modules/shared/functions/getIcons";
import { getAllSkills } from "@/modules/shared/functions/getSkills";

export function SkillsPage() {
  const skills = getAllSkills();

  return (
    <section className="grid gap-10">
      <IntroductoryTitle
        title="Habilidades"
        description="Aqui você pode ver minhas habilidades"
      />

      <div className="grid gap-5">
        {skills.skills.map((category) => (
          <section key={category.category} className="grid gap-2">
            <h2 className="text-center text-xl font-bold sm:text-start">
              {category.category}
            </h2>

            <div className="scroll-sm grid grid-cols-[repeat(auto-fill,9.2rem)] justify-center gap-2 sm:justify-start">
              {category.sklls.map((skill) => (
                <SkillCard key={skill} icon={getIcons(skill)} name={skill} />
              ))}
            </div>
          </section>
        ))}
      </div>
    </section>
  );
}
