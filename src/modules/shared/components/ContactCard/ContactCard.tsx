import { ExternalLink, LucideProps } from "lucide-react";
import Link from "next/link";
import { PixelWrapper } from "./components/PixelWrapper/PixelWrapper";

type ContactCardProps = {
  icon: React.ComponentType<LucideProps>;
  title: string;
  description: string;
  href?: string;
};

export function ContactCard({
  icon: Icon,
  title,
  description,
  href,
}: ContactCardProps) {
  const className: string =
    "absolute flex size-[15.167rem] flex-col flex-wrap items-center justify-center gap-2 rounded-sm backdrop-blur-xs duration-200 hover:backdrop-blur-none";

  return (
    <>
      {href ? (
        <PixelWrapper>
          <Link
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className={className}
          >
            {Icon && (
              <Icon size="100" strokeWidth="1.5" className="text-accent" />
            )}

            <div className="grid place-items-center gap-1">
              {title && <p className="font-bold">{title}</p>}
              {description && <p>{description}</p>}
            </div>

            <ExternalLink className="absolute top-2 right-2" size="20" />
          </Link>
        </PixelWrapper>
      ) : (
        <PixelWrapper>
          <div className={className}>
            {Icon && (
              <Icon size="100" strokeWidth="1.5" className="text-accent" />
            )}

            <div className="grid place-items-center gap-1">
              {title && <p className="font-bold">{title}</p>}
              {description && <p>{description}</p>}
            </div>
          </div>
        </PixelWrapper>
      )}
    </>
  );
}
