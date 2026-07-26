import ProjectCard from "./ProjectCard";

const projects = [
  {
    title: "Resolve Error Stack",
    description:
      "Developer platform for learning coding, debugging errors, and sharing tech knowledge.",
    tech: ["Next.js", "TypeScript", "Tailwind"]
  },
  {
    title: "AI Developer Tools",
    description:
      "AI powered tools for developers to improve productivity.",
    tech: ["AI", "Python", "Node.js"]
  },
  {
    title: "Portfolio Website",
    description:
      "Modern futuristic developer portfolio website.",
    tech: ["React", "Next.js", "CSS"]
  }
];

export default function ProjectGrid() {
  return (
    <section className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      {projects.map((project) => (
        <ProjectCard
          key={project.title}
          title={project.title}
          description={project.description}
          tech={project.tech}
        />
      ))}
    </section>
  );
}
