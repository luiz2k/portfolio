import { type SchemaTypeDefinition } from "sanity";
import { me } from "./me";
import { projects } from "./projects";
import { skills } from "./skills";
import { skillCategories } from "./skillCategories";
import blockContent from "./blockContent";
import { contacts } from "./contacts";

export const schema: { types: SchemaTypeDefinition[] } = {
  types: [me, projects, skills, skillCategories, blockContent, contacts],
};
