const timelineData = [
  {
    year: "2024",
    title: "Started Programming Journey",
    description:
      "Started learning programming fundamentals, Python, and computer science concepts.",
    icon: "💻",
  },

  {
    year: "2025",
    title: "Web Development Growth",
    description:
      "Built projects using frontend technologies and explored full-stack development.",
    icon: "🌐",
  },

  {
    year: "2026",
    title: "AI & Advanced Development",
    description:
      "Exploring AI tools, cloud technologies, DevOps, and modern software architecture.",
    icon: "🤖",
  },

  {
    year: "Future",
    title: "Build Developer Ecosystem",
    description:
      "Creating innovative platforms and tools for developers worldwide.",
    icon: "🚀",
  },
];


export default function Timeline() {
  return (
    <div className="relative">

      {/* Vertical Line */}
      <div
        className="
          absolute
          left-5
          top-0
          h-full
          w-px
          bg-cyan-400/40
        "
      />


      <div className="space-y-10">

        {timelineData.map((item) => (

          <div
            key={item.year}
            className="
              relative
              pl-16
            "
          >

            {/* Dot */}
            <div
              className="
                absolute
                left-0
                w-10
                h-10
                rounded-full
                bg-black
                border-2
                border-cyan-400
                flex
                items-center
                justify-center
              "
            >
              {item.icon}
            </div>


            {/* Content */}
            <div
              className="
                glass
                rounded-2xl
                p-6
              "
            >

              <span
                className="
                  text-cyan-400
                  font-bold
                "
              >
                {item.year}
              </span>


              <h3
                className="
                  text-xl
                  font-bold
                  mt-2
                "
              >
                {item.title}
              </h3>


              <p
                className="
                  text-gray-400
                  mt-3
                  leading-7
                "
              >
                {item.description}
              </p>

            </div>


          </div>

        ))}

      </div>

    </div>
  );
}
