import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";


const poppins = Poppins({

  weight: ['300','400','500','600','700','800','900'],
  style: "normal",
  subsets: ['latin']
});

export const metadata: Metadata = {
  title: "Desafio Next.JS 2024.2",
  description: "Desafio Next.JS, Typescript, Tailinwd, Prisma, semestre 2024.2 para todos os membros da Code JR",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        {children}
        </body>
    </html>
  );
}
