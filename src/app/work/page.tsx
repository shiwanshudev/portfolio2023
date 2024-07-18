import Image from "next/image";
import Link from "next/link";

export default function About() {
  const WORK_LINKS = [
    {
      link: "https://con10tlabs.com/",
      name: "Con10T Labs Website",
      description:
        "Next.js, TSParticles,Tailwind CSS, Notion API, Zoho CRM & Desk APIs",
      src: "/images/project2.png",
    },
    {
      link: "https://www.figma.com/design/2Ng2OS9TLYmpsKuDmWG7KL/Shiwanshu---UI-Portfolio?node-id=0-1&t=cjeMhVM2WvBUFEyT-1",
      name: "Marketing Website Design",
      description: "Figma, Prototyping, Wireframing, UX/UI Design, User Story",
      src: "/images/project3.png",
    },
    {
      link: "https://shiwanshudev.vercel.app/",
      name: "Portfolio Website",
      description:
        "NextJS, ReactJS, TailwindCSS, and incorporates the Google Sheets API.",
      src: "/images/project1.png",
    },
  ];
  return (
    <div className="mx-auto container text-center px-5 lg:px-48">
      <section className="pt-20">
        <h1 className="font-bold text-3xl text-center lg:text-4xl font-prompt">
          My Work
        </h1>
        <div className="pt-5 flex items-center justify-center flex-col lg:flex-row flex-wrap">
          {WORK_LINKS.map((w) => (
            <Link href={w.link} key={w.link} target="_blank">
              <div className="flex items-center justify-center flex-col w-72 shadow-lg m-3 hover:scale-105 duration-200 border-solid border-purple-700 border rounded-md">
                <div className="relative w-full h-48">
                  <Image
                    alt={w.name}
                    fill={true}
                    src={w.src}
                    className="object-cover rounded-t-md"
                  />
                </div>
                <div className="w-full bg-gradient-to-tr from-purple-800 to-indigo-800">
                  <h3 className="text-xs lg:text-sm pt-3 pb-1 px-3 font-bold w-full text-left font-prompt">
                    {w.name}
                  </h3>
                  <p className="text-sm text-left px-3 pb-3 rounded-b-md w-full">
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
