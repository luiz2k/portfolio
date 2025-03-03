import { Footer } from "@/modules/shared/components/Footer/Footer";
import { Header } from "@/modules/shared/components/Header/Header";
import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "@/styles/globals.css";

export const metadata: Metadata = {
  description:
    "Tenho 24 anos, sou um desenvolvedor full stack com foco em Next.JS e Node.JS, graduado em analise e desenvolvimento de sistemas, atualmente em busca de entrar na carreira de desenvolvimento.",
};

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="pt-BR"
      className="bg-white after:fixed after:left-0 after:top-0 after:-z-10 after:h-full after:w-full after:bg-[url('/grid.webp')] after:opacity-[5%] after:content-['']"
    >
      <body className={roboto.className}>
        <Header />

        <div className="mx-3.5 min-h-screen pb-10 pt-[7.688rem]">
          <main className="m-auto max-w-3xl">{children}</main>
        </div>

        <Footer />
      </body>
    </html>
  );
}
