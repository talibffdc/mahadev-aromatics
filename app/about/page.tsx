import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Award, Users, FlaskConical, Globe } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { getBreadcrumbSchema } from "@/lib/seo"
import { SectionHeading } from "@/components/shared/section-heading"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"

export const metadata: Metadata = {
  title: "About Us",
  description: `Learn about ${COMPANY.name}, a leading fragrance development laboratory in Kannauj, India. ${COMPANY.experience} years of expertise in GCMS analysis, custom fragrance creation, and aroma chemistry.`,
  alternates: {
    canonical: `${COMPANY.website}/about`,
  },
  openGraph: {
    title: `About ${COMPANY.name}`,
    description: `${COMPANY.experience} years of excellence in fragrance development, GCMS analysis, and custom perfumery solutions.`,
    url: `${COMPANY.website}/about`,
  },
  twitter: {
    card: "summary_large_image",
    title: `About ${COMPANY.name}`,
    description: `${COMPANY.experience} years of excellence in fragrance development.`,
  },
}

const STATS = [
  { label: "Years of Experience", value: COMPANY.experience, icon: Award },
  { label: "Clients Served", value: COMPANY.clientsServed, icon: Users },
  { label: "Fragrances Developed", value: COMPANY.fragrancesDeveloped, icon: FlaskConical },
  { label: "Countries Served", value: "15+", icon: Globe },
]

const MILESTONES = [
  { year: "2005", title: "Founded in Kannauj", description: "Established as a boutique fragrance laboratory in the perfume capital of India." },
  { year: "2010", title: "GCMS Lab Commissioned", description: "Invested in state-of-the-art GCMS and GLC instrumentation for analytical services." },
  { year: "2015", title: "ISO 9001 Certification", description: "Achieved ISO 9001:2015 certification, reinforcing our commitment to quality." },
  { year: "2018", title: "Industrial Scale Expansion", description: "Expanded production capacity to 50 metric tons per month with new compounding facility." },
  { year: "2022", title: "IFRA Compliance", description: "Full IFRA compliance achieved across all fragrance formulations for global export." },
  { year: "2025", title: "500+ Clients Milestone", description: "Crossed the milestone of serving over 500 brands across India and international markets." },
]

export default function AboutPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: COMPANY.website },
    { name: "About", url: `${COMPANY.website}/about` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative flex items-center overflow-hidden pt-32 pb-20 md:pt-40 md:pb-28">
        {/* Background floral image */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/floral-bg-1.jpg"
            alt=""
            fill
            className="object-cover opacity-[0.08]"
            priority={false}
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-background/90 via-background/80 to-secondary/30" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">About</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">
              About Us
            </p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Crafting Fragrances With{" "}
              <span className="text-gold-gradient">Science & Soul</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Founded in {COMPANY.founded} in Kannauj, the perfume capital of India, {COMPANY.name} has grown from a small laboratory into a
              trusted partner for fragrance brands worldwide.
            </p>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
            {STATS.map((stat) => (
              <GlassCard key={stat.label} className="text-center">
                <stat.icon className="mx-auto h-6 w-6 text-gold" />
                <p className="mt-3 font-serif text-3xl font-bold text-foreground md:text-4xl">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-muted-foreground">{stat.label}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Our Story */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <SectionHeading
                title="Our Story"
                subtitle="From a vision to a globally recognized fragrance laboratory."
                align="left"
              />
              <div className="space-y-4 text-sm leading-relaxed text-muted-foreground md:text-base">
                <p>
                  {COMPANY.name} was born from a passion for the art and science of fragrance. In the
                  heartland of Indian perfumery, Kannauj, our founders envisioned a laboratory that would
                  bridge traditional attar-making craftsmanship with modern analytical chemistry.
                </p>
                <p>
                  Over {COMPANY.experience} years, we have evolved into a full-service fragrance house
                  offering everything from GCMS analysis and raw material testing to bespoke fragrance
                  creation and industrial-scale production. Our commitment to precision, creativity, and
                  client satisfaction drives everything we do.
                </p>
                <p>
                  Today, we serve {COMPANY.clientsServed} brands across India and 15+ countries, developing
                  fragrances for fine perfumery, personal care, home care, cosmetics, and industrial
                  applications.
                </p>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/40">
              <Image
                src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80"
                alt="Premium essential oils and botanical ingredients for fragrance development at Mahadev Aromatic"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            title="Certifications & Compliance"
            subtitle="Accredited and compliant with international standards for quality and safety."
          />
          <div className="grid gap-6 md:grid-cols-3">
            {COMPANY.labCertifications.map((cert) => (
              <GlassCard key={cert} className="text-center">
                <Award className="mx-auto h-8 w-8 text-gold" />
                <p className="mt-4 font-serif text-lg font-semibold text-foreground">{cert}</p>
                <p className="mt-2 text-sm text-muted-foreground">
                  Internationally recognized certification ensuring the highest standards.
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            title="Our Journey"
            subtitle="Key milestones in our growth from a boutique lab to an industry-leading fragrance house."
          />
          <div className="relative mx-auto max-w-3xl">
            {/* Vertical line */}
            <div className="absolute left-4 top-0 bottom-0 w-px bg-gold/20 md:left-1/2" aria-hidden="true" />
            <div className="space-y-12">
              {MILESTONES.map((m, i) => (
                <div key={m.year} className={`relative flex items-start gap-6 md:gap-12 ${i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}>
                  <div className="hidden flex-1 md:block" />
                  {/* Dot */}
                  <div className="absolute left-4 z-10 flex h-3 w-3 -translate-x-1/2 items-center justify-center rounded-full bg-gold md:static md:translate-x-0 md:h-4 md:w-4 md:shrink-0" />
                  <div className="flex-1 pl-8 md:pl-0">
                    <span className="text-sm font-medium text-gold">{m.year}</span>
                    <h3 className="mt-1 font-serif text-lg font-semibold text-foreground">{m.title}</h3>
                    <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{m.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Ready to Partner With Us?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            Let us bring your fragrance vision to life with our expertise and state-of-the-art facilities.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Button asChild size="lg" className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium">
              <Link href="/contact">
                Book a Consultation
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
