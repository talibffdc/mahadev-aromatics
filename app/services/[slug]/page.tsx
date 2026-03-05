import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { SERVICES, COMPANY } from "@/lib/constants"
import { SectionHeading } from "@/components/shared/section-heading"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import { getServiceSchema, getBreadcrumbSchema, getFAQSchema } from "@/lib/seo"

export async function generateStaticParams() {
  return SERVICES.map((service) => ({ slug: service.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) return {}

  return {
    title: service.title,
    description: service.shortDescription,
    alternates: {
      canonical: `${COMPANY.website}/services/${slug}`,
    },
    openGraph: {
      title: `${service.title} | ${COMPANY.name}`,
      description: service.shortDescription,
      url: `${COMPANY.website}/services/${slug}`,
      images: [{ url: service.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: `${service.title} | ${COMPANY.name}`,
      description: service.shortDescription,
    },
  }
}

export default async function ServicePage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const service = SERVICES.find((s) => s.slug === slug)
  if (!service) notFound()

  const serviceSchema = getServiceSchema(service)
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: COMPANY.website },
    { name: "Services", url: `${COMPANY.website}/services` },
    { name: service.title, url: `${COMPANY.website}/services/${service.slug}` },
  ])
  const faqSchema = getFAQSchema([...service.faqs])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-foreground transition-colors">Services</Link>
            <span>/</span>
            <span className="text-gold">{service.title}</span>
          </nav>
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div>
              <h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl text-balance">
                {service.title}
              </h1>
              <p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">
                {service.description}
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Button asChild size="lg" className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium">
                  <Link href="/contact">
                    Get Started
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/40">
              <Image
                src={service.image}
                alt={`${service.title} - professional fragrance service by ${COMPANY.name}`}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            title="Key Benefits"
            subtitle="What you gain from our service."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {service.benefits.map((benefit) => (
              <GlassCard key={benefit} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm text-foreground">{benefit}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            title="Industries Served"
            subtitle="We cater to a diverse range of industries with tailored fragrance solutions."
          />
          <div className="flex flex-wrap items-center justify-center gap-4">
            {service.industries.map((ind) => (
              <span
                key={ind}
                className="rounded-full border border-gold/20 bg-gold/5 px-6 py-2.5 text-sm font-medium text-foreground"
              >
                {ind}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle={`Common questions about our ${service.title.toLowerCase()} services.`}
          />
          <Accordion type="single" collapsible className="w-full">
            {service.faqs.map((faq, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border-border/50">
                <AccordionTrigger className="text-left font-serif text-foreground hover:text-gold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Interested in {service.title}?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            Contact us to discuss your requirements and get a customized proposal.
          </p>
          <div className="mt-8">
            <Button asChild size="lg" className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium">
              <Link href="/contact">
                Request a Quote
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
    </>
  )
}
