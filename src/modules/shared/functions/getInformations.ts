import fs from "fs";
import matter from "gray-matter";

type GetInformations = {
  content: string;
  data: {
    aboutMe: string;
    mainSkills: string[];
    mainProjects: string[];
    mainServices: string[];
  };
};

// Obtém as informações principais
export const getMainInformations = (): GetInformations => {
  const pathAndFile = "portfolio/mainInformations/main-informations.md"; // Pasta e arquivo que contém as informações

  const aboutMe = fs.readFileSync(pathAndFile, "utf-8");

  const matters = matter(aboutMe);

  return matters as unknown as GetInformations;
};
