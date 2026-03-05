import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, Quote } from "lucide-react"
import { CLIENTS, TESTIMONIALS, COMPANY } from "@/lib/constants"
import { getBreadcrumbSchema } from "@/lib/seo"
import { SectionHeading } from "@/components/shared/section-heading"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Our Clients",
  description: `${COMPANY.name} serves ${COMPANY.clientsServed} brands across perfumery, cosmetics, personal care, home care, and air care industries.`,
  alternates: {
    canonical: `${COMPANY.website}/clients`,
  },
  openGraph: {
    title: `Our Clients | ${COMPANY.name}`,
    description: `Serving ${COMPANY.clientsServed} brands across perfumery, cosmetics, personal care, and home care.`,
    url: `${COMPANY.website}/clients`,
  },
}

export default function ClientsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: COMPANY.website },
    { name: "Clients", url: `${COMPANY.website}/clients` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Clients</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">Our Clients</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Trusted by{" "}
              <span className="text-gold-gradient">{COMPANY.clientsServed} Brands</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              From boutique perfume houses to global FMCG manufacturers, our clients trust us
              for precision, quality, and innovation in fragrance.
            </p>
          </div>
        </div>
      </section>

      {/* Clients Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            title="Brands We Serve"
            subtitle="A selection of companies we are proud to partner with."
          />
          <div className="grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
            {CLIENTS.map((client) => (
              <GlassCard key={client.name} className="flex flex-col items-center py-8 text-center">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gold/10">
                  <span className="font-serif text-xl font-bold text-gold">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <p className="mt-3 font-serif text-sm font-semibold text-foreground">
                  {client.name}
                </p>
                <p className="mt-1 text-xs text-muted-foreground">{client.category}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            title="What Our Clients Say"
            subtitle="Hear from the brands that trust us with their fragrance needs."
          />
          <div className="grid gap-8 md:grid-cols-3">
            {TESTIMONIALS.map((t) => (
              <GlassCard key={t.author} className="flex flex-col">
                <Quote className="h-6 w-6 text-gold/40" />
                <p className="mt-4 flex-1 text-sm italic leading-relaxed text-muted-foreground">
                  {`"${t.quote}"`}
                </p>
                <div className="mt-6 border-t border-border/40 pt-4">
                  <p className="text-sm font-semibold text-foreground">{t.author}</p>
                  <p className="text-xs text-muted-foreground">{t.role}, {t.company}</p>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Join Our Growing List of Partners
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            Let us help you create fragrances that define your brand.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium">
              <Link href="/contact">
                Become a Client
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
