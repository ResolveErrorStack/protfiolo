import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "ResolveErrorStack Platform",
    description:
      "A futuristic developer ecosystem platform with AI assistant, projects showcase, and developer tools.",
    technologies: [
      "Next.js",
      "TypeScript",
      "AI",
      "Tailwind CSS",
    ],
    github:
      "https://github.com/ResolveErrorStack",
  },

  {
    title: "AI Developer Assistant",
    description:
      "An AI-powered assistant designed to help developers learn concepts and solve problems.",
    technologies: [
      "Python",
      "AI",
      "API",
      "Machine Learning",
    ],
  },

  {
    title: "Developer Portfolio",
    description:
      "Modern animated portfolio website with responsive futuristic UI.",
    technologies: [
      "React",
      "Next.js",
      "Framer Motion",
    ],
  },

];


export default function ProjectGrid() {
  return (
    <div
      className="
        grid
        md:grid-cols-2
        lg:grid-cols-3
        gap-8
      "
    >

      {projects.map((project) => (

        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          technologies={project.technologies}
          github={project.github}
          demo={project.demo}
        />

      ))}

    </div>
  );
}
