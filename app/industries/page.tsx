import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight } from "lucide-react"
import { INDUSTRIES, COMPANY } from "@/lib/constants"
import { getBreadcrumbSchema } from "@/lib/seo"
import { SectionHeading } from "@/components/shared/section-heading"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "Industries We Serve",
  description: `${COMPANY.name} develops fragrances for fine perfumery, personal care, home care, cosmetics, air care, and industrial applications.`,
  alternates: {
    canonical: `${COMPANY.website}/industries`,
  },
  openGraph: {
    title: `Industries We Serve | ${COMPANY.name}`,
    description: `Fragrances for fine perfumery, personal care, home care, cosmetics, air care, and industrial applications.`,
    url: `${COMPANY.website}/industries`,
  },
}

export default function IndustriesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: COMPANY.website },
    { name: "Industries", url: `${COMPANY.website}/industries` },
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
            <span className="text-gold">Industries</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">Industries</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Fragrances for{" "}
              <span className="text-gold-gradient">Every Industry</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              We create fragrances optimized for diverse product categories and industry applications, from luxury perfumery to industrial cleaning products.
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {INDUSTRIES.map((industry) => (
              <GlassCard key={industry.slug} className="flex flex-col overflow-hidden p-0">
                <div className="relative aspect-[16/9]">
                  <Image
                    src={industry.image}
                    alt={`${industry.title} fragrance solutions - ${COMPANY.name}`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background to-transparent" />
                </div>
                <div className="flex flex-1 flex-col p-6">
                  <h2 className="font-serif text-xl font-bold text-foreground">{industry.title}</h2>
                  <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                    {industry.description}
                  </p>
                  <div className="mt-4 flex flex-wrap gap-1.5">
                    {industry.products.map((product) => (
                      <span
                        key={product}
                        className="rounded-full bg-secondary px-2.5 py-0.5 text-xs text-muted-foreground"
                      >
                        {product}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <SectionHeading
            title="Need a Fragrance for Your Industry?"
            subtitle="Whatever your product category, we have the expertise to create the perfect fragrance."
          />
          <div className="flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium">
              <Link href="/contact">
                Discuss Your Requirements
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="border-gold/30 text-foreground hover:bg-gold/10 hover:border-gold/50">
              <Link href="/products">Browse Our Products</Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
