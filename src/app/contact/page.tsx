"use client";
import { useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";

export default function Contact() {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [status, setStatus] = useState<string>("");

  const LOADING = "LOADING";
  const SUCCESS = "SUCCESS";
  const ERROR = "ERROR";

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus(LOADING);
    try {
      const response = await fetch("/api/sheets", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, email, message }),
      });
      const data = await response.json();
      if (data.response === 201) {
        setStatus(SUCCESS);
      }
    } catch (error) {
      setStatus(ERROR);
      console.error(error);
    }
  };
  return (
    <div className="mx-auto container text-center px-5 pt-28 lg:px-48 lg:pt-20 animate-fade-in">
      <h1 className="font-bold text-3xl lg:text-4xl font-prompt">
        {"Care for some chit chat? :)"}
      </h1>
      <form
        onSubmit={handleSubmit}
        className="pt-12 flex items-center justify-center"
      >
        <fieldset className="w-80">
          <legend className="pb-2 text-xl text-purple-200 font-prompt">
            Schedule a call
          </legend>{" "}
          <div>
            <label
              htmlFor="name"
              className="block text-left pb-1 text-purple-200"
            >
              Name<span className="text-red-500">*</span>
            </label>
            <input
              id="name"
              type="text"
              placeholder="Ram Kumar"
              className=" outline-none bg-purple-900 rounded-md px-2 py-2 placeholder-purple-500 w-full"
              onChange={(e) => setName(e.target.value)}
              value={name}
              required
            />
            <label
              htmlFor="email"
              className="block text-left pb-1  mt-3 text-purple-200"
            >
              Email<span className="text-red-500">*</span>
            </label>
            <input
              id="email"
              type="email"
              placeholder="ramkumar@abc.com"
              className=" outline-none bg-purple-900 rounded-md px-2 py-2 placeholder-purple-500 w-full"
              onChange={(e) => setEmail(e.target.value)}
              value={email}
              required
            />
            <label
              htmlFor="message"
              className="block text-left pb-1  mt-3 text-purple-200"
            >
              Message<span className="text-red-500">*</span>
            </label>
            <textarea
              cols={5}
              id="message"
              className=" outline-none bg-purple-900 rounded-md px-2 py-2 placeholder-purple-500 w-full"
              placeholder="Tell me a bit about yourself, your business, and how I can assist you..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className="border-purple-800 border-2 cursor-pointer border-solid  outline-none w-full py-3 mt-5 rounded-md hover:bg-purple-800 disabled:cursor-auto"
            disabled={status === SUCCESS ? true : false}
          >
            {status === SUCCESS ? (
              <span className="text-green-500">Successfully Submitted!</span>
            ) : status === LOADING ? (
              <AiOutlineLoading className="animate-spin w-full text-center" />
            ) : (
              "Send Message"
            )}
          </button>
        </fieldset>
      </form>
    </div>
  );
}
