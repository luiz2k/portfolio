import { SkillsPage } from "@/modules/pages/Skills/SkillsPage";
import { setOpengraph } from "@/modules/shared/functions/setOpengraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio - Habilidades",
  keywords: [
    "habilidades",
    "javascript, typescript",
    "react",
    "nextjs",
    "tailwindcss",
    "nodejs",
  ],
  openGraph: setOpengraph({ title: "Início", pathname: "/habilidades" }),
};

export default SkillsPage;
