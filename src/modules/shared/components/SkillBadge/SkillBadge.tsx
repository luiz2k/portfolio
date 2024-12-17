import Image from "next/image";
import { tv, type VariantProps } from "tailwind-variants";

type BadgeType = VariantProps<typeof badgeTV>;

type SkillBadgeProps = BadgeType & {
  icon?: string;
  title?: string;
  ariaLabel?: string;
};

const badgeTV = tv({
  base: "flex justify-center gap-1 rounded p-1 shadow backdrop-blur-xs h-fit",
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

export function SkillBadge({ icon, title, ...rest }: SkillBadgeProps) {
  return (
    <div className={badgeTV(rest)}>
      {icon && (
        <div className="size-6">
          <Image
            src={icon}
            width="24"
            height="24"
            alt={title || "Habilidade"}
            className="text-accent"
          />
        </div>
      )}

      {title && <p className="text-nowrap">{title}</p>}
    </div>
  );
}
