import { Github, Linkedin, Twitter } from 'lucide-react'

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-secondary/50 py-8 md:py-12">
      <div className="mx-auto max-w-6xl px-4 md:px-6">
        <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
          {/* Copyright */}
          <div className="text-center text-sm text-muted-foreground md:text-left">
            © 2024 Backend Dev. All rights reserved.
          </div>

          {/* Social Links */}
          <div className="flex gap-4">
            <a href="#" className="rounded-lg border border-accent/30 p-2 text-accent transition hover:bg-accent/10">
              <Github className="h-5 w-5" />
            </a>
            <a href="#" className="rounded-lg border border-accent/30 p-2 text-accent transition hover:bg-accent/10">
              <Linkedin className="h-5 w-5" />
            </a>
            <a href="#" className="rounded-lg border border-accent/30 p-2 text-accent transition hover:bg-accent/10">
              <Twitter className="h-5 w-5" />
            </a>
          </div>

          {/* System Status */}
          <div className="flex items-center gap-2 text-xs text-muted-foreground">
            <div className="h-2 w-2 rounded-full bg-green-500"></div>
            <span>System online</span>
          </div>
        </div>
      </div>
    </footer>
  )
}
