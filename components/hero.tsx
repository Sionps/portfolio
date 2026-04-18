import { Button } from "@/components/ui/button";
import {
  Terminal,
  TypingAnimation,
  AnimatedSpan,
} from "@/components/ui/terminal";
import { Github, Mail, Send } from "lucide-react";

export function Hero() {
  return (
    <section id="about" className="space-y-12 px-4 py-20 md:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Left Side - Text */}
          <div className="space-y-6 lg:space-y-8">
            <div className="space-y-2">
              <p className="font-mono text-sm text-accent md:text-base">
                const developer = new BackendEngineer();
              </p>
            </div>

            <div className="space-y-4">
              <h1 className="text-4xl font-bold leading-tight md:text-5xl lg:text-6xl">
                Siwakon
                <br />
                <span
                  className="bg-clip-text text-transparent"
                  style={{
                    backgroundImage:
                      "linear-gradient(90deg, #4ade80 0%, #2dd4bf 40%, #38bdf8 80%, #818cf8 100%)",
                  }}
                >
                  Hongwiangjan.
                </span>
              </h1>
              <p className="text-base leading-relaxed text-muted-foreground md:text-lg">
                Specializing in scalable microservices, high-performance APIs,
                and cloud infrastructure. I turn complex logic into elegant,
                efficient, and secure backend solutions.
              </p>
            </div>

            <div className="flex flex-wrap gap-4">
              <Button
                className="gap-2 px-6 py-2 font-semibold"
                style={{
                  background: "linear-gradient(90deg, #4ade80, #38bdf8)",
                  color: "#0a0a0a",
                }}
              >
                <Send className="h-4 w-4" />
                View Source
              </Button>
              <Button
                variant="outline"
                className="gap-2 border-white/20 text-foreground hover:bg-white/5"
              >
                <Mail className="h-4 w-4" />
                Ping Me
              </Button>
            </div>

            <div className="flex gap-4 pt-2">
              <a
                href="https://github.com/Sionps"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground transition hover:text-accent"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground transition hover:text-accent"
                aria-label="LinkedIn"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.39v-1.2h-2.5v8.5h2.5v-4.34c0-.92.6-1.4 1.35-1.4.75 0 1.35.48 1.35 1.4v4.34h2.5M7 7a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3" />
                </svg>
              </a>
              <a
                href="#"
                className="text-muted-foreground transition hover:text-accent"
                aria-label="Twitter"
              >
                <svg
                  className="h-5 w-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.744l7.737-8.835L1.254 2.25H8.08l4.254 5.622 5.91-5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Side - Magic UI Terminal */}
          <div className="hidden lg:flex lg:items-center">
            <Terminal className="border-border/60 bg-secondary font-mono text-sm max-h-none w-full">
              <TypingAnimation className="text-accent">
                {"sion@system:~$ cat current_status.json"}
              </TypingAnimation>
              <AnimatedSpan className="text-muted-foreground">
                {"{"}
              </AnimatedSpan>
              <AnimatedSpan>
                <span className="text-blue-400">{'  "status"'}</span>
                <span className="text-foreground">{": "}</span>
                <span className="text-accent">
                  {'"Building scalable APIs"'}
                </span>
                <span className="text-foreground">,</span>
              </AnimatedSpan>
              <AnimatedSpan>
                <span className="text-blue-400">{'  "coffee_level"'}</span>
                <span className="text-foreground">{": "}</span>
                <span className="text-accent">95</span>
                <span className="text-foreground">,</span>
              </AnimatedSpan>
              <AnimatedSpan>
                <span className="text-blue-400">{'  "latest_tech"'}</span>
                <span className="text-foreground">{": ["}</span>
                <span className="text-accent">{'"Go"'}</span>
                <span className="text-foreground">, </span>
                <span className="text-accent">{'"TypeScript"'}</span>
                <span className="text-foreground">, </span>
                <span className="text-accent">{'"Docker"'}</span>
                <span className="text-foreground">{"]"}</span>
              </AnimatedSpan>
              <AnimatedSpan className="text-muted-foreground">
                {"}"}
              </AnimatedSpan>
              <TypingAnimation className="text-accent">
                {"user@system:~$ ./run_diagnostics.sh"}
              </TypingAnimation>
              <AnimatedSpan className="text-accent">
                {"[OK] Database connections verified"}
              </AnimatedSpan>
              <AnimatedSpan className="text-accent">
                {"[OK] Cache layer optimized"}
              </AnimatedSpan>
              <AnimatedSpan className="text-accent">
                {"[OK] Message queues active"}
              </AnimatedSpan>
              <TypingAnimation className="text-accent">
                {"user@system:~$ "}
              </TypingAnimation>
            </Terminal>
          </div>
        </div>
      </div>
    </section>
  );
}
