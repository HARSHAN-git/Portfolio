import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { FiCode, FiCpu, FiUsers, FiAward } from "react-icons/fi";

const stats = [
  { Icon: FiCode, value: "150+", label: "LeetCode Solved" },
  { Icon: FiCpu, value: "10+", label: "ML Projects" },
  { Icon: FiAward, value: "4+", label: "Certifications" },
  { Icon: FiUsers, value: "RHCSA", label: "Certified" },
];

const timeline = [
  {
    year: "Now",
    title: "Aspiring Data Scientist & ML Engineer",
    text: "Building AI-driven applications and ML pipelines that turn data into impact.",
  },
  {
    year: "Focus",
    title: "Python · Flask · ML · Data Analytics",
    text: "Hands-on with TensorFlow, Scikit-learn, OpenCV and modern data tooling.",
  },
  {
    year: "Mission",
    title: "Solving real-world problems",
    text: "Bridging research and production with scalable, recruiter-friendly products.",
  },
  {
    year: "Beyond",
    title: "Leadership & Collaboration",
    text: "Active in dev clubs and CSE department associations, leading from the front.",
  },
];

export function About() {
  return (
    <section id="about" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="About Me"
          title={<>Curious mind, <span className="text-gradient">crafted code</span></>}
          description="Aspiring Data Scientist & Software Engineer based in Coimbatore, India — turning ideas into intelligent, scalable systems."
        />

        <div className="grid gap-10 md:grid-cols-[1fr_1.1fr] md:items-start">
          {/* Timeline */}
          <div className="relative">
            <div className="absolute left-3 top-2 bottom-2 w-px bg-gradient-to-b from-primary via-accent to-transparent" />
            <div className="space-y-6">
              {timeline.map((t, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -30 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative pl-10"
                >
                  <span className="absolute left-1 top-2 h-4 w-4 rounded-full bg-gradient-primary glow-primary" />
                  <div className="glass glass-hover rounded-2xl p-5 transition-all">
                    <div className="mb-1 text-xs font-mono uppercase tracking-widest text-primary">
                      {t.year}
                    </div>
                    <h3 className="font-semibold">{t.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">{t.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Stats + bio */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="glass rounded-2xl p-6"
            >
              <p className="leading-relaxed text-muted-foreground">
                I'm passionate about <span className="text-foreground font-medium">Machine Learning</span>,{" "}
                <span className="text-foreground font-medium">AI research</span>, and shipping
                impactful software. I love combining data, models, and clean engineering to build
                products that make a difference. Outside of code, I enjoy collaborating in
                technical clubs and mentoring peers.
              </p>
            </motion.div>

            <div className="grid grid-cols-2 gap-4">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  className="glass glass-hover rounded-2xl p-5 text-center transition-all"
                >
                  <s.Icon className="mx-auto mb-2 h-6 w-6 text-primary" />
                  <div className="text-2xl font-bold text-gradient">{s.value}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
