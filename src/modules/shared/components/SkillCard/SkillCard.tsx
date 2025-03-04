import Image from "next/image";

type SkillCardProps = {
  icon?: string;
  name?: string;
  title?: string;
};

export function SkillCard({ icon, name, title }: SkillCardProps) {
  return (
    <div
      className="flex size-[9.2rem] flex-col items-center justify-center gap-1 rounded-sm p-1 shadow-sm backdrop-blur-xs"
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
  );
}
