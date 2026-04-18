import { Github, Linkedin, Twitter } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 border-b border-border/50 bg-background/80 backdrop-blur-sm dark:bg-background/80">
      <div className="mx-auto max-w-6xl px-4 py-4 md:px-6">
        <div className="flex items-center justify-between">
          {/* Logo/Command */}
          <div className="font-mono text-lg font-bold text-accent md:text-xl">
            <span className="text-accent">Sion_root</span>
            <span className="text-foreground">@portfolio:~#</span>
          </div>

          {/* Navigation Links */}
          <nav className="hidden gap-8 md:flex">
            <a
              href="#about"
              className="text-sm text-muted-foreground transition hover:text-accent"
            >
              ./about.sh
            </a>
            <a
              href="#skills"
              className="text-sm text-muted-foreground transition hover:text-accent"
            >
              ./skills.sh
            </a>
            <a
              href="#projects"
              className="text-sm text-muted-foreground transition hover:text-accent"
            >
              ./projects.sh
            </a>
            <a
              href="#experience"
              className="text-sm text-muted-foreground transition hover:text-accent"
            >
              ./experience.sh
            </a>
          </nav>

          {/* CTA Button */}
          <button className="rounded-lg border border-cyan-400/50 bg-cyan-400/20 px-4 py-2 font-mono text-sm font-semibold text-cyan-300 transition hover:bg-cyan-400/30">
            connect()
          </button>
        </div>
      </div>
    </header>
  );
}
