import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderNav } from '@/components/HeaderNav';
import { SessionProvider } from "next-auth/react";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freelancer App",
  description: "Una app para buscar desarroladores para tu próximo proyecto.",
};


export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {

  return (
      <html lang="en">
          <body className={inter.className}>
                <SessionProvider>
                  <HeaderNav />
                  {children}
                </SessionProvider>
          </body>
      </html>
  );
}
