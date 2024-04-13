import Link from "next/link";
import { ComponentProps } from "react";

interface AnchorProps extends ComponentProps<"a"> {
  href: string;
  pathName?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  children: string;
}

export default function Anchor({
  href,
  pathName,
  leftIcon,
  rightIcon,
  children,
  ...props
}: AnchorProps) {
  return (
    <Link
      href={href}
      data-path={pathName ? pathName === href : null}
      className="flex items-center justify-between rounded p-1.5 duration-150 ease-in-out hover:bg-color-3/5 data-[path=true]:cursor-default data-[path=true]:bg-color-3/10"
      {...props}
    >
      <span className="flex items-center gap-1">
        {leftIcon && leftIcon}
        {children}
      </span>

      {rightIcon && <span>{rightIcon}</span>}
    </Link>
  );
}
