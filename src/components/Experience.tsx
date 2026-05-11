import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { FiUsers, FiAward, FiBriefcase, FiCode } from "react-icons/fi";

const experiences = [
  {
    Icon: FiBriefcase,
    role: "Planning Committee Member",
    org: "Software Development Club",
    text: "Coordinating technical events, hackathons and developer-focused initiatives across the campus community.",
  },
  {
    Icon: FiUsers,
    role: "Member",
    org: "GENIRAL — CSE Department Association",
    text: "Collaborating with peers on workshops, tech talks and student-led innovation programs.",
  },
];

const certs = [
  { title: "RHCSA", subtitle: "Red Hat Certified", Icon: FiAward },
  { title: "AWS Skill Builder", subtitle: "Machine Learning", Icon: FiAward },
  { title: "Full Stack Web Dev", subtitle: "Internship Completion", Icon: FiCode },
  { title: "Data Visualization", subtitle: "Forage", Icon: FiAward },
];

export function Experience() {
  return (
    <section id="experience" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Experience & Certifications"
          title={<>Leadership, learning & <span className="text-gradient">credentials</span></>}
        />

        <div className="grid gap-10 lg:grid-cols-2">
          {/* Experience timeline */}
          <div>
            <h3 className="mb-6 font-display text-xl font-semibold">Leadership</h3>
            <div className="relative space-y-5 border-l border-primary/30 pl-6">
              {experiences.map((e, i) => (
                <motion.div
                  key={e.role}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative glass glass-hover rounded-2xl p-5 transition-all"
                >
                  <span className="absolute -left-[33px] top-6 grid h-6 w-6 place-items-center rounded-full bg-gradient-primary glow-primary">
                    <e.Icon className="h-3 w-3 text-primary-foreground" />
                  </span>
                  <div className="text-sm font-mono text-primary">{e.org}</div>
                  <div className="mt-1 font-semibold">{e.role}</div>
                  <p className="mt-2 text-sm text-muted-foreground">{e.text}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div>
            <h3 className="mb-6 font-display text-xl font-semibold">Certifications</h3>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              {certs.map((c, i) => (
                <motion.div
                  key={c.title}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.08 }}
                  whileHover={{ y: -4 }}
                  className="group relative overflow-hidden glass glass-hover rounded-2xl p-5 transition-all"
                >
                  <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-gradient-primary opacity-10 blur-2xl transition-opacity group-hover:opacity-30" />
                  <c.Icon className="mb-3 h-7 w-7 text-primary" />
                  <div className="font-semibold">{c.title}</div>
                  <div className="mt-1 text-xs text-muted-foreground">{c.subtitle}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
