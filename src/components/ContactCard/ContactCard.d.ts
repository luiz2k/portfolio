import { ComponentProps } from "react";

export interface ContactCardProps extends ComponentProps<"article"> {
  icon: string;
  description: string;
}
