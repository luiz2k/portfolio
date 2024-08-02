import { defineField, defineType } from "sanity";

export const projectCategories = defineType({
  name: "project_categories",
  title: "Projetos por categoria",
  type: "document",
  fields: [
    defineField({
      name: "category",
      title: "Categoria",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "projects",
      title: "Projetos",
      type: "array",
      of: [{ type: "reference", to: [{ type: "projects" }] }],
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
