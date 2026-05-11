import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Experience } from "@/components/Experience";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";
import { ParticleBackground } from "@/components/ParticleBackground";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Harshan R — Data Scientist & ML Engineer" },
      {
        name: "description",
        content:
          "Portfolio of Harshan R, aspiring Data Scientist, ML Engineer and Software Developer based in Coimbatore. Building AI-powered applications and scalable software.",
      },
      { property: "og:title", content: "Harshan R — Data Scientist & ML Engineer" },
      {
        property: "og:description",
        content:
          "AI, ML and software projects by Harshan R — Python, TensorFlow, Flask, OpenCV, and more.",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="relative min-h-screen">
      <ParticleBackground />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Experience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
