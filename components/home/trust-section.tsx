import { AnimatedSection } from "@/components/shared/animated-section"

const TRUST_PILLS = [
  "Perfume Companies",
  "FMCG Brands",
  "Home Care",
  "Cosmetics",
  "Personal Care",
  "Air Care",
]

export function TrustSection() {
  return (
    <section className="py-16 md:py-20">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <AnimatedSection className="text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Trusted By Industry Leaders
          </p>
          <div className="gold-line mx-auto mt-4 w-16" />
          <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
            {TRUST_PILLS.map((pill) => (
              <span
                key={pill}
                className="rounded-full border border-border/60 px-5 py-2 text-sm text-muted-foreground transition-colors hover:border-gold/30 hover:text-foreground"
              >
                {pill}
              </span>
            ))}
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
