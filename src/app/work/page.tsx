import Image from "next/image";
import Link from "next/link";
import { AiFillSetting } from "react-icons/ai";

export default function About() {
  const WORK_LINKS = [
    {
      link: "https://con10tlabs.com/",
      name: "Con10T Labs Website",
      technologies:
        "Next.js, TSParticles,Tailwind CSS, Notion API, Zoho CRM & Desk APIs",
      src: "/images/project2.png",
      description:
        "Website Development: Developed and maintained the company website using Next.js, TSParticles, and Tailwind CSS, with content integration from Notion. Enhanced customer relationship and support systems through Zoho CRM and Zoho Desk API integration.",
    },
    {
      link: "https://www.figma.com/design/2Ng2OS9TLYmpsKuDmWG7KL/Shiwanshu---UI-Portfolio?node-id=0-1&t=cjeMhVM2WvBUFEyT-1",
      name: "Marketing Website Design",
      technologies: "Figma, Prototyping, Wireframing, UX/UI Design, User Story",
      src: "/images/project3.png",
      description:
        "Developed UI wireframes, and low-fidelity and high-fidelity prototypes for a marketing website. Collaborated closely with clients to gather requirements and delivered designs that met and exceeded client expectations.",
    },
    {
      link: "https://shiwanshudev.vercel.app/",
      name: "Portfolio Website",
      technologies:
        "NextJS, ReactJS, TailwindCSS, and incorporates the Google Sheets API.",
      src: "/images/project1.png",
      description:
        "Redesigned my portfolio website loosely on Figma and then developed it using Next.js and Tailwind CSS. Additionally, I added a contact form with a Google Sheet as the backend. ",
    },
  ];
  return (
    <div className="mx-auto container text-center px-5 lg:px-48">
      <section className="pt-20">
        <h1 className="font-bold text-3xl text-center lg:text-4xl font-prompt">
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
                <div className="bg-purple-950 rounded-b-md lg:rounded-r-md lg:rounded-l-none h-full lg:w-[800px]">
                  <h3 className="font-semibold font-prompt text-lg py-2 lg:text-left lg:px-5">
                    {w.name}
                  </h3>
                  <p className="pb-5 px-5 lg:text-left">
                    <AiFillSetting className="inline-block animate-spin" />{" "}
                    <span className="lg:font-semibold">{w.technologies}</span>
                    <span className="hidden lg:block">{w.description}</span>
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
