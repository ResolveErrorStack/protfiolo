import HeroSection from "@/components/home/HeroSection";
import ProjectGrid from "@/components/portfolio/ProjectGrid";
import Skills from "@/components/portfolio/SkillCard";
import AIChat from "@/components/ai/AIChat";
import Timeline from "@/components/portfolio/Timeline";
import CTASection from "@/components/home/CTASection";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* Hero Section */}
      <section>
        <HeroSection />
      </section>

      {/* About / Journey */}
      <section className="container mx-auto px-6 py-20">
        <Timeline />
      </section>

      {/* Skills */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Skills & Technologies
        </h2>

        <Skills />
      </section>

      {/* Projects */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Featured Projects
        </h2>

        <ProjectGrid />
      </section>

      {/* AI Assistant */}
      <section className="container mx-auto px-6 py-20">
        <h2 className="text-4xl font-bold mb-10">
          Chat With My AI Assistant 🤖
        </h2>

        <AIChat />
      </section>

      {/* Contact CTA */}
      <section>
        <CTASection />
      </section>

    </main>
  );
  }
