'use client'

import { useState } from 'react'
import { Send } from 'lucide-react'

export function Contact() {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({ name: '', email: '', message: '' })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    await new Promise((resolve) => setTimeout(resolve, 2000))
    setIsSubmitting(false)
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="connect" className="px-4 py-24 md:px-6 lg:py-32">
      <div className="mx-auto max-w-2xl">
        {/* Centered heading */}
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Initialize Connection</h2>
          <p className="text-muted-foreground leading-relaxed">
            Currently open for new opportunities. Whether you have a question or just want to say hi, I&apos;ll
            <br className="hidden sm:block" />
            try my best to get back to you!
          </p>
        </div>

        {/* Form card */}
        <div className="rounded-lg border border-border/40 bg-card p-8 md:p-10">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Name + Email row */}
            <div className="grid gap-6 md:grid-cols-2">
              <div className="space-y-2">
                <label className="font-mono text-sm text-muted-foreground">var name =</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder='"John Doe"'
                  className="w-full rounded-md border border-border/50 bg-background/60 px-4 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-border focus:outline-none focus:ring-1 focus:ring-border/50"
                />
              </div>
              <div className="space-y-2">
                <label className="font-mono text-sm text-muted-foreground">var email =</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder='"john@domain.com"'
                  className="w-full rounded-md border border-border/50 bg-background/60 px-4 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-border focus:outline-none focus:ring-1 focus:ring-border/50"
                />
              </div>
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label className="font-mono text-sm text-muted-foreground">var message =</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows={5}
                placeholder='"Hello..."'
                className="w-full rounded-md border border-border/50 bg-background/60 px-4 py-2.5 font-mono text-sm text-foreground placeholder:text-muted-foreground/50 focus:border-border focus:outline-none focus:ring-1 focus:ring-border/50 resize-none"
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex w-full items-center justify-center gap-2 rounded-md bg-[#4ade80] py-3.5 font-mono font-semibold text-[#0a0a0a] transition hover:bg-[#22c55e] disabled:opacity-60"
            >
              {isSubmitting ? (
                <>
                  <span className="h-4 w-4 animate-spin rounded-full border-2 border-[#0a0a0a] border-t-transparent" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  send_request()
                </>
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}
