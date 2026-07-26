export default function ProfileCard() {
  return (
    <div
      className="
        glass
        rounded-3xl
        p-8
        max-w-md
        mx-auto
        text-center
        hover:scale-105
        transition
        duration-300
      "
    >

      {/* Profile Image */}
      <div
        className="
          w-40
          h-40
          mx-auto
          rounded-full
          overflow-hidden
          border-4
          border-cyan-400
          shadow-lg
        "
      >
        <img
          src="/profile.png"
          alt="Md Ajmal Profile"
          className="
            w-full
            h-full
            object-cover
          "
        />
      </div>


      {/* Name */}
      <h2
        className="
          mt-6
          text-3xl
          font-bold
          bg-gradient-to-r
          from-cyan-400
          to-red-500
          bg-clip-text
          text-transparent
        "
      >
        Md Ajmal
      </h2>


      {/* Role */}
      <p className="
        text-gray-400
        mt-2
      ">
        Full Stack Developer | AI Explorer
      </p>


      {/* About */}
      <p className="
        mt-5
        text-gray-400
        leading-7
      ">
        Passionate about building modern software,
        developer tools, and innovative technology
        solutions.
      </p>


      {/* Skills */}
      <div
        className="
          mt-6
          flex
          flex-wrap
          justify-center
          gap-3
        "
      >

        {[
          "Next.js",
          "React",
          "TypeScript",
          "Python",
          "AI",
          "Cloud",
        ].map((skill) => (

          <span
            key={skill}
            className="
              px-4
              py-2
              rounded-full
              bg-white/10
              text-sm
              text-cyan-300
            "
          >
            {skill}
          </span>

        ))}

      </div>


      {/* Status */}
      <div
        className="
          mt-8
          text-sm
          text-green-400
        "
      >
        ● Building the future
      </div>


    </div>
  );
}
