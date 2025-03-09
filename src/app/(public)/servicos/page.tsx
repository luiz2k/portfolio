import { ServicesPage } from "@/modules/pages/Services/ServicesPage";
import { setOpengraph } from "@/modules/shared/functions/setOpengraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio - Serviços",
  keywords: [
    "serviços",
    "trabalhos",
    "freelancer",
    "javascript",
    "typescript",
    "react",
    "nextjs",
    "figma",
  ],
  openGraph: setOpengraph({ title: "Início", pathname: "/servicos" }),
};

export default ServicesPage;
