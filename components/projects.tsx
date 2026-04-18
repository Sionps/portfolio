"use client";

import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Github,
  ExternalLink,
  Network,
  ShieldCheck,
  BarChart3,
} from "lucide-react";

const projects = [
  {
    icon: <Network className="h-8 w-8" />,
    iconBg: "bg-emerald-500/10 text-emerald-400",
    title: "Line Lowest Carbon",
    description:
      "LINE Mini App to track and estimate personal carbon footprints with AI-driven recommendations. Integrated LINE LIFF & Service Messages and an image-processing pipeline using Google Cloud Storage.",
    tags: ["Next.js", "Elysia.js", "PostgreSQL", "FastAPI", "LINE"],
    tagColors: [
      "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
      "text-sky-400 border-sky-400/30 bg-sky-400/10",
      "text-blue-400 border-blue-400/30 bg-blue-400/10",
      "text-violet-400 border-violet-400/30 bg-violet-400/10",
      "text-cyan-400 border-cyan-400/30 bg-cyan-400/10",
    ],
    hasExternal: true,
  },
  {
    icon: <ShieldCheck className="h-8 w-8" />,
    iconBg: "bg-violet-500/10 text-violet-400",
    title: "PocketLinks",
    description:
      "High-performance URL & link management service. Backend built with Go (Fiber) and Prisma, scalable PostgreSQL schema, containerized with Docker and Nginx, and JWT-based auth.",
    tags: ["Go", "Fiber", "Prisma", "PostgreSQL", "Docker"],
    tagColors: [
      "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
      "text-sky-400 border-sky-400/30 bg-sky-400/10",
      "text-purple-400 border-purple-400/30 bg-purple-400/10",
      "text-blue-400 border-blue-400/30 bg-blue-400/10",
      "text-yellow-400 border-yellow-400/30 bg-yellow-400/10",
    ],
    hasExternal: false,
  },
  {
    icon: <BarChart3 className="h-8 w-8" />,
    iconBg: "bg-orange-500/10 text-orange-400",
    title: "Coffee POS",
    description:
      "Real-time point-of-sale system with WebSocket-based updates, Stripe mobile payments integration, and a dashboard for transaction monitoring and unified payment records.",
    tags: ["Next.js", "Express", "PostgreSQL", "WebSocket", "Stripe"],
    tagColors: [
      "text-emerald-400 border-emerald-400/30 bg-emerald-400/10",
      "text-sky-400 border-sky-400/30 bg-sky-400/10",
      "text-blue-400 border-blue-400/30 bg-blue-400/10",
      "text-orange-400 border-orange-400/30 bg-orange-400/10",
      "text-pink-400 border-pink-400/30 bg-pink-400/10",
    ],
    hasExternal: true,
  },
];

export function Projects() {
  const [page, setPage] = useState(0);
  const perPage = 2;
  const totalPages = Math.ceil(projects.length / perPage);
  const visible = projects.slice(page * perPage, page * perPage + perPage);

  return (
    <section id="projects" className="px-4 py-20 md:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl space-y-10">
        {/* Header */}
        <div className="flex items-start justify-between">
          <div>
            <h2 className="mb-3 flex items-center gap-2 text-3xl font-bold md:text-4xl">
              <span className="text-accent font-mono">~/</span> Projects
            </h2>
            <p className="text-muted-foreground">
              Architecture designs and backend implementations for high-scale
              applications.
            </p>
          </div>

          <div className="flex gap-2 pt-1">
            <button
              onClick={() => setPage((p) => Math.max(0, p - 1))}
              disabled={page === 0}
              className="rounded-lg border border-border/60 p-2 text-muted-foreground transition hover:border-accent/40 hover:text-accent disabled:opacity-30"
              aria-label="Previous projects"
            >
              <ChevronLeft className="h-4 w-4" />
            </button>
            <button
              onClick={() => setPage((p) => Math.min(totalPages - 1, p + 1))}
              disabled={page >= totalPages - 1}
              className="rounded-lg border border-border/60 p-2 text-muted-foreground transition hover:border-accent/40 hover:text-accent disabled:opacity-30"
              aria-label="Next projects"
            >
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Cards */}
        <div className="grid gap-5 md:grid-cols-2">
          {visible.map((project, idx) => (
            <div
              key={project.title}
              className="flex flex-col rounded-xl border border-border/60 bg-secondary/60 transition hover:border-border"
            >
              <div className="p-7">
                {/* Icon row */}
                <div className="mb-6 flex items-start justify-between">
                  <div
                    className={`inline-flex rounded-lg p-2.5 ${project.iconBg}`}
                  >
                    {project.icon}
                  </div>
                  <div className="flex gap-1.5">
                    <a
                      href="#"
                      className="rounded-lg border border-border/60 p-1.5 text-muted-foreground transition hover:border-accent/40 hover:text-accent"
                      aria-label={`${project.title} on GitHub`}
                    >
                      <Github className="h-4 w-4" />
                    </a>
                    {project.hasExternal && (
                      <a
                        href="#"
                        className="rounded-lg border border-border/60 p-1.5 text-muted-foreground transition hover:border-accent/40 hover:text-accent"
                        aria-label={`${project.title} live link`}
                      >
                        <ExternalLink className="h-4 w-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Title */}
                <h3 className="mb-4 text-xl font-semibold">{project.title}</h3>

                {/* Divider */}
                <div className="mb-4 h-px w-full bg-border/60" />

                {/* Description */}
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {project.description}
                </p>
              </div>

              {/* Tags */}
              <div className="mt-auto flex flex-wrap gap-2 px-7 pb-7">
                {project.tags.map((tag, i) => (
                  <span
                    key={tag}
                    className={`rounded border px-2.5 py-0.5 font-mono text-xs ${project.tagColors[i]}`}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* More projects link */}
        <div className="text-center">
          <a
            href="#"
            className="inline-flex items-center gap-2 font-mono text-sm text-accent transition hover:underline"
          >
            ls -la /more-projects
            <ChevronRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
