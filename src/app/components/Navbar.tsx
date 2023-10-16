import Link from "next/link";
import { useState } from "react";
import { AiOutlineMenu, AiOutlineClose } from "react-icons/ai";

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(false);
  return (
    <div>
      <div
        className="fixed flex justify-end w-full z-50"
        onClick={() => setIsVisible((prev) => !prev)}
      >
        {isVisible ? (
          <AiOutlineClose className="text-3xl cursor-pointer hover:text-indigo-300 m-5" />
        ) : (
          <AiOutlineMenu className="text-3xl cursor-pointer hover:text-indigo-300 m-5" />
        )}
      </div>
      {isVisible && (
        <div className="flex flex-col items-center justify-center h-screen fixed w-screen bg-indigo-950 z-10">
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
