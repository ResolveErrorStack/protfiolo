import ProjectGrid from "@/components/portfolio/ProjectGrid";

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      {/* Header */}
      <section className="text-center mb-16">

        <h1 className="
          text-5xl
          font-bold
          bg-gradient-to-r
          from-cyan-400
          to-red-500
          bg-clip-text
          text-transparent
        ">
          My Projects 🚀
        </h1>

        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          Explore my software projects, AI experiments,
          developer tools, and technology solutions.
        </p>

      </section>


      {/* Projects Grid */}
      <section className="max-w-6xl mx-auto">

        <ProjectGrid />

      </section>


      {/* Future Projects */}
      <section className="
        max-w-6xl
        mx-auto
        mt-20
        p-8
        rounded-2xl
        glass
      ">

        <h2 className="text-3xl font-bold mb-4">
          Upcoming Projects 🔮
        </h2>

        <ul className="text-gray-400 space-y-3">

          <li>
            🤖 Advanced AI Developer Assistant
          </li>

          <li>
            🌐 Real-time Developer Community Platform
          </li>

          <li>
            📱 Mobile Developer Toolkit
          </li>

          <li>
            ☁️ Cloud & DevOps Automation Tools
          </li>

        </ul>

      </section>


    </main>
  );
}
