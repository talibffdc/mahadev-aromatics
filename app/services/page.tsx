import type { Metadata } from "next"
import Link from "next/link"
import Image from "next/image"
import { ArrowUpRight, FlaskConical, Sparkles, Repeat, ShieldCheck, Factory } from "lucide-react"
import { SERVICES, COMPANY } from "@/lib/constants"
import { SectionHeading } from "@/components/shared/section-heading"
import { GlassCard } from "@/components/shared/glass-card"
import { getBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Our Services",
  description: `Explore ${COMPANY.name}'s comprehensive fragrance services including GCMS analysis, custom fragrance development, fragrance matching, raw material testing, and industrial fragrance solutions.`,
  alternates: {
    canonical: `${COMPANY.website}/services`,
  },
  openGraph: {
    title: `Our Services | ${COMPANY.name}`,
    description: `Comprehensive fragrance services from analytical testing to industrial-scale production.`,
    url: `${COMPANY.website}/services`,
  },
}

const ICON_MAP: Record<string, React.ElementType> = {
  FlaskConical,
  Sparkles,
  Repeat,
  ShieldCheck,
  Factory,
}

export default function ServicesPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: COMPANY.website },
    { name: "Services", url: `${COMPANY.website}/services` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden">
        {/* Background floral image */}
        <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
          <Image
            src="/images/floral-bg-4.jpg"
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
            <span className="text-gold">Services</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">Our Services</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Comprehensive{" "}
              <span className="text-gold-gradient">Fragrance Solutions</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              From analytical testing to industrial-scale production, we offer end-to-end fragrance
              services powered by science and refined by artistry.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8">
            {SERVICES.map((service, i) => {
              const Icon = ICON_MAP[service.icon] || FlaskConical
              return (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group block"
                >
                  <GlassCard className="overflow-hidden p-0">
                    <div className={`grid items-center gap-0 lg:grid-cols-2 ${i % 2 !== 0 ? "lg:[direction:rtl]" : ""}`}>
                      {/* Image */}
                      <div className="relative aspect-[16/9] lg:aspect-[4/3]">
                        <Image
                          src={service.image}
                          alt={`${service.title} - ${COMPANY.name} fragrance service`}
                          fill
                          sizes="(max-width: 1024px) 100vw, 50vw"
                          className="object-cover"
                          loading={i === 0 ? "eager" : "lazy"}
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-background/40" />
                      </div>
                      {/* Content */}
                      <div className="p-6 md:p-10 lg:[direction:ltr]">
                        <div className="flex items-center gap-3">
                          <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-gold/10">
                            <Icon className="h-5 w-5 text-gold" />
                          </div>
                          <ArrowUpRight className="ml-auto h-5 w-5 text-muted-foreground transition-all group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-gold" />
                        </div>
                        <h2 className="mt-4 font-serif text-2xl font-bold text-foreground md:text-3xl">
                          {service.title}
                        </h2>
                        <p className="mt-3 text-sm leading-relaxed text-muted-foreground md:text-base">
                          {service.shortDescription}
                        </p>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {service.industries.map((ind) => (
                            <span
                              key={ind}
                              className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
                            >
                              {ind}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </GlassCard>
                </Link>
              )
            })}
          </div>
        </div>
      </section>
    </>
  )
}
