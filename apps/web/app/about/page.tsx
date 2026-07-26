import ProfileCard from "@/components/home/ProfileCard";
import Timeline from "@/components/portfolio/Timeline";

export default function AboutPage() {
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
          About Me
        </h1>

        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          Developer building modern software,
          AI tools, and futuristic digital experiences.
        </p>

      </section>


      {/* Profile */}
      <section className="max-w-5xl mx-auto mb-20">
        <ProfileCard />
      </section>


      {/* Developer Journey */}
      <section className="max-w-5xl mx-auto">

        <h2 className="text-3xl font-bold mb-10">
          My Developer Journey 🚀
        </h2>

        <Timeline />

      </section>


      {/* Mission */}
      <section className="
        max-w-5xl
        mx-auto
        mt-20
        p-8
        rounded-2xl
        glass
      ">

        <h2 className="text-3xl font-bold mb-4">
          My Mission
        </h2>

        <p className="text-gray-400 leading-8">
          My goal is to learn, build, and share technology
          knowledge through software development, AI,
          and open-source projects.
        </p>

      </section>


    </main>
  );
}
