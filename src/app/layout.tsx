import { Inter } from "next/font/google";
import "./globals.css";
import { PrismicPreview } from '@prismicio/next'
import { repositoryName } from '@/prismicio'

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
    <body>
      {children}
      <PrismicPreview repositoryName={repositoryName} />
    </body>
  </html>
  );
}
