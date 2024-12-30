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
      "Tenho 24 anos, sou um desenvolvedor full stack com foco em Next.JS e Node.JS, graduado em analise e desenvolvimento de sistemas, atualmente em busca de entrar na carreira de desenvolvimento.",
    siteName: "Portfólio - Luiz Teles",
    images: [
      {
        url: "/opengraph.png",
        width: 1200,
        height: 630,
      },
    ],
  };
};
