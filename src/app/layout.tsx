import "./globals.css";
import type { Metadata } from "next";
import { Inter, Quattrocento } from "next/font/google";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });
const quattrocento = Quattrocento({
  weight: ["400", "700"],
  variable: "--font-quattrocento",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "My Portfolio 2023 - Shiwanshu",
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
        <main className="bg-indigo-950 min-h-screen text-white">
          <Navbar />
          {children}
        </main>
      </body>
    </html>
  );
}

const Navbar = () => {
  return (
    <div className="items-center hidden w-80 justify-around ml-auto mr-60 pt-5 lg:flex">
      <Link
        href="/"
        className="text-indigo-500 hover:text-indigo-300 duration-200 text-lg"
      >
        Home
      </Link>
      <Link
        href="/about"
        className="text-indigo-500 hover:text-indigo-300 duration-200 text-lg"
      >
        About
      </Link>
      <Link
        href="/work"
        className="text-indigo-500 hover:text-indigo-300 duration-200 text-lg"
      >
        Work
      </Link>
      <Link
        href="/contact"
        className="text-indigo-500 hover:text-indigo-300 duration-200 text-lg"
      >
        Contact Me
      </Link>
    </div>
  );
};
