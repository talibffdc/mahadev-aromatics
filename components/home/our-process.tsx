"use client"

import { motion } from "framer-motion"
import { PROCESS_STEPS } from "@/lib/constants"
import { SectionHeading } from "@/components/shared/section-heading"

export function OurProcess() {
  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <SectionHeading
          title="Our Development Process"
          subtitle="A proven four-step methodology that transforms your vision into a market-ready fragrance with precision and efficiency."
        />
        <div className="relative">
          {/* Connecting line (desktop only) */}
          <div
            className="gold-line absolute left-0 right-0 top-8 hidden md:block"
            aria-hidden="true"
          />

          <div className="grid gap-8 md:grid-cols-4">
            {PROCESS_STEPS.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{
                  duration: 0.5,
                  delay: i * 0.15,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="relative text-center"
              >
                {/* Step number */}
                <div className="relative z-10 mx-auto flex h-16 w-16 items-center justify-center rounded-full border border-gold/30 bg-background">
                  <span className="font-serif text-xl font-bold text-gold">
                    {String(step.step).padStart(2, "0")}
                  </span>
                </div>
                <h3 className="mt-6 font-serif text-lg font-semibold text-foreground">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {step.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
