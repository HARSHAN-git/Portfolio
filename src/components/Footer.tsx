import { FiGithub, FiLinkedin, FiMail } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="border-t border-border/50 px-6 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 md:flex-row">
        <div className="text-sm text-muted-foreground">
          © {new Date().getFullYear()} <span className="text-gradient font-semibold">Harshan R</span>. Crafted with care.
        </div>
        <div className="flex items-center gap-3">
          {[
            { Icon: FiGithub, href: "https://github.com/HARSHAN-git" },
            { Icon: FiLinkedin, href: "https://linkedin.com/in/harshan-r-119459290" },
            { Icon: FiMail, href: "mailto:harshanr695@gmail.com" },
          ].map(({ Icon, href }, i) => (
            <a
              key={i}
              href={href}
              target="_blank"
              rel="noreferrer"
              className="glass glass-hover rounded-lg p-2 transition-all"
            >
              <Icon className="h-4 w-4" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
