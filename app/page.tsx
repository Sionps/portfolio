"use client";

import { Header } from "../components/header";
import { Hero } from "../components/hero";
import { TechStack } from "../components/tech-stack";
import { Experience } from "../components/experience";
import { Projects } from "../components/projects";
import { Contact } from "../components/contact";
import { Footer } from "../components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <hr className="border-border/30" />
        <TechStack />
        <hr className="border-border/30" />
        <Experience />
        <hr className="border-border/30" />
        <Projects />
        <hr className="border-border/30" />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
