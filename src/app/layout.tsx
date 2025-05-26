import type { Metadata } from 'next';
import localFont from 'next/font/local';
import './globals.css';

const okomito = localFont({
  src: '../../public/Okomito-Medium.ttf',
});

export const metadata: Metadata = {
  title: 'Creative Beauty - By Robson Souza',
  description:
    'Transforme seu visual com os especialistas em loiros da Creative Beauty. Cabelos platinados, mechas, luzes e tratamentos personalizados para realçar sua beleza com sofisticação. Agende já!',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${okomito.className} ${okomito.style.fontFamily} antialiased`}>{children}</body>
    </html>
  );
}
