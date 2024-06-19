import Image from "next/image";
import Link from "next/link";

export default function About() {
  const CON10T_LINKS = {
    website: "https://con10tlabs.com/",
    app: "https://play.google.com/store/apps/details?id=com.cap10",
  };
  return (
    <div className="mx-auto container text-center px-5 lg:px-48 lg:text-left">
      <section className="pt-20">
        <h1 className="font-bold text-3xl text-center  lg:text-4xl font-prompt">
          Who am I?
        </h1>
        <p className=" leading-7 pt-5 text-base lg:text-lg">
          Experienced frontend developer and designer proficient in Figma, Adobe
          Photoshop, NextJS, ReactJS, Notion, Tailwind, and CSS3. Skilled at
          creating visually appealing and user-friendly web experiences.
          Passionate about staying up-to-date with the latest industry trends
          and technologies. Committed to delivering high-quality work that
          exceeds client expectations.
        </p>
      </section>
      <section className="pt-8">
        <h2 className="text-3xl font-bold">My Journey</h2>
        <p className="pt-3 text-lg font-bold font-prompt">
          Con10T Labs, Full Time
        </p>
        <p className="text-purple-500 text-sm font-bold font-prompt">
          December 2022 - April 2024
        </p>
        <ul className="pt-5 list-disc">
          <li className="leading-7 text-base lg:text-lg mb-3">
            <Link
              href={CON10T_LINKS.website}
              className="text-white hover:text-purple-500 duration-200 font-bold underline-offset-4 underline"
            >
              Con10T Labs Website:{" "}
            </Link>
            Developed the company website using Next.js, TSParticles, and
            Tailwind, incorporating blogs sourced from Notion. Integrated Zoho
            CRM and Zoho Desk APIs to enhance customer relationship management
            and support ticket management.
          </li>
          <li className="leading-7 text-base lg:text-lg mb-3">
            <Link
              href={CON10T_LINKS.app}
              className="text-white hover:text-purple-500 duration-200 font-bold underline-offset-4 underline"
            >
              CAP10 App:{" "}
            </Link>
            Resolved UI bugs within the app using React Native and Tailwind CSS.
            Conducted comprehensive manual testing of both internal and
            production builds to ensure seamless functionality and user
            experience.
          </li>
          <li className="leading-7 text-base lg:text-lg mb-3">
            <span className="text-white hover:text-purple-500 duration-200 font-bold">
              Admin Panel:{" "}
            </span>
            Designed and optimized admin panel using Next.js, Tailwind CSS,
            Prisma ORM, Headless UI, and Tanstack Tables. Implemented pagination
            using Tanstack Table.
          </li>
          <li className="leading-7 text-base lg:text-lg mb-3">
            Mentored and provided guidance to a QA fresher and an intern, while
            also developing an efficient testing process.
          </li>
          <li className="leading-7 text-base lg:text-lg mb-3">
            Designed and created UI wireframes and designs for our mobile
            application, ensuring a visually appealing and user-friendly
            interface that met specific project requirements.
          </li>
        </ul>
      </section>
      <section className="flex items-center justify-center p-10 lg:p-0 lg:justify-end">
        <div className="relative w-52 h-52 ">
          <Image
            src="/images/about-img.svg"
            className="object-contain"
            alt="About Image"
            fill={true}
          />
        </div>
      </section>
    </div>
  );
}
