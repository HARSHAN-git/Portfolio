import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiArrowRight } from "react-icons/fi";

const roles = ["Data Scientist", "ML Engineer", "Software Developer", "AI Enthusiast"];

const RESUME_SHARE_LINK = "https://drive.google.com/file/d/1LwK9txUxmqUAw1zMnhmqm5GNqbFD4t8k/view?usp=drive_link";

function getDriveDownloadUrl(url: string) {
  const directIdMatch = url.match(/\/d\/([^/]+)/);
  if (directIdMatch) {
    return `https://drive.google.com/uc?export=download&id=${directIdMatch[1]}`;
  }

  try {
    const parsed = new URL(url);
    const id = parsed.searchParams.get("id");
    if (id) {
      return `https://drive.google.com/uc?export=download&id=${id}`;
    }
  } catch {
    // ignore invalid URL and fallback to original
  }

  return url;
}

const RESUME_DOWNLOAD_URL = getDriveDownloadUrl(RESUME_SHARE_LINK);

function TypeRoles() {
  const [idx, setIdx] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[idx];
    const t = setTimeout(() => {
      if (!deleting) {
        setText(current.slice(0, text.length + 1));
        if (text.length + 1 === current.length) setTimeout(() => setDeleting(true), 1400);
      } else {
        setText(current.slice(0, text.length - 1));
        if (text.length - 1 === 0) {
          setDeleting(false);
          setIdx((idx + 1) % roles.length);
        }
      }
    }, deleting ? 40 : 80);
    return () => clearTimeout(t);
  }, [text, deleting, idx]);

  return (
    <span className="text-gradient font-mono">
      {text}
      <span className="animate-blink">|</span>
    </span>
  );
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center justify-center px-6 pt-24">
      <div className="mx-auto grid max-w-6xl items-center gap-12 md:grid-cols-[1.2fr_1fr]">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="mb-5 inline-flex items-center gap-2 glass rounded-full px-4 py-1.5 text-xs">
            <span className="h-2 w-2 animate-pulse rounded-full bg-primary" />
            <span className="text-muted-foreground">Available for opportunities</span>
          </div>
          <h1 className="text-5xl font-bold leading-[1.05] md:text-7xl">
            Hi, I'm <span className="text-gradient">Harshan R</span>
          </h1>
          <div className="mt-4 text-2xl md:text-3xl font-semibold text-muted-foreground">
            I'm a <TypeRoles />
          </div>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
            Passionate about building AI-powered applications, machine learning models, and
            scalable software solutions that solve real-world problems.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="#projects"
              className="group inline-flex items-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-primary transition-transform hover:scale-105"
            >
              View Projects
              <FiArrowRight className="transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href={RESUME_DOWNLOAD_URL}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 rounded-full glass glass-hover px-6 py-3 text-sm font-semibold transition-all"
            >
              <FiDownload /> Download Resume
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full glass glass-hover px-6 py-3 text-sm font-semibold transition-all"
            >
              Contact Me
            </a>
          </div>

          <div className="mt-8 flex items-center gap-3">
            {[
              { Icon: FiGithub, href: "https://github.com/HARSHAN-git", label: "GitHub" },
              { Icon: FiLinkedin, href: "https://linkedin.com/in/harshan-r-119459290", label: "LinkedIn" },
              { Icon: FiMail, href: "mailto:harshanr695@gmail.com", label: "Email" },
            ].map(({ Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noreferrer"
                aria-label={label}
                className="glass glass-hover rounded-xl p-3 transition-all hover:-translate-y-0.5"
              >
                <Icon className="h-5 w-5" />
              </a>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.2 }}
          className="relative mx-auto h-[380px] w-[380px] max-w-full"
        >
          <div className="absolute inset-0 rounded-full bg-gradient-primary opacity-30 blur-3xl animate-float" />
          <div className="relative h-full w-full">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
              className="absolute inset-0 rounded-full border border-primary/30"
            />
            <motion.div
              animate={{ rotate: -360 }}
              transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
              className="absolute inset-8 rounded-full border border-accent/30 border-dashed"
            />
            <div className="absolute inset-16 rounded-full glass flex items-center justify-center overflow-hidden">
              <div className="text-center">
                <div className="font-mono text-6xl text-gradient">{'</>'} </div>
                <div className="mt-2 font-display text-lg">AI · ML · Code</div>
              </div>
            </div>
            {/* Orbiting dots */}
            {[0, 60, 120, 180, 240, 300].map((deg) => (
              <motion.div
                key={deg}
                className="absolute left-1/2 top-1/2 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary glow-primary"
                style={{
                  transform: `rotate(${deg}deg) translateY(-180px)`,
                }}
                animate={{
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: deg / 200,
                }}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
