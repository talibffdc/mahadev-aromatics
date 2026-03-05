import Link from "next/link"
import { ArrowRight, Phone } from "lucide-react"
import { Button } from "@/components/ui/button"
import { COMPANY } from "@/lib/constants"
import { AnimatedSection } from "@/components/shared/animated-section"

export function ContactCta() {
  return (
    <section className="bg-secondary/30 py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <AnimatedSection className="relative overflow-hidden rounded-2xl border border-gold/15 bg-background p-8 text-center md:p-16">
          {/* Decorative glow */}
          <div
            className="pointer-events-none absolute -top-24 left-1/2 h-48 w-96 -translate-x-1/2 rounded-full bg-gold/5 blur-3xl"
            aria-hidden="true"
          />

          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Get Started Today
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl lg:text-5xl text-balance">
            Ready to Create Your{" "}
            <span className="text-gold-gradient">Signature Fragrance?</span>
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base leading-relaxed text-muted-foreground">
            Whether you need GCMS analysis, custom fragrance development, or
            industrial-scale production, our team is ready to help.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button
              asChild
              size="lg"
              className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
            >
              <Link href="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="border-gold/30 text-foreground hover:bg-gold/10 hover:border-gold/50"
            >
              <a href={`tel:${COMPANY.phone}`}>
                <Phone className="mr-2 h-4 w-4" />
                Call Us
              </a>
            </Button>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
