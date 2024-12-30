import { ProjectsPage } from "@/modules/pages/Projects/ProjectsPage";
import { setOpengraph } from "@/modules/shared/functions/setOpengraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio - Projetos",
  keywords: [
    "projetos",
    "projetos pessoais",
    "javascript",
    "typescript",
    "react",
    "nextjs",
  ],
  openGraph: setOpengraph({ title: "Início", pathname: "/projetos" }),
};

export default ProjectsPage;
