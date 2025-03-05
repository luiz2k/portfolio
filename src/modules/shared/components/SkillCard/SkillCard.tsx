import Image from "next/image";
import { PixelWrapper } from "./components/PixelWrapper/PixelWrapper";

type SkillCardProps = {
  icon?: string;
  name?: string;
  title?: string;
};

export function SkillCard({ icon, name, title }: SkillCardProps) {
  return (
    <PixelWrapper>
      <div
        className="absolute flex size-[9.2rem] flex-col items-center justify-center gap-1 rounded-sm p-1 backdrop-blur-xs duration-200 hover:backdrop-blur-none"
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
    </PixelWrapper>
  );
}
