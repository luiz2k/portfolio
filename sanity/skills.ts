import { defineField, defineType } from "sanity";

export const skills = defineType({
  name: "skills",
  title: "Habilidades",
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Habilidade",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Imagem",
      type: "image",
      options: {
        hotspot: true,
      },
      validation: (Rule) => Rule.required(),
    }),
  ],
});
