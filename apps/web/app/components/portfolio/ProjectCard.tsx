type ProjectCardProps = {
  title: string;
  description: string;
  image?: string;
  technologies: string[];
  github?: string;
  demo?: string;
};

export default function ProjectCard({
  title,
  description,
  image,
  technologies,
  github,
  demo,
}: ProjectCardProps) {
  return (
    <div
      className="
        glass
        rounded-3xl
        overflow-hidden
        hover:scale-105
        transition
        duration-300
      "
    >

      {/* Project Image */}
      <div
        className="
          h-48
          bg-white/5
          flex
          items-center
          justify-center
        "
      >
        {image ? (
          <img
            src={image}
            alt={title}
            className="
              w-full
              h-full
              object-cover
            "
          />
        ) : (
          <span className="text-5xl">
            🚀
          </span>
        )}
      </div>


      {/* Content */}
      <div className="p-6">

        <h3
          className="
            text-2xl
            font-bold
            text-cyan-400
          "
        >
          {title}
        </h3>


        <p
          className="
            mt-3
            text-gray-400
            leading-7
          "
        >
          {description}
        </p>


        {/* Technologies */}
        <div
          className="
            flex
            flex-wrap
            gap-2
            mt-5
          "
        >
          {technologies.map((tech) => (
            <span
              key={tech}
              className="
                px-3
                py-1
                rounded-full
                bg-white/10
                text-sm
                text-cyan-300
              "
            >
              {tech}
            </span>
          ))}
        </div>


        {/* Links */}
        <div
          className="
            flex
            gap-4
            mt-6
          "
        >

          {github && (
            <a
              href={github}
              target="_blank"
              className="
                px-4
                py-2
                rounded-lg
                border
                border-cyan-400
                text-cyan-400
              "
            >
              GitHub
            </a>
          )}


          {demo && (
            <a
              href={demo}
              target="_blank"
              className="
                px-4
                py-2
                rounded-lg
                bg-cyan-400
                text-black
              "
            >
              Live Demo
            </a>
          )}

        </div>

      </div>

    </div>
  );
              }
