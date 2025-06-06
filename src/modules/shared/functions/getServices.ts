import fs from "fs";
import matter from "gray-matter";
import { getSummary } from "./getSummary";

type GetServices = {
  content: string;
  data: {
    id: number;
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
export const getAllServices = (): GetServices => {
  const folder = "portfolio/services";

  // Obtém o nome de todos os arquivos na pasta
  const fileNames = fs.readdirSync(folder);

  // Obtém o conteúdo dos arquivos
  const services = fileNames.map((fileName) => {
    // Caminho exato do arquivo
    const archive = folder + "/" + fileName;

    // Lê o arquivo e retorna seu conteúdo
    return fs.readFileSync(archive, "utf-8");
  });

  // Formata o conteúdo do arquivo com o `gray-matter`
  const matters = services.map((project) => matter(project));

  // Ordena pelo ID
  matters.sort((a, b) => a.data.id - b.data.id);

  return matters as unknown as GetServices;
};

// Obtém os serviços principais
export const getMainServices = (): GetServices => {
  const folder = "portfolio/services";

  const fileNames = fs.readdirSync(folder);

  const mainServicesSlug = getSummary().data.mainServices;

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

  return matters as unknown as GetServices;
};
