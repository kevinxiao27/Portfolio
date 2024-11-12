import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700"]
});

export const metadata: Metadata = {
  title: "Kevin Xiao",
  description: "Kevin Xiao's Portfolio Site"
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  const links = [
    { href: "/", name: "HOME" },
    { href: "/experience", name: "EXPERIENCE" },
    { href: "/projects", name: "PROJECTS" }
  ];
  return (
    <html lang='en'>
      <body className={`${inter.className}  antialiased`}>
        <Navbar links={links} />
        <Hero />
        {children}
      </body>
    </html>
  );
}
