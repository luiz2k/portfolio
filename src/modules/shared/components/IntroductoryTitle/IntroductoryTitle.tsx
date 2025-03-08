import { RevealUp } from "../animations/ReavelAnimations/ReavelAnimations";

type IntroductoryTitleProps = {
  title: string;
  description: string;
};

export function IntroductoryTitle({
  title,
  description,
}: IntroductoryTitleProps) {
  return (
    <RevealUp as="div" className="flex flex-col items-center gap-1">
      <h1 className="text-accent text-5xl font-bold">{title}</h1>
      <p className="text-center text-xl">{description}</p>
    </RevealUp>
  );
}
