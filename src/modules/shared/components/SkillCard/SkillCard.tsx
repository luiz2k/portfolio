import Image from "next/image";

type SkillCardProps = {
  icon?: string;
  name?: string;
};

export function SkillCard({ icon, name }: SkillCardProps) {
  return (
    <div className="flex size-[9.2rem] flex-col items-center justify-center gap-1 rounded p-1 shadow backdrop-blur-xs">
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
  );
}
