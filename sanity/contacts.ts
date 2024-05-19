import { defineField, defineType } from "sanity";

export const contacts = defineType({
  name: "contacts",
  title: "Contatos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição",
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
    defineField({
      name: "has_url",
      title: "Possui URL?",
      type: "boolean",
    }),
    defineField({
      name: "url",
      title: "URL",
      type: "url",
      hidden: ({ document }) => !document?.has_url,
      validation: (Rule) =>
        Rule.custom((url, { document }) =>
          document?.has_url && !url ? "Required" : true,
        ),
    }),
  ],
});
