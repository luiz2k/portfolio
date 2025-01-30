import fs from "fs";
import matter from "gray-matter";

type GetSummary = {
  content: string;
  data: {
    aboutMe: string;
    mainSkills: string[];
    mainProjects: string[];
    mainServices: string[];
  };
};

// Obtém as informações principais
export const getSummary = (): GetSummary => {
  const pathAndFile = "portfolio/summary/summary.md"; // Pasta e arquivo que contém as informações

  const archive = fs.readFileSync(pathAndFile, "utf-8");

  const matters = matter(archive);

  return matters as unknown as GetSummary;
};
