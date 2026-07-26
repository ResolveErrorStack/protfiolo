import Link from "next/link";

export default function Footer() {
  return (
    <footer className="
      border-t
      border-white/10
      bg-black
      text-white
      px-6
      py-10
    ">

      <div className="
        max-w-7xl
        mx-auto
        grid
        md:grid-cols-3
        gap-8
      ">


        {/* Brand */}
        <div>

          <h2 className="
            text-2xl
            font-bold
            bg-gradient-to-r
            from-cyan-400
            to-red-500
            bg-clip-text
            text-transparent
          ">
            ResolveErrorStack
          </h2>

          <p className="
            text-gray-400
            mt-3
            text-sm
          ">
            Building futuristic software,
            AI tools, and developer experiences.
          </p>

        </div>


        {/* Navigation */}
        <div>

          <h3 className="font-semibold mb-4">
            Quick Links
          </h3>

          <div className="
            flex
            flex-col
            gap-2
          ">

            <Link
              href="/about"
              className="text-gray-400 hover:text-cyan-400"
            >
              About
            </Link>

            <Link
              href="/projects"
              className="text-gray-400 hover:text-cyan-400"
            >
              Projects
            </Link>

            <Link
              href="/resume"
              className="text-gray-400 hover:text-cyan-400"
            >
              Resume
            </Link>

            <Link
              href="/contact"
              className="text-gray-400 hover:text-cyan-400"
            >
              Contact
            </Link>

          </div>

        </div>


        {/* Social */}
        <div>

          <h3 className="font-semibold mb-4">
            Connect
          </h3>

          <div className="flex gap-4">

            <a
              href="#"
              className="
                text-gray-400
                hover:text-cyan-400
              "
            >
              GitHub
            </a>

            <a
              href="#"
              className="
                text-gray-400
                hover:text-cyan-400
              "
            >
              LinkedIn
            </a>

          </div>

        </div>


      </div>


      {/* Bottom */}
      <div className="
        max-w-7xl
        mx-auto
        mt-10
        pt-6
        border-t
        border-white/10
        text-center
        text-sm
        text-gray-500
      ">

        © {new Date().getFullYear()} Md Ajmal.
        All rights reserved.

      </div>


    </footer>
  );
        }
