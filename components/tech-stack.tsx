import { Code2, Database, Cloud, Server } from "lucide-react";

export function TechStack() {
  const frontend = [
    { name: "React", pct: 80 },
    { name: "Next.js", pct: 75 },
    { name: "Tailwind CSS", pct: 70 },
    { name: "TypeScript", pct: 80 },
    { name: "LIFF", pct: 60 },
  ];

  const backend = [
    { name: "Golang", pct: 75 },
    { name: "Node.js", pct: 80 },
    { name: "Python", pct: 70 },
    { name: "Elysia.js", pct: 65 },
    { name: "Fiber", pct: 70 },
    { name: "FastAPI", pct: 70 },
    { name: "Express", pct: 65 },
  ];

  const database = [
    { name: "PostgreSQL", pct: 75 },
    { name: "Prisma", pct: 65 },
    { name: "MySQL", pct: 60 },
    { name: "Redis", pct: 65 },
  ];

  const tools = [
    { name: "Docker", pct: 75 },
    { name: "Nginx", pct: 60 },
    { name: "Google Cloud Storage", pct: 60 },
    { name: "Git", pct: 80 },
    { name: "Linux", pct: 75 },
    { name: "CI/CD", pct: 65 },
  ];

  return (
    <section id="skills" className="px-4 py-20 md:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl space-y-12">
        <div>
          <h2 className="mb-4 flex items-center gap-2 text-3xl font-bold md:text-4xl">
            <span className="text-cyan-400">#</span> Tech Stack
          </h2>
          <div className="h-1 w-24 bg-cyan-400"></div>
        </div>

        <div className="grid gap-8 md:grid-cols-4">
          {/* Frontend */}
          <div className="rounded-lg border border-border/50 bg-secondary p-8">
            <div className="mb-6 flex items-center gap-3">
              <Code2 className="h-6 w-6 text-cyan-400" />
              <h3 className="text-xl font-semibold">Frontend</h3>
            </div>

            <div className="space-y-4">
              {frontend.map((s) => (
                <div key={s.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">{s.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {s.pct}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-border">
                    <div
                      className={`h-full w-[${s.pct}%] rounded-full bg-cyan-400`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Backend */}
          <div className="rounded-lg border border-border/50 bg-secondary p-8">
            <div className="mb-6 flex items-center gap-3">
              <Server className="h-6 w-6 text-cyan-400" />
              <h3 className="text-xl font-semibold">Backend</h3>
            </div>

            <div className="space-y-4">
              {backend.map((s) => (
                <div key={s.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">{s.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {s.pct}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-border">
                    <div
                      className={`h-full w-[${s.pct}%] rounded-full bg-cyan-400`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Database */}
          <div className="rounded-lg border border-border/50 bg-secondary p-8">
            <div className="mb-6 flex items-center gap-3">
              <Database className="h-6 w-6 text-cyan-400" />
              <h3 className="text-xl font-semibold">Database</h3>
            </div>

            <div className="space-y-4">
              {database.map((s) => (
                <div key={s.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">{s.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {s.pct}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-border">
                    <div
                      className={`h-full w-[${s.pct}%] rounded-full bg-cyan-400`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Tools */}
          <div className="rounded-lg border border-border/50 bg-secondary p-8">
            <div className="mb-6 flex items-center gap-3">
              <Cloud className="h-6 w-6 text-cyan-400" />
              <h3 className="text-xl font-semibold">Tools</h3>
            </div>

            <div className="space-y-4">
              {tools.map((s) => (
                <div key={s.name}>
                  <div className="mb-2 flex items-center justify-between">
                    <span className="text-sm font-medium">{s.name}</span>
                    <span className="text-xs text-muted-foreground">
                      {s.pct}%
                    </span>
                  </div>
                  <div className="h-2 w-full rounded-full bg-border">
                    <div
                      className={`h-full w-[${s.pct}%] rounded-full bg-cyan-400`}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
