import Link from "next/link";
import ProfileAnimation from "./ProfileAnimation";

export default function HeroSection() {
  return (
    <section
      className="
        min-h-screen
        flex
        items-center
        justify-center
        px-6
        pt-24
        overflow-hidden
      "
    >

      <div
        className="
          max-w-7xl
          mx-auto
          grid
          md:grid-cols-2
          gap-12
          items-center
        "
      >

        {/* Left Content */}
        <div>

          <p className="
            text-cyan-400
            text-lg
            mb-4
          ">
            👋 Hello, I'm
          </p>


          <h1
            className="
              text-5xl
              md:text-7xl
              font-extrabold
              leading-tight
            "
          >

            Md Ajmal

            <br />

            <span
              className="
                bg-gradient-to-r
                from-cyan-400
                to-red-500
                bg-clip-text
                text-transparent
              "
            >
              Developer
            </span>

          </h1>


          <p
            className="
              mt-6
              text-gray-400
              text-lg
              max-w-xl
              leading-8
            "
          >
            Building modern web applications,
            AI-powered tools, and futuristic
            developer experiences with technology.
          </p>


          {/* Buttons */}
          <div
            className="
              flex
              flex-wrap
              gap-5
              mt-10
            "
          >

            <Link
              href="/projects"
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
              View Projects 🚀
            </Link>


            <Link
              href="/chat"
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
              Chat With AI 🤖
            </Link>

          </div>


          {/* Status */}
          <div
            className="
              mt-10
              flex
              items-center
              gap-3
              text-sm
              text-gray-400
            "
          >

            <span className="
              w-3
              h-3
              bg-green-400
              rounded-full
              animate-pulse
            " />

            Available for building projects

          </div>

        </div>



        {/* Right Animation */}
        <div
          className="
            flex
            justify-center
          "
        >

          <ProfileAnimation />

        </div>


      </div>

    </section>
  );
            }
