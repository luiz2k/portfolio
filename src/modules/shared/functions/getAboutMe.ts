import fs from "fs";
import matter from "gray-matter";

type getAboutMeType = {
  aboutMe: string;
  mainSkills: string[];
  mainProjects: string[];
  mainServices: string[];
};

export const getAboutMe = (): getAboutMeType => {
  const pathAndFile = "portfolio/aboutMe/about-me.md"; // Pasta e arquivo que contém as informações

  const aboutMe = fs.readFileSync(pathAndFile, "utf-8");

  const matters = matter(aboutMe);

  return matters.data as getAboutMeType;
};
