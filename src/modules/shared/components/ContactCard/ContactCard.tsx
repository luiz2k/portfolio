import { LucideProps } from "lucide-react";

type ContactCardProps = {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
};

export function ContactCard({
  icon: Icon,
  title,
  description,
}: ContactCardProps) {
  return (
    <div className="flex size-[15.167rem] flex-col flex-wrap items-center justify-center gap-2 rounded shadow backdrop-blur-xs">
      {Icon && <Icon size="100" strokeWidth="1.5" className="text-accent" />}

      <div className="grid place-items-center gap-1">
        {title && <p className="font-bold">{title}</p>}
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
