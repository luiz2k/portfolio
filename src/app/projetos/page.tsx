import { ProjectsPage } from "@/modules/pages/Projects/ProjectsPage";
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
  openGraph: {
    url: "https://luiz2k.vercel.app/projetos",
    title: "Portfólio - Projetos",
  },
};

export default ProjectsPage;
