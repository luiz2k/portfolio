import Image from "next/image";
import { SpotlightWrapper } from "./components/SpotlightWrapper/SpotlightWrapper";

type SkillCardProps = {
  icon?: string;
  name?: string;
  title?: string;
};

export function SkillCard({ icon, name, title }: SkillCardProps) {
  return (
    <SpotlightWrapper>
      <div
        className="flex size-[9.2rem] flex-col items-center justify-center gap-1 p-1 backdrop-blur-xs"
        title={title}
      >
        {icon && (
          <Image
            src={icon}
            width="75"
            height="75"
            alt={name || "Habilidade"}
            className="text-accent"
          />
        )}

        {name && <p>{name}</p>}
      </div>
    </SpotlightWrapper>
  );
}
