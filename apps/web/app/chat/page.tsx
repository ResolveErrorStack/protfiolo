import AIChat from "@/components/ai/AIChat";

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">

      {/* Header */}
      <section className="text-center mb-12">

        <h1 className="
          text-5xl
          font-bold
          bg-gradient-to-r
          from-cyan-400
          to-red-500
          bg-clip-text
          text-transparent
        ">
          Chat With My AI 🤖
        </h1>

        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          Ask questions about my projects, skills,
          technologies, and developer journey.
        </p>

      </section>


      {/* AI Chat Interface */}
      <section className="max-w-4xl mx-auto">

        <div className="
          glass
          rounded-3xl
          p-6
          shadow-xl
        ">
          <AIChat />
        </div>

      </section>


      {/* Future Features */}
      <section className="
        max-w-4xl
        mx-auto
        mt-16
        grid
        md:grid-cols-3
        gap-6
      ">

        <div className="glass p-5 rounded-2xl">
          <h3 className="font-bold">
            💡 Project Knowledge
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            AI explains portfolio projects.
          </p>
        </div>


        <div className="glass p-5 rounded-2xl">
          <h3 className="font-bold">
            🧑‍💻 Developer Help
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Future coding assistant features.
          </p>
        </div>


        <div className="glass p-5 rounded-2xl">
          <h3 className="font-bold">
            🚀 Smart Connect
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Future communication tools.
          </p>
        </div>

      </section>

    </main>
  );
}
