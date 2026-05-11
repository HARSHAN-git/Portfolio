import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import {
  SiPython, SiTensorflow, SiOpencv, SiScikitlearn, SiFlask, SiHtml5, SiCss,
  SiGit, SiLinux, SiMysql, SiPandas,
} from "react-icons/si";
import { FaJava, FaChartBar } from "react-icons/fa";

const categories = [
  {
    name: "Programming Languages",
    skills: [
      { name: "Python", level: 92, Icon: SiPython },
      { name: "Java", level: 78, Icon: FaJava },
    ],
  },
  {
    name: "Machine Learning & AI",
    skills: [
      { name: "TensorFlow", level: 85, Icon: SiTensorflow },
      { name: "Scikit-learn", level: 88, Icon: SiScikitlearn },
      { name: "OpenCV", level: 82, Icon: SiOpencv },
      { name: "NLP / Pandas", level: 86, Icon: SiPandas },
    ],
  },
  {
    name: "Web Technologies",
    skills: [
      { name: "Flask", level: 84, Icon: SiFlask },
      { name: "HTML", level: 90, Icon: SiHtml5 },
      { name: "CSS", level: 82, Icon: SiCss },
    ],
  },
  {
    name: "Tools & Platforms",
    skills: [
      { name: "Git", level: 88, Icon: SiGit },
      { name: "Linux", level: 86, Icon: SiLinux },
      { name: "SQL", level: 80, Icon: SiMysql },
      { name: "Power BI", level: 76, Icon: FaChartBar },
    ],
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Skills"
          title={<>Tools that <span className="text-gradient">power my work</span></>}
          description="A focused stack for building, training, and shipping data-driven products."
        />

        <div className="grid gap-6 md:grid-cols-2">
          {categories.map((cat, ci) => (
            <motion.div
              key={cat.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: ci * 0.1 }}
              className="glass glass-hover rounded-2xl p-6 transition-all"
            >
              <h3 className="mb-5 font-display text-lg font-semibold">
                <span className="text-gradient">{cat.name}</span>
              </h3>
              <div className="space-y-4">
                {cat.skills.map((s, i) => (
                  <div key={s.name}>
                    <div className="mb-1.5 flex items-center justify-between text-sm">
                      <span className="flex items-center gap-2">
                        <s.Icon className="h-4 w-4 text-primary" />
                        {s.name}
                      </span>
                      <span className="font-mono text-xs text-muted-foreground">{s.level}%</span>
                    </div>
                    <div className="h-1.5 overflow-hidden rounded-full bg-secondary">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${s.level}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 + i * 0.1, ease: "easeOut" }}
                        className="h-full rounded-full bg-gradient-primary"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
