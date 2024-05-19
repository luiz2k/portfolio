import { defineField, defineType } from "sanity";

export const projects = defineType({
  name: "projects",
  title: "Projetos",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Título",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "description",
      title: "Descrição",
      type: "blockContent",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "image",
      title: "Imagem",
      type: "image",
      validation: (Rule) => Rule.required(),
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: "main_project",
      title: "Projeto principal?",
      type: "string",
      options: {
        list: [
          { title: "Sim", value: "true" },
          { title: "Não", value: "false" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "technologies",
      title: "Tecnologias",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "front_end",
          title: "Front-end",
          type: "array",
          of: [{ type: "reference", to: [{ type: "skills" }] }],
        },
        {
          name: "back_end",
          title: "Back-end",
          type: "array",
          of: [{ type: "reference", to: [{ type: "skills" }] }],
        },
      ],
    }),
    defineField({
      name: "links",
      title: "Links de acesso",
      type: "object",
      validation: (Rule) => Rule.required(),
      fields: [
        {
          name: "source_code",
          title: "Código Fonte",
          type: "object",
          fields: [
            {
              name: "front_end",
              title: "Código fonte do front-end",
              type: "url",
            },
            {
              name: "back_end",
              title: "Código fonte do back-end",
              type: "url",
            },
          ],
        },
        {
          name: "visit",
          title: "Acesso",
          type: "object",
          fields: [
            {
              name: "demo",
              title: "Demonstração",
              type: "url",
            },
            {
              name: "documentation",
              title: "Documentação",
              type: "url",
            },
          ],
        },
      ],
    }),
  ],
});
