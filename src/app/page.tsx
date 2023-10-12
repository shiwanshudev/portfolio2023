import Image from "next/image";
export default function Home() {
  return (
    <main className="bg-indigo-950 min-h-screen text-white">
      <section className="container mx-auto px-5 flex items-center justify-around pt-48 flex-col-reverse lg:flex-row lg:px-48">
        <div className="text-center lg:text-left">
          <h1 className="font-bold text-3xl lg:text-6xl px-5 pb-2 lg:px-0 lg:pb-0 font-quattrocento">
            Hi! I&apos;m Shiwanshu!
          </h1>
          <p className="text-xl lg:text-2xl pt-3 font-quattrocento">
            I create web applications, user interfaces and graphic designs.
          </p>
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
    </main>
  );
}
