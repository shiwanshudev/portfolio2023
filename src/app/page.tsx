import Image from "next/image";
import { AiFillBehanceCircle, AiFillGithub, AiFillMail } from "react-icons/ai";
import Link from "next/link";

const SOCIAL_LINKS = {
  behance: "https://www.behance.net/sshubhamdesigns",
  github: "https://github.com/shiwanshudev",
  mail: "mailto:shiwanshudev@outlook.com",
};

export default function Home() {
  return (
    <section className="container mx-auto px-5 flex items-center justify-around pt-48 flex-col-reverse lg:flex-row lg:px-48">
      <div className="text-center lg:text-left">
        <h1 className="font-bold text-3xl lg:text-6xl px-5 pb-2 lg:px-0 lg:pb-0 font-quattrocento">
          Hi! I&apos;m Shiwanshu!
        </h1>
        <p className="text-xl lg:text-2xl pt-3 font-quattrocento">
          I create web applications, user interfaces and graphic designs.
        </p>
        <div className="mt-5 flex justify-center lg:justify-start">
          <Link
            className="text-white text-3xl hover:text-indigo-500 duration-200 mr-3"
            href={SOCIAL_LINKS.behance}
            target="_blank"
          >
            <AiFillBehanceCircle />
          </Link>
          <Link
            className="text-white text-3xl hover:text-indigo-500 duration-200 mr-3"
            href={SOCIAL_LINKS.github}
            target="_blank"
          >
            <AiFillGithub />
          </Link>
          <Link
            className="text-white text-3xl hover:text-indigo-500 duration-200"
            href={SOCIAL_LINKS.mail}
            target="_blank"
          >
            <AiFillMail />
          </Link>
        </div>
      </div>
      <div className="w-48 h-48 mb-10 relative lg:w-72 lg:h-72 ">
        <Image
          src={"/images/hero-img.svg"}
          fill={true}
          alt="Hero Image"
          className="object-contain"
          priority
        />
      </div>
    </section>
  );
}
