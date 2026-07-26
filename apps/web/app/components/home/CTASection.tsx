import Link from "next/link";

export default function CTASection() {
  return (
    <section
      className="
        px-6
        py-24
      "
    >

      <div
        className="
          max-w-5xl
          mx-auto
          glass
          rounded-3xl
          p-10
          text-center
        "
      >

        {/* Title */}
        <h2
          className="
            text-4xl
            md:text-5xl
            font-bold
            bg-gradient-to-r
            from-cyan-400
            to-red-500
            bg-clip-text
            text-transparent
          "
        >
          Let's Build Something Amazing 🚀
        </h2>


        {/* Description */}
        <p
          className="
            mt-6
            text-gray-400
            max-w-2xl
            mx-auto
            leading-8
          "
        >
          Have an idea, project, or technology
          discussion? Connect with me and let's
          create innovative solutions together.
        </p>


        {/* Buttons */}
        <div
          className="
            mt-8
            flex
            justify-center
            flex-wrap
            gap-5
          "
        >

          <Link
            href="/contact"
            className="
              px-8
              py-3
              rounded-xl
              bg-gradient-to-r
              from-cyan-400
              to-red-500
              text-black
              font-semibold
              hover:scale-105
              transition
            "
          >
            Contact Me
          </Link>


          <Link
            href="/projects"
            className="
              px-8
              py-3
              rounded-xl
              border
              border-cyan-400
              text-cyan-400
              hover:bg-cyan-400
              hover:text-black
              transition
            "
          >
            Explore Projects
          </Link>

        </div>


        {/* Status */}
        <div
          className="
            mt-8
            text-sm
            text-green-400
          "
        >
          ● Open for collaboration
        </div>


      </div>

    </section>
  );
}
