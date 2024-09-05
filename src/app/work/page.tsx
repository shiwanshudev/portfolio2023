import Image from "next/image";
import Link from "next/link";
import { AiFillSetting } from "react-icons/ai";
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
            <Link href={w.link} key={w.link} target="_blank">
              <div className=" shadow-md rounded-md mb-1 flex items-center justify-center flex-col lg:flex-row lg:h-40 hover:scale-105 duration-200">
                <div className="relative h-48 lg:h-40 w-full lg:w-60">
                  <Image
                    alt={w.name}
                    fill={true}
                    src={w.src}
                    className="object-cover rounded-md lg:rounded-l-md lg:rounded-r-none"
                  />
                </div>
                <div className="bg-indigo-800 rounded-b-md lg:rounded-r-md lg:rounded-l-none h-full lg:w-[800px]">
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
              </div>
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}
