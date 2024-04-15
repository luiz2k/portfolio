import { ComponentProps } from "react";

export interface AnchorProps extends ComponentProps<"a"> {
  href: string;
  pathName?: string;
  leftIcon?: JSX.Element;
  rightIcon?: JSX.Element;
  children: string;
}
