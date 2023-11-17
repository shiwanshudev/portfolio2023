import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="mx-auto container text-center px-5 lg:px-48 lg:text-left">
      <section className="pt-20">
        <h1 className="font-bold text-3xl border-b-2 border-solid border-indigo-900 lg:text-5xl">
          My Work
        </h1>
        <div className="pt-5 flex flex-col items-center justify-center">
          <Link
            href={"https://shiwanshu2023.vercel.app/"}
            target="_blank"
            className="outline-none"
          >
            <div className="flex items-center justify-center bg-indigo-900 py-3 px-5 rounded-md flex-col duration-300 border-solid border border-indigo-500 hover:bg-indigo-800 mb-2 lg:flex-row">
              <div className="w-full lg:w-3/12 h-52 lg:h-28 relative lg:mr-5">
                <Image
                  src={"/images/project1.png"}
                  alt="Portfolio Website Project"
                  className="border-solid border border-indigo-500 rounded-md object-cover"
                  fill={true}
                />
              </div>
              <div className=" w-full lg:w-9/12">
                <h2 className="text-lg lg:text-2xl font-bold text-indigo-400 pt-3 lg:pt-0">
                  Portfolio Website
                </h2>
                <p className="text-sm lg:text-base">
                  This project utilizes NextJS, ReactJS, TailwindCSS, and
                  incorporates the Google Sheets API.
                </p>
              </div>
            </div>
          </Link>{" "}
        </div>
      </section>
    </div>
  );
}
