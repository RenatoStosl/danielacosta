import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Layout/Header/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Daniela Costa Advogada",
  description: "Soluções Jurídicas com compromisso e ética",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className="h-full w-full">
      <body className={`${inter.className} bg-[#070D1B] flex flex-col`}>
        <Header />
        <main>
          {children}
        </main>
      </body>
    </html>
  );
}