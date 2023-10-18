import Image from "next/image";

export default function About() {
  return (
    <div className="mx-auto container text-center px-5 lg:px-48 lg:text-left">
      <section className="pt-20">
        <h1 className="font-bold text-3xl border-b-2 border-solid border-indigo-900 lg:text-5xl">
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
        <p className="pt-3 text-lg">Con10T Labs, Full Time</p>
        <p className="text-indigo-500 text-lg font-bold">
          December 2022 - Present
        </p>
      </section>
      <section className="flex flex-col pt-8 justify-center items-center lg:items-start lg:justify-end lg:flex-row">
        <div className="w-48 h-48 relative lg:w-72 lg:h-72 ">
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
