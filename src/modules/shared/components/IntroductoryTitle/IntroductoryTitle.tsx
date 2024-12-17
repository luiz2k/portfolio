type IntroductoryTitleProps = {
  title: string;
  description: string;
};

export function IntroductoryTitle({
  title,
  description,
}: IntroductoryTitleProps) {
  return (
    <div className="flex flex-col items-center gap-1">
      <h1 className="text-5xl font-bold text-accent">{title}</h1>
      <p className="text-center text-xl">{description}</p>
    </div>
  );
}
