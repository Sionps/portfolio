export function Experience() {
  const experiences = [
    {
      role: "Undergraduate Student — Information Technology",
      company: "King Mongkut's University of Technology Thonburi",
      period: "2025 - Present",
      isCurrent: true,
      achievements: [
        "Relevant coursework: Data Structures, OOP, Database Systems, Web Development, Software Engineering, Networks.",
        "GPA: 3.13 — actively building backend and full-stack projects.",
      ],
    },
    {
      role: "Project Lead / Hackathon Finalist",
      company: "LINE Hackathon & OIC InsurTech",
      period: "2025",
      isCurrent: false,
      achievements: [
        "Finalist, LINE Hackathon 2025 — Top 8% (200+ teams) for carbon-tracking prototype.",
        "Finalist, OIC InsurTech Award 2025 — Selected Top 20 for solution design.",
      ],
    },
    {
      role: "Teaching Assistant & Speaker",
      company: "KMUTT",
      period: "2024 - 2025",
      isCurrent: false,
      achievements: [
        "Teaching Assistant for Data Representation — mentored students in labs and workshops.",
        "Technical Speaker at KMUTT Open House — presented projects to 100+ visitors.",
      ],
    },
  ];

  return (
    <section id="activite" className="px-4 py-20 md:px-6 lg:py-32">
      <div className="mx-auto max-w-6xl space-y-12">
        <div>
          <h2 className="mb-4 flex items-center gap-2 text-3xl font-bold md:text-4xl">
            <span className="text-blue-400">$</span> activite
          </h2>
          <div className="h-0.5 w-24 bg-gradient-to-r from-blue-400 to-transparent"></div>
        </div>

        <div className="relative space-y-0">
          <div className="absolute left-[7px] top-4 h-[calc(100%-2rem)] w-px bg-gradient-to-b from-blue-400/60 via-border/40 to-transparent" />

          {experiences.map((exp, idx) => (
            <div key={idx} className="relative flex gap-8 pb-12">
              <div className="relative mt-1 flex-shrink-0">
                <div
                  className={`h-4 w-4 rounded-full border-2 ${
                    exp.isCurrent
                      ? "border-blue-400 bg-blue-400/30"
                      : "border-border bg-background"
                  }`}
                />
              </div>

              <div className="flex-1 pt-0.5">
                <div className="flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between sm:gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">
                      {exp.role}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {exp.company}
                    </p>
                  </div>
                  <span
                    className="whitespace-nowrap font-mono text-sm sm:text-right"
                    style={{
                      background: "linear-gradient(90deg, #60a5fa, #818cf8)",
                      WebkitBackgroundClip: "text",
                      WebkitTextFillColor: "transparent",
                    }}
                  >
                    {exp.period}
                  </span>
                </div>

                <ul className="mt-4 space-y-2">
                  {exp.achievements.map((achievement, i) => (
                    <li
                      key={i}
                      className="flex gap-3 text-sm text-muted-foreground"
                    >
                      <span className="mt-1.5 inline-block h-1.5 w-1.5 flex-shrink-0 rounded-full bg-blue-400/70" />
                      <span>{achievement}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
