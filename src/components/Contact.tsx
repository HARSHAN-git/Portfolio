import { useState } from "react";
import { motion } from "framer-motion";
import { toast } from "sonner";
import { SectionHeader } from "./SectionHeader";
import { FiGithub, FiLinkedin, FiMail, FiSend, FiMapPin } from "react-icons/fi";

export function Contact() {
  const [loading, setLoading] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      toast.success("Message sent!", {
        description: "Thanks for reaching out — I'll get back to you soon.",
      });
      (e.target as HTMLFormElement).reset();
    }, 900);
  };

  return (
    <section id="contact" className="relative py-28 px-6">
      <div className="mx-auto max-w-6xl">
        <SectionHeader
          eyebrow="Contact"
          title={<>Let's <span className="text-gradient">build something</span></>}
          description="Have a project, role, or idea in mind? I'd love to hear from you."
        />

        <div className="grid gap-8 md:grid-cols-[1fr_1.2fr]">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="glass rounded-2xl p-6">
              <h3 className="font-display text-xl font-semibold">Get in touch</h3>
              <p className="mt-2 text-sm text-muted-foreground">
                Open to internships, full-time roles, and meaningful collaborations.
              </p>
              <div className="mt-5 flex items-center gap-2 text-sm text-muted-foreground">
                <FiMapPin className="text-primary" /> Coimbatore, India
              </div>
            </div>

            <div className="space-y-3">
              {[
                { Icon: FiMail, label: "harshanr695@gmail.com", href: "mailto:harshanr695@gmail.com" },
                { Icon: FiGithub, label: "github.com/HARSHAN-git", href: "https://github.com/HARSHAN-git" },
                { Icon: FiLinkedin, label: "linkedin.com/in/harshan-r-119459290", href: "https://linkedin.com/in/harshan-r-119459290" },
              ].map(({ Icon, label, href }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noreferrer"
                  className="group flex items-center gap-3 glass glass-hover rounded-xl p-4 text-sm transition-all"
                >
                  <span className="grid h-9 w-9 place-items-center rounded-lg bg-gradient-primary text-primary-foreground">
                    <Icon className="h-4 w-4" />
                  </span>
                  <span className="truncate text-muted-foreground group-hover:text-foreground">
                    {label}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            onSubmit={onSubmit}
            className="glass rounded-3xl p-6 md:p-8"
          >
            <div className="space-y-4">
              <div>
                <label className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Name
                </label>
                <input
                  required
                  name="name"
                  className="w-full rounded-xl border border-border bg-input/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Email
                </label>
                <input
                  required
                  type="email"
                  name="email"
                  className="w-full rounded-xl border border-border bg-input/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="you@example.com"
                />
              </div>
              <div>
                <label className="mb-1.5 block text-xs font-mono uppercase tracking-widest text-muted-foreground">
                  Message
                </label>
                <textarea
                  required
                  name="message"
                  rows={5}
                  className="w-full resize-none rounded-xl border border-border bg-input/50 px-4 py-3 text-sm outline-none transition-colors focus:border-primary focus:ring-2 focus:ring-primary/30"
                  placeholder="Tell me about your project or role…"
                />
              </div>

              <button
                type="submit"
                disabled={loading}
                className="group inline-flex w-full items-center justify-center gap-2 rounded-full bg-gradient-primary px-6 py-3 text-sm font-semibold text-primary-foreground glow-primary transition-transform hover:scale-[1.02] disabled:opacity-60"
              >
                {loading ? "Sending…" : "Send message"}
                <FiSend className="transition-transform group-hover:translate-x-1" />
              </button>
            </div>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
