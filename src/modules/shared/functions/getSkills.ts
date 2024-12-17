import fs from "fs";
import matter from "gray-matter";

type GetSkills = {
  skills: {
    category: string;
    sklls: string[];
  }[];
};

// Obtém todas as habilidades
export const getAllSkills = (): GetSkills => {
  const pathAndFile = "portfolio/skills/skills.md";

  const aboutMe = fs.readFileSync(pathAndFile, "utf-8");

  const matters = matter(aboutMe);

  return matters.data as GetSkills;
};
