"use client"

import { CLIENTS } from "@/lib/constants"
import { AnimatedSection } from "@/components/shared/animated-section"

export function ClientsSection() {
  const duplicatedClients = [...CLIENTS, ...CLIENTS]

  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <AnimatedSection className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Our Clients & Partners
          </p>
          <div className="gold-line mx-auto mt-4 w-16" />
        </AnimatedSection>

        {/* Marquee */}
        <div className="relative mt-12 overflow-hidden">
          {/* Fade edges */}
          <div className="pointer-events-none absolute left-0 top-0 z-10 h-full w-24 bg-gradient-to-r from-background to-transparent" />
          <div className="pointer-events-none absolute right-0 top-0 z-10 h-full w-24 bg-gradient-to-l from-background to-transparent" />

          <div className="flex animate-marquee items-center gap-12 whitespace-nowrap">
            {duplicatedClients.map((client, i) => (
              <div
                key={`${client.name}-${i}`}
                className="flex h-16 shrink-0 items-center justify-center rounded-lg border border-border/40 bg-secondary/50 px-8"
              >
                <span className="font-serif text-sm font-medium text-muted-foreground">
                  {client.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
