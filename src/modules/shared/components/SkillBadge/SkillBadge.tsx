import Image from "next/image";
import { tv, type VariantProps } from "tailwind-variants";

type BadgeType = VariantProps<typeof badgeTV>;

type SkillBadgeProps = BadgeType & {
  icon?: string;
  name?: string;
  title?: string;
};

const badgeTV = tv({
  base: "flex justify-center gap-1 rounded-sm p-1 shadow-sm backdrop-blur-xs h-fit",
  variants: {
    width: {
      fit: "w-fit",
      full: "w-full",
    },
  },
  defaultVariants: {
    width: "fit",
  },
});

export function SkillBadge({ icon, name, title, ...rest }: SkillBadgeProps) {
  return (
    <div className={badgeTV(rest)} title={title}>
      {icon && (
        <div className="size-6">
          <Image
            src={icon}
            width="24"
            height="24"
            alt={name || "Habilidade"}
            className="text-accent"
          />
        </div>
      )}

      {name && <p className="text-nowrap">{name}</p>}
    </div>
  );
}
