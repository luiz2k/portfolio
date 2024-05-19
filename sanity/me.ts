import { defineField, defineType } from "sanity";

export const me = defineType({
  name: "me",
  title: "Eu",
  readOnly: true,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Nome",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "about_me",
      title: "Sobre-mim",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "location",
      title: "Localização",
      type: "string",
    }),
    defineField({
      name: "photograph",
      title: "Foto",
      type: "image",
      validation: (Rule) => Rule.required(),
    }),
  ],
});
