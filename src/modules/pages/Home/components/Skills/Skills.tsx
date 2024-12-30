import { SkillBadge } from "@/modules/shared/components/SkillBadge/SkillBadge";
import { getMainInformations } from "@/modules/shared/functions/getInformations";
import { getIcons } from "@/modules/shared/functions/getIcons";
import Link from "next/link";

export function Skills() {
  const aboutMe = getMainInformations();

  return (
    <section className="grid gap-2">
      <h2 className="m-auto text-xl font-bold sm:m-0">Habilidades</h2>

      <div className="scroll-sm flex gap-2 overflow-auto pb-1">
        {aboutMe.mainSkills.map((skill) => (
          <SkillBadge
            key={skill}
            icon={getIcons(skill)}
            name={skill}
            width="full"
          />
        ))}
      </div>

      <Link
        href="/habilidades"
        className="m-auto hover:underline sm:ml-auto sm:mr-0"
      >
        VER MAIS
      </Link>
    </section>
  );
}
