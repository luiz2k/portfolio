import Markdown from "markdown-to-jsx";
import { ComponentProps } from "react";

type CustomMarkdownProps = Omit<ComponentProps<typeof Markdown>, "options">;

export function RenderMarkdown({ children, ...props }: CustomMarkdownProps) {
  return (
    <Markdown
      options={{
        overrides: {
          strong: {
            component: "strong",
            props: { className: "font-medium" },
          },
        },
      }}
      {...props}
    >
      {children}
    </Markdown>
  );
}
