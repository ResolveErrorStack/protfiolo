import ResumeViewer from "@/components/portfolio/ResumeViewer";

export default function ResumePage() {
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
          My Resume 📄
        </h1>

        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          Explore my skills, projects, education,
          certifications, and developer journey.
        </p>

      </section>


      {/* Resume Viewer */}
      <section className="max-w-5xl mx-auto">

        <ResumeViewer />

      </section>


      {/* Download Button */}
      <section className="text-center mt-12">

        <a
          href="/resume.pdf"
          download
          className="
            inline-block
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
          Download Resume
        </a>

      </section>


    </main>
  );
}
