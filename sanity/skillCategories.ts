import { defineField, defineType } from "sanity";

export const skillCategories = defineType({
  name: "skill_categories",
  title: "Habilidades por categoria",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "skills",
      title: "Habilidades",
      type: "array",
      of: [{ type: "reference", to: [{ type: "skills" }] }],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "position",
      title: "Posição",
      type: "number",
      validation: (Rule) => Rule.required().min(0).max(100).integer(),
    }),
  ],
});
