import Header from '@/components/Header/Header';
import './globals.scss';
import type { Metadata } from 'next';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ subsets: ['latin'], weight: '400' });

export const metadata: Metadata = {
  title: 'Portfólio - Luiz Teles',
  description: '',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-br">
      <body className={roboto.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}
