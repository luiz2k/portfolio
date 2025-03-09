import { Footer } from "@/modules/shared/components/Footer/Footer";
import { Header } from "@/modules/shared/components/Header/Header";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />

      <div className="mx-3.5 min-h-screen pt-[7.375rem] pb-10">
        <main className="m-auto max-w-3xl">{children}</main>
      </div>

      <Footer />
    </>
  );
}
