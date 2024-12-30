import { HomePage } from "@/modules/pages/Home/HomePage";
import { setOpengraph } from "@/modules/shared/functions/setOpengraph";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Portfólio - Início",
  keywords: [
    "portfolio",
    "sobre mim",
    "luiz",
    "teles",
    "luiz teles",
    "luiz2k",
    "luiz2k cv",
    "projetos",
    "habilidades",
    "figma",
    "analise e desenvolvimento de sistemas",
    "frontend",
    "backend",
    "fullstack",
  ],
  openGraph: setOpengraph({ title: "Início" }),
};

export default HomePage;
