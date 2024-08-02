import type { SchemaTypeDefinition } from "sanity";
import { me } from "./me";
import { projects } from "./projects";
import { skills } from "./skills";
import { skillCategories } from "./skillCategories";
import { contacts } from "./contacts";
import { projectCategories } from "./projectCategories";
import blockContent from "./blockContent";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [
    me,
    projects,
    projectCategories,
    skills,
    skillCategories,
    blockContent,
    contacts,
  ],
};
