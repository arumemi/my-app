import type { Metadata } from "next";

import "@/app/styles/globals.css";
import Header from "./components/Header";
import Footer from "./components/Header/footer";



export const metadata: Metadata = {
  title: "Travel Site",
  description: "Explore the world with us",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body
        className="antialiased"
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
