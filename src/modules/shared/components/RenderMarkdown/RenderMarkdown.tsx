import Markdown from "markdown-to-jsx";
import { ComponentProps } from "react";

type CustomMarkdownProps = Omit<ComponentProps<typeof Markdown>, "options">;

export function RenderMarkdown({ children, ...props }: CustomMarkdownProps) {
  return (
    <Markdown
      options={{
        overrides: {
          strong: { component: "strong", props: { className: "font-medium" } },
          ul: { component: "ul", props: { className: "list-disc pl-5" } },
        },
      }}
      {...props}
    >
      {children}
    </Markdown>
  );
}
