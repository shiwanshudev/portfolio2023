import Image from "next/image";
import Link from "next/link";
import { AiFillSetting, AiFillGithub } from "react-icons/ai";
import { WORK_LINKS } from "../../../utils/contstant";

export default function About() {
  return (
    <div className="mx-auto container text-center px-5 lg:px-48 animate-fade-in">
      <section className="pt-24">
        <h1 className="font-bold text-3xl text-center lg:text-4xl font-prompt pb-5">
          My Work
        </h1>
        <div className="flex items-center justify-center gap-5 flex-wrap pb-20 pt-3 lg:flex-col">
          {WORK_LINKS.map((w) => (
            <div key={w.link}>
              <div className=" shadow-md rounded-md mb-1 flex items-center justify-center flex-col lg:flex-row bg-indigo-800 lg:h-40 hover:scale-105 duration-200 relative overflow-hidden">
                {w.github && (
                  <Link href={w.github} target="_blank">
                    <div className="h-24 w-48 bg-indigo-900 absolute -top-14 -right-8 rotate-[23deg] shadow-inner shadow-stone-950"></div>
                    <div className="absolute top-2 right-2 flex justify-center items-center z-10 hover:text-indigo-300">
                      <AiFillGithub className="lg:text-xl  duration-300 mr-1 lg:p-0 lg:border-none text-3xl p-1 lg:rounded-none lg:bg-indigo-900 rounded-full text-indigo-900 lg:text-white bg-white border border-indigo-500" />{" "}
                      <span className="hidden lg:block">Github</span>
                    </div>
                  </Link>
                )}
                <Link href={w.link} target="_blank" className="w-full">
                  <div className="relative h-48 lg:h-40 w-full lg:w-60">
                    <Image
                      alt={w.name}
                      fill={true}
                      src={w.src}
                      className="object-cover rounded-md lg:rounded-l-md lg:rounded-r-none"
                    />
                  </div>
                </Link>
                <Link href={w.link} target="_blank">
                  <div className="rounded-b-md lg:rounded-r-md lg:rounded-l-none h-full lg:w-[800px]">
                    <h3 className="font-semibold font-prompt text-lg py-2 lg:text-left lg:px-5">
                      {w.name}
                    </h3>

                    <div className="flex px-5">
                      <AiFillSetting className="lg:inline-block animate-spin text-indigo-400 m-1 hidden" />{" "}
                      <div className="flex flex-wrap gap-y-2 lg:pb-2">
                        {w.technologies.map((tech) => (
                          <span
                            className="bg-indigo-400 font-semibold text-indigo-800 px-2 py-1 text-xs rounded-full mr-2"
                            key={tech}
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                    <p className="pb-5 px-5 text-left pt-5 lg:pt-0">
                      {w.description}
                    </p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
