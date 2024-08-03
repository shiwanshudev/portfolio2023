import "./globals.css";
import type { Metadata } from "next";
import { Prompt, Quattrocento } from "next/font/google";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

const quattrocento = Quattrocento({
  weight: ["400", "700"],
  variable: "--font-quattrocento",
  subsets: ["latin"],
});

const prompt = Prompt({
  weight: ["900", "800", "700", "200", "100"],
  variable: "--font-prompt",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio 2024 - Shiwanshu",
  description:
    "Experienced frontend developer and designer proficient in Figma, Adobe Photoshop, NextJS, ReactJS, Notion, Tailwind, and CSS3.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`${quattrocento.variable} ${prompt.variable} font-quattrocento`}
      >
        <main className="bg-gradient-to-b from-purple-950 to-purple-800 min-h-screen text-white">
          <Navbar />
          {children}
          <Footer />
        </main>
      </body>
    </html>
  );
}
