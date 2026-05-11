import { motion } from "framer-motion";
import { SectionHeader } from "./SectionHeader";
import { FiGithub, FiCode, FiTrendingUp, FiActivity } from "react-icons/fi";

const stats = [
  { Icon: FiCode, label: "LeetCode Solved", value: "150+" },
  { Icon: FiGithub, label: "Active on GitHub", value: "Daily" },
  { Icon: FiTrendingUp, label: "Top Languages", value: "Python · Java" },
  { Icon: FiActivity, label: "Focus", value: "AI / ML" },
];

const GH = "HARSHAN-git";

export function GitHubSection() {
  return (
    <section id="github" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="GitHub & Coding"
          title={<>My <span className="text-gradient">open source</span> activity</>}
          description="Consistent contributions across ML, data and full-stack experiments."
        />

        <div className="mb-8 grid grid-cols-2 gap-4 md:grid-cols-4">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="glass glass-hover rounded-2xl p-5 text-center transition-all"
            >
              <s.Icon className="mx-auto mb-2 h-5 w-5 text-primary" />
              <div className="text-lg font-bold text-gradient">{s.value}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="glass rounded-3xl p-6"
        >
          <div className="mb-4 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <FiGithub className="h-5 w-5 text-primary" />
              <span className="font-mono text-sm">@{GH}</span>
            </div>
            <a
              href={`https://github.com/${GH}`}
              target="_blank"
              rel="noreferrer"
              className="text-xs text-primary hover:underline"
            >
              View profile →
            </a>
          </div>
          <div className="grid gap-4 md:grid-cols-2">
            <img
              src={`https://github-readme-stats.vercel.app/api?username=${GH}&show_icons=true&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=22d3ee&icon_color=22d3ee&text_color=cbd5e1`}
              alt="GitHub stats"
              loading="lazy"
              className="w-full rounded-xl"
            />
            <img
              src={`https://github-readme-stats.vercel.app/api/top-langs/?username=${GH}&layout=compact&theme=tokyonight&hide_border=true&bg_color=00000000&title_color=22d3ee&text_color=cbd5e1`}
              alt="Top languages"
              loading="lazy"
              className="w-full rounded-xl"
            />
          </div>
          <img
            src={`https://ghchart.rshah.org/22d3ee/${GH}`}
            alt="GitHub contributions"
            loading="lazy"
            className="mt-4 w-full rounded-xl bg-secondary/30 p-3"
          />
        </motion.div>
      </div>
    </section>
  );
}
