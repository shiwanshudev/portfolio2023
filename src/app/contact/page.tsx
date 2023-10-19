"use client";
export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <div className="mx-auto container text-center px-5 pt-28 lg:px-48 lg:pt-20">
      <h1 className="font-bold text-3xl lg:text-5xl">
        {"Care for some chit chat? :)"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="pt-12 flex items-center justify-center"
      >
        <fieldset className="w-80">
          <legend className="pb-2 text-xl text-indigo-200 font-bold uppercase">
            Contact Form
          </legend>{" "}
          <div>
            <label
              htmlFor="name"
              className="block text-left pb-1 text-indigo-200"
            >
              Name<span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Ram Kumar"
              className=" outline-none bg-indigo-900 rounded-sm px-2 py-2 placeholder-indigo-500 w-full"
              required
            />
            <label
              htmlFor="email"
              className="block text-left pb-1  mt-3 text-indigo-200"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="ramkumar@abc.com"
              className=" outline-none bg-indigo-900 rounded-sm px-2 py-2 placeholder-indigo-500 w-full"
              required
            />
            <label
              htmlFor="message"
              className="block text-left pb-1  mt-3 text-indigo-200"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              cols={5}
              id="message"
              className=" outline-none bg-indigo-900 rounded-sm px-2 py-2 placeholder-indigo-500 w-full"
              placeholder="Tell me a bit about yourself, your business, and how I can assist you..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="border-indigo-800 border-2 cursor-pointer border-solid  outline-none w-full py-3 mt-5 rounded-md hover:bg-indigo-800"
          >
            Send Message
          </button>
        </fieldset>
      </form>
    </div>
  );
}
