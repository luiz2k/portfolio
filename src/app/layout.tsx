import type { Metadata } from "next";
import { Poppins } from "next/font/google";

import Header from "@/components/Header/Header";

import ThemeProvider from "@/providers/ThemeProvider";

import "@/styles/globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const metadata: Metadata = {
  title: "Portfólio - Luiz Teles",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={poppins.className}>
        <ThemeProvider>
          <div className="bg-color-1 bg-[url('/noise.webp')] text-black dark:bg-color-5 dark:text-white">
            <Header />
            <main className="mt-[4.688rem] px-5 py-16 md:ml-60 md:mt-0">
              <div className="m-auto max-w-4xl">{children}</div>
            </main>
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
