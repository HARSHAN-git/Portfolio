import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { FiGithub, FiExternalLink, FiStar } from "react-icons/fi";

type Project = {
  title: string;
  description: string;
  features: string[];
  stack: string[];
  featured?: boolean;
  github?: string;
  accuracy?: string;
};

const projects: Project[] = [
  {
    title: "Cross-Platform E-Commerce Sentiment Analysis",
    description:
      "ML pipeline that classifies customer sentiment across e-commerce platforms with TF-IDF vectorization and Scikit-learn models.",
    features: [
      "TF-IDF vectorization",
      "Scikit-learn models",
      "Cross-platform pipeline",
    ],
    stack: ["Python", "Scikit-learn", "NLP", "Pandas"],
    featured: true,
    accuracy: "88% accuracy",
    github: "https://github.com/HARSHAN-git",
  },
  {
    title: "AI Image Tag & Music Recommendation",
    description:
      "Browser extension that tags images with CLIP and recommends matching tracks via Spotify API, served by a Flask backend.",
    features: [
      "CLIP-based tagging",
      "Flask REST API",
      "Spotify API integration",
      "AI hashtag suggestions",
    ],
    stack: ["Python", "Flask", "CLIP", "Spotify API"],
    featured: true,
    github: "https://github.com/HARSHAN-git",
  },
  {
    title: "Indian Sign Language Detection System",
    description:
      "Real-time hand sign detection and classification with a Streamlit interface for accessibility.",
    features: ["Real-time detection", "Image preprocessing", "Streamlit UI"],
    stack: ["Python", "OpenCV", "TensorFlow", "Streamlit"],
    github: "https://github.com/HARSHAN-git",
  },
  {
    title: "Voice & Gesture-Controlled Snake Game",
    description:
      "Classic snake reimagined with AI-powered hand gesture controls and real-time prediction.",
    features: ["Hand gesture controls", "Real-time inference", "Interactive UI"],
    stack: ["Python", "TensorFlow", "OpenCV"],
    github: "https://github.com/HARSHAN-git",
  },
];

function ProjectCard({ p, i }: { p: Project; i: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: i * 0.1 }}
      whileHover={{ y: -6 }}
      className={`group relative overflow-hidden rounded-3xl glass glass-hover p-6 transition-all ${
        p.featured ? "md:col-span-2" : ""
      }`}
    >
      {p.featured && (
        <div className="absolute right-5 top-5 inline-flex items-center gap-1 rounded-full bg-gradient-primary px-3 py-1 text-xs font-semibold text-primary-foreground">
          <FiStar className="h-3 w-3" /> Featured
        </div>
      )}
      <div className="absolute -right-20 -top-20 h-48 w-48 rounded-full bg-gradient-primary opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-30" />

      <h3 className="font-display text-xl font-semibold md:text-2xl">{p.title}</h3>
      {p.accuracy && (
        <div className="mt-2 inline-block rounded-full bg-primary/10 px-3 py-0.5 text-xs font-mono text-primary">
          {p.accuracy}
        </div>
      )}
      <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{p.description}</p>

      <ul className="mt-4 space-y-1.5 text-sm">
        {p.features.map((f) => (
          <li key={f} className="flex items-start gap-2 text-muted-foreground">
            <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-primary" />
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-5 flex flex-wrap gap-2">
        {p.stack.map((s) => (
          <span
            key={s}
            className="rounded-full border border-primary/30 bg-primary/5 px-3 py-1 text-xs font-mono text-primary"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-6 flex gap-3">
        {p.github && (
          <a
            href={p.github}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full glass glass-hover px-4 py-2 text-sm transition-all"
          >
            <FiGithub /> Code
          </a>
        )}
        <a
          href="#"
          className="inline-flex items-center gap-2 rounded-full bg-gradient-primary px-4 py-2 text-sm font-semibold text-primary-foreground transition-transform hover:scale-105"
        >
          <FiExternalLink /> Demo
        </a>
      </div>
    </motion.article>
  );
}

export function Projects() {
  return (
    <section id="projects" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Projects"
          title={<>Things I've <span className="text-gradient">built</span></>}
          description="A selection of ML, AI, and full-stack projects exploring real-world problems."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {projects.map((p, i) => (
            <ProjectCard key={p.title} p={p} i={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
