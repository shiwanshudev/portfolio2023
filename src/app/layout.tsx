import "./globals.css";
import type { Metadata } from "next";
import { Inter, Quattrocento } from "next/font/google";
import Navbar from "./components/Navbar";

const inter = Inter({ subsets: ["latin"] });
const quattrocento = Quattrocento({
  weight: ["400", "700"],
  variable: "--font-quattrocento",
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
      <body className={`${inter.className} ${quattrocento.className}`}>
        <main className="bg-gradient-to-b from-indigo-950 to-purple-800 min-h-screen text-white">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}
