import fs from "fs";
import matter from "gray-matter";
import { getMainInformations } from "./getInformations";

type GetProjects = {
  content: string;
  data: {
    slug: string;
    title: string;
    image: string;
    technologies: string[];
    links: {
      sourceCode: string;
      demo: string;
      docs: string;
      figma: string;
    };
  };
}[];

// Obtém todos os serviços
export const getAllProjects = (): GetProjects => {
  const folder = "portfolio/projects";

  const fileNames = fs.readdirSync(folder);

  // Obtém o conteúdo dos arquivos
  const services = fileNames.map((fileName) => {
    const archive = folder + "/" + fileName;

    return fs.readFileSync(archive, "utf-8");
  });

  const matters = services.map((project) => matter(project));

  return matters as unknown as GetProjects;
};

// Obtém os serviços principais
export const getMainProjects = (): GetProjects => {
  const folder = "portfolio/projects";

  const fileNames = fs.readdirSync(folder);

  const mainServicesSlug = getMainInformations().mainProjects;

  // Filtrando os serviços principais
  const mainServices = fileNames.filter((fileName) => {
    const slug = fileName.split(".")[0];

    return mainServicesSlug.includes(slug);
  });

  // Obtém o conteúdo dos arquivos
  const services = mainServices.map((fileName) => {
    const archive = folder + "/" + fileName;

    return fs.readFileSync(archive);
  });

  const matters = services.map((project) => matter(project));

  return matters as unknown as GetProjects;
};
