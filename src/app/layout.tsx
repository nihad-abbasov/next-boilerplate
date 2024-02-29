import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Header } from "../components/layout/Semantic/Header/Header";
import { Footer } from "../components/layout/Semantic/Footer/Footer";
import { Main } from "../components/layout/Semantic/Main/Main";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Boilerplate",
  description: "",
  icons: {
    icon: "./favicon.ico",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-purple-50 p-14">
      <body className={`${inter.className} p-10 bg-purple-200 rounded-lg`}>
        <Header />
        <Main>{children}</Main>
        <Footer />
      </body>
    </html>
  );
}
