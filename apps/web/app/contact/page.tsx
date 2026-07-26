import ContactForm from "@/components/home/ContactForm";

export default function ContactPage() {
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
          Let's Connect 🌐
        </h1>

        <p className="mt-5 text-gray-400 max-w-2xl mx-auto">
          Have a project idea, collaboration,
          or technology discussion? Send a message.
        </p>

      </section>


      {/* Contact Form */}
      <section className="max-w-3xl mx-auto">

        <ContactForm />

      </section>


      {/* Social Links */}
      <section className="
        max-w-3xl
        mx-auto
        mt-16
        grid
        md:grid-cols-3
        gap-6
      ">

        <div className="glass p-6 rounded-2xl text-center">
          <h3 className="font-bold">
            GitHub
          </h3>

          <p className="text-gray-400 mt-2">
            Open Source Projects
          </p>
        </div>


        <div className="glass p-6 rounded-2xl text-center">
          <h3 className="font-bold">
            LinkedIn
          </h3>

          <p className="text-gray-400 mt-2">
            Professional Network
          </p>
        </div>


        <div className="glass p-6 rounded-2xl text-center">
          <h3 className="font-bold">
            Email
          </h3>

          <p className="text-gray-400 mt-2">
            Direct Contact
          </p>
        </div>

      </section>

    </main>
  );
          }
