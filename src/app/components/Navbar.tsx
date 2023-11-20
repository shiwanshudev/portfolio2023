"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState("");
  return (
    <div>
      {!isVisible && (
        <div className="hidden lg:flex items-center justify-center fixed z-30 px-48 w-full border-b border-solid border-indigo-900 shadow-lg">
          <Link
            onClick={() => {
              setIsVisible(false);
              setActive("");
            }}
            href="/"
            className={`hover:text-indigo-500 duration-200 py-3 mr-8 ${
              active === "" ? "text-white" : "text-indigo-400"
            }`}
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setIsVisible(false);
              setActive("about");
            }}
            href="/about"
            className={`hover:text-indigo-500 duration-200 py-3 mr-8 ${
              active === "about" ? "text-white" : "text-indigo-400"
            }`}
          >
            About
          </Link>
          <Link
            onClick={() => {
              setIsVisible(false);
              setActive("work");
            }}
            href="/work"
            className={`hover:text-indigo-500 duration-200 py-3 mr-8 ${
              active === "work" ? "text-white" : "text-indigo-400"
            }`}
          >
            Work
          </Link>
          <Link
            onClick={() => {
              setIsVisible(false);
              setActive("contact");
            }}
            href="/contact"
            className={`hover:text-indigo-500 duration-200 py-3 mr-8 ${
              active === "contact" ? "text-white" : "text-indigo-400"
            }`}
          >
            Contact Me
          </Link>
        </div>
      )}
      <div className="fixed flex justify-end w-full z-20 lg:hidden">
        {isVisible ? (
          <AiOutlineClose
            className="text-3xl cursor-pointer hover:text-indigo-300 m-5 animate-fade-in"
            onClick={() => setIsVisible((prev) => !prev)}
          />
        ) : (
          <AiOutlineMenu
            className="text-3xl cursor-pointer hover:text-indigo-300 m-5 animate-fade-in"
            onClick={() => setIsVisible((prev) => !prev)}
          />
        )}
      </div>
      {isVisible && (
        <div className="flex flex-col items-center justify-center h-screen fixed w-screen bg-indigo-950 z-10 animate-slide-in">
          <Link
            onClick={() => setIsVisible(false)}
            href="/"
            className="text-white hover:text-indigo-500 duration-200 py-5 text-2xl"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsVisible(false)}
            href="/about"
            className="text-white hover:text-indigo-500 duration-200 py-5 text-2xl"
          >
            About
          </Link>
          <Link
            onClick={() => setIsVisible(false)}
            href="/work"
            className="text-white hover:text-indigo-500 duration-200 py-5 text-2xl"
          >
            Work
          </Link>
          <Link
            onClick={() => setIsVisible(false)}
            href="/contact"
            className="text-white hover:text-indigo-500 duration-200 py-5 text-2xl "
          >
            Contact Me
          </Link>
        </div>
      )}
    </div>
  );
}
