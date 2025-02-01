import { Metadata } from "next";

type SetOpengraph = {
  title: string;
  pathname?: string;
};

export const setOpengraph = ({ title, pathname }: SetOpengraph) => {
  return {
    title: `Portfólio - ${title}`,
    url: pathname
      ? `https://luiz2k.vercel.app${pathname}`
      : "https://luiz2k.vercel.app",
    type: "website",
    description:
      "Desenvolvedor Full Stack especializado em Next.js, Node.js e TypeScript. Confira meus projetos e habilidades no meu portfólio! 🚀",
    siteName: "Portfólio - Luiz Teles",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
      },
    ],
  } as Metadata["openGraph"];
};
