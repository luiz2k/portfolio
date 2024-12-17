import Image from "next/image";

type SkillCardProps = {
  icon?: string;
  title?: string;
};

export function SkillCard({ icon, title }: SkillCardProps) {
  return (
    <div className="flex size-[9.2rem] flex-col items-center justify-center gap-1 rounded p-1 shadow backdrop-blur-xs">
      {icon && (
        <Image
          src={icon}
          width="75"
          height="75"
          alt={title || "Habilidade"}
          className="text-accent"
        />
      )}

      {title && <p>{title}</p>}
    </div>
  );
}
