import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { HeaderNav } from '@/components/HeaderNav';
import { auth } from "@/auth";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Freelancer App",
  description: "Una app para buscar desarroladores para tu próximo proyecto.",
};


export default async function RootLayout({

  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const session = await auth()

  return (
      <html lang="en">
          <body className={inter.className}>
                <HeaderNav session={session} />
                {children}
          </body>
      </html>
  );
}
