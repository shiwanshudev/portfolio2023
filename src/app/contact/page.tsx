"use client";
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";

export default function Contact() {
  return (
    <div className="mx-auto container text-center px-5 pt-28 lg:px-48 lg:pt-24 animate-fade-in">
      <h1 className="font-bold text-3xl lg:text-4xl font-prompt">
        {"Let's Connect!"}
      </h1>
      <p className="mt-8 text-xl text-indigo-200 font-prompt">
        Reach out to me via email or connect on social platforms:
      </p>
      <div className="flex justify-center gap-8 mt-10">
        <a
          href="mailto:shiwanshudev@outlook.com"
          className="text-white text-4xl hover:text-indigo-500 duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
        >
          <AiOutlineMail />
        </a>
        <a
          href="https://github.com/shiwanshudev"
          className="text-white text-4xl hover:text-indigo-500 duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <AiFillGithub />
        </a>
        <a
          href="https://in.linkedin.com/in/shiwanshudev"
          className="text-white text-4xl hover:text-indigo-500 duration-200"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <AiFillLinkedin />
        </a>
      </div>
      <p className="mt-8 text-indigo-300 font-quattrocento text-lg">
        shiwanshudev@outlook.com
      </p>
    </div>
  );
}
