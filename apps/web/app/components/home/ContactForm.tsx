"use client";

import { useState } from "react";

export default function ContactForm() {

  const [submitted, setSubmitted] = useState(false);

  function handleSubmit(
    event: React.FormEvent<HTMLFormElement>
  ) {
    event.preventDefault();

    setSubmitted(true);
  }


  return (
    <form
      onSubmit={handleSubmit}
      className="
        glass
        rounded-3xl
        p-8
        space-y-6
      "
    >

      {/* Name */}
      <div>
        <label className="text-sm text-gray-400">
          Name
        </label>

        <input
          type="text"
          placeholder="Your name"
          className="
            mt-2
            w-full
            px-4
            py-3
            rounded-xl
            bg-white/5
            border
            border-white/10
            outline-none
            focus:border-cyan-400
          "
        />
      </div>


      {/* Email */}
      <div>
        <label className="text-sm text-gray-400">
          Email
        </label>

        <input
          type="email"
          placeholder="your@email.com"
          className="
            mt-2
            w-full
            px-4
            py-3
            rounded-xl
            bg-white/5
            border
            border-white/10
            outline-none
            focus:border-cyan-400
          "
        />
      </div>


      {/* Message */}
      <div>
        <label className="text-sm text-gray-400">
          Message
        </label>

        <textarea
          rows={5}
          placeholder="Write your message..."
          className="
            mt-2
            w-full
            px-4
            py-3
            rounded-xl
            bg-white/5
            border
            border-white/10
            outline-none
            focus:border-cyan-400
          "
        />
      </div>


      {/* Submit */}
      <button
        type="submit"
        className="
          w-full
          py-3
          rounded-xl
          bg-gradient-to-r
          from-cyan-400
          to-red-500
          text-black
          font-bold
          hover:scale-105
          transition
        "
      >
        Send Message 🚀
      </button>


      {submitted && (
        <p className="
          text-green-400
          text-center
        ">
          Message ready to send!
        </p>
      )}


    </form>
  );
}
