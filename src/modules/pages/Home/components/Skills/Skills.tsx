import { SkillBadge } from "@/modules/shared/components/SkillBadge/SkillBadge";
import { getIcons } from "@/modules/shared/functions/getIcons";
import { getSummary } from "@/modules/shared/functions/getSummary";
import Link from "next/link";
import Marquee from "react-fast-marquee";

export function Skills() {
  const aboutMe = getSummary();

  return (
    <section className="grid gap-2">
      <h2 className="m-auto text-xl font-bold sm:m-0">Habilidades</h2>

      <Marquee
        pauseOnHover
        autoFill
        gradient
        gradientColor="#f3f4f6"
        className="pb-1"
      >
        {aboutMe.data.mainSkills.map((skill) => (
          <div key={skill} className="px-1">
            <SkillBadge icon={getIcons(skill)} name={skill} width="full" />
          </div>
        ))}
      </Marquee>

      <Link
        href="/habilidades"
        className="m-auto hover:underline sm:mr-0 sm:ml-auto"
      >
        VER MAIS
      </Link>
    </section>
  );
}
