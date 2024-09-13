import { defineArrayMember, defineType } from "sanity";

export default defineType({
  title: "Block Content",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      title: "Block",
      type: "block",
      marks: {
        decorators: [{ title: "Strong", value: "strong" }],
        annotations: [
          {
            title: "URL",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
              },
              {
                title: "Target",
                name: "target",
                type: "string",
                options: {
                  list: [
                    { title: "Self", value: "_self" },
                    { title: "Blank", value: "_blank" },
                  ],
                },
                initialValue: "_self",
              },
            ],
          },
        ],
      },
      lists: [],
      styles: [{ title: "Heading 4", value: "h4" }],
    }),
  ],
});
