"use client";
import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";
import clsx from "clsx";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  const [active, setActive] = useState("");
  return (
    <div>
      {!isVisible && (
        <div className="hidden lg:flex items-center justify-center fixed z-30 px-48 w-full border-b border-solid border-purple-900 shadow-lg font-prompt">
          <Link
            onClick={() => {
              setIsVisible(false);
              setActive("");
            }}
            href="/"
            className={clsx(
              "hover:text-purple-500 duration-200 py-3 mr-8 text-purple-400",
              {
                "text-white": active === "",
              }
            )}
          >
            Home
          </Link>
          <Link
            onClick={() => {
              setIsVisible(false);
              setActive("about");
            }}
            href="/about"
            className={clsx(
              "hover:text-purple-500 duration-200 py-3 mr-8 text-purple-400",
              {
                "text-white": active === "about",
              }
            )}
          >
            About
          </Link>
          <Link
            onClick={() => {
              setIsVisible(false);
              setActive("work");
            }}
            href="/work"
            className={clsx(
              "hover:text-purple-500 duration-200 py-3 mr-8 text-purple-400",
              {
                "text-white": active === "work",
              }
            )}
          >
            Work
          </Link>
          <Link
            onClick={() => {
              setIsVisible(false);
              setActive("contact");
            }}
            href="https://shiwanshudev.hashnode.dev/"
            target="_blank"
            className={clsx(
              "hover:text-purple-500 duration-200 py-3 mr-8 text-purple-400",
              {
                "text-white": active === "contact",
              }
            )}
          >
            Blogs
          </Link>
          <Link
            onClick={() => {
              setIsVisible(false);
              setActive("contact");
            }}
            href="/contact"
            className={clsx(
              "hover:text-purple-500 duration-200 py-3 mr-8 text-purple-400",
              {
                "text-white": active === "contact",
              }
            )}
          >
            Contact Me
          </Link>
        </div>
      )}
      <div className="fixed flex justify-end w-full z-20 lg:hidden">
        {isVisible ? (
          <AiOutlineClose
            className="text-3xl cursor-pointer hover:text-purple-300 m-5 animate-fade-in"
            onClick={() => setIsVisible((prev) => !prev)}
          />
        ) : (
          <AiOutlineMenu
            className="text-3xl cursor-pointer hover:text-purple-300 m-5 animate-fade-in"
            onClick={() => setIsVisible((prev) => !prev)}
          />
        )}
      </div>
      {isVisible && (
        <div className="flex flex-col items-center justify-center h-screen fixed w-screen bg-purple-950 z-10 animate-slide-in">
          <Link
            onClick={() => setIsVisible(false)}
            href="/"
            className="text-white hover:text-purple-500 duration-200 py-5 text-2xl"
          >
            Home
          </Link>
          <Link
            onClick={() => setIsVisible(false)}
            href="/about"
            className="text-white hover:text-purple-500 duration-200 py-5 text-2xl"
          >
            About
          </Link>
          <Link
            onClick={() => setIsVisible(false)}
            href="/work"
            className="text-white hover:text-purple-500 duration-200 py-5 text-2xl"
          >
            Work
          </Link>
          <Link
            onClick={() => setIsVisible(false)}
            href="/contact"
            className="text-white hover:text-purple-500 duration-200 py-5 text-2xl "
          >
            Contact Me
          </Link>
        </div>
      )}
    </div>
  );
}
