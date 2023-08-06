import Image from "next/image";

export default function Home() {
  return (
    <main className="bg-black min-h-screen text-white">
      <section className="container mx-auto">
        <h1 className="pt-48 text-center font-bold text-3xl lg:text-5xl px-5 pb-2 lg:px-0 lg:pb-0">
          Designing web, one pixel at a time!
        </h1>
        <p className="text-center text-xl lg:text-2xl pt-3">
          <span className="font-bold">Shiwanshu Shubham</span>{" "}
          <span className="block lg:inline text-sm lg:text-lg italic">
            -Designer & Developer
          </span>
        </p>
      </section>
    </main>
  );
}
