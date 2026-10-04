import type { Metadata } from "next"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/shared/glass-card"
import { SectionHeading } from "@/components/shared/section-heading"
import { COMPANY } from "@/lib/constants"
import { getBreadcrumbSchema, getFAQSchema, getServiceSchema } from "@/lib/seo"

const faqs = [
  { question: "What is private label perfume manufacturing?", answer: "Private label perfume manufacturing is a B2B model in which a fragrance product is developed or selected for supply under a customer's own brand. The scope can include fragrance direction, formulation, evaluation, manufacturing, and batch supply according to the agreed project requirements." },
  { question: "What is the difference between private label and OEM perfume manufacturing?", answer: "Private label commonly refers to supplying a product for branding by another business, while OEM perfume manufacturing emphasizes manufacturing to a brand's product requirements. The exact scope depends on the brief and agreed responsibilities." },
  { question: "Do you provide white label perfume manufacturing in India?", answer: "Mahadev Aromatics supports B2B fragrance and perfume manufacturing requirements in India. Contact the team to discuss whether an existing fragrance direction, a custom development project, or another manufacturing route fits your brand." },
  { question: "Do you manufacture perfumes for startups?", answer: "Yes. Startups and emerging brands can discuss their fragrance direction, intended application, product requirements, and supply needs with our team. We recommend sharing as much detail as possible so the appropriate development or manufacturing path can be evaluated." },
  { question: "What is contract perfume manufacturing?", answer: "Contract perfume manufacturing is a B2B arrangement where a manufacturing partner produces fragrance products for another business under an agreed project scope, specifications, and supply arrangement." },
  { question: "Can you manufacture perfumes under our brand name?", answer: "Mahadev Aromatics works with businesses seeking brand-led fragrance products and B2B manufacturing support. Please contact us to confirm the suitable scope for your brand and product requirements." },
  { question: "Can you develop a custom fragrance for our brand?", answer: "Yes. Custom fragrance development can be considered when a brand needs an original fragrance direction. Learn more about our custom fragrance development service and discuss the brief with our team." },
  { question: "Where is Mahadev Aromatics located?", answer: "Mahadev Aromatics has laboratory presence in Kannauj, Jaipur, and Sonipat. Contact the team for current project and sample-submission guidance." },
  { question: "How can I request a perfume manufacturing quote?", answer: "Use our contact page to share your brand, product category, fragrance direction, application, and manufacturing requirement. The team can then review the brief and discuss the next steps." },
] as const

export const metadata: Metadata = {
  title: "Private Label & OEM Perfume Manufacturer in India | Mahadev Aromatics",
  description: "Private label, OEM, white label and contract perfume manufacturing support in India for brands, startups and businesses seeking professional fragrance manufacturing.",
  alternates: { canonical: `${COMPANY.website}services/private-label-perfume-manufacturing` },
  openGraph: {
    title: "Private Label & OEM Perfume Manufacturer in India",
    description: "B2B private label, OEM and contract perfume manufacturing support from Mahadev Aromatics.",
    url: `${COMPANY.website}services/private-label-perfume-manufacturing`,
    type: "website",
  },
}

const service = {
  title: "Private Label & OEM Perfume Manufacturing",
  description: "B2B private label, OEM, white label, and contract perfume manufacturing support for brands and businesses in India.",
  slug: "private-label-perfume-manufacturing",
  image: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=1200&q=80",
}

function JsonLd({ data }: { data: Record<string, unknown> }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}

export default function PrivateLabelPerfumeManufacturingPage() {
  return (
    <main>
      <JsonLd data={getServiceSchema(service)} />
      <JsonLd data={getBreadcrumbSchema([
        { name: "Home", url: COMPANY.website },
        { name: "Services", url: `${COMPANY.website}services` },
        { name: service.title, url: `${COMPANY.website}services/${service.slug}` },
      ])} />
      <JsonLd data={getFAQSchema(faqs as unknown as { question: string; answer: string }[])} />

      <section className="relative overflow-hidden bg-primary py-24 text-primary-foreground md:py-32">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="max-w-4xl">
            <p className="mb-5 text-sm font-medium uppercase tracking-[0.22em] text-gold">B2B Fragrance Manufacturing</p>
            <h1 className="font-serif text-4xl font-semibold leading-tight md:text-6xl">Private Label &amp; OEM Perfume Manufacturing</h1>
            <p className="mt-6 max-w-3xl text-lg leading-relaxed text-primary-foreground/80">Mahadev Aromatics works with brands and businesses seeking private-label, OEM, white-label, and contract perfume manufacturing support in India.</p>
            <div className="mt-9 flex flex-col gap-3 sm:flex-row">
              <Button asChild size="lg"><Link href="/contact">Request a Quote <ArrowRight data-icon="inline-end" /></Link></Button>
              <Button asChild size="lg" variant="outline" className="border-primary-foreground/30 bg-transparent text-primary-foreground hover:bg-primary-foreground/10"><Link href="/contact">Contact Our Team</Link></Button>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading title="Private Label Perfume Manufacturing" subtitle="A practical B2B route from fragrance direction to brand-ready product supply." />
          <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
            <p>Private-label perfume manufacturing allows a business to bring fragrance products to market under its own brand while working with an experienced fragrance partner. The project may begin with a brand-led scent brief, fragrance selection, or formulation discussion and move toward evaluation, manufacturing, and B2B batch supply.</p>
            <p>The appropriate scope depends on the product and requirements. Mahadev Aromatics can discuss fragrance development, compounding, production, analytical support, and supply considerations without assuming that every project requires the same services.</p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading title="OEM, White Label & Contract Manufacturing" subtitle="Manufacturing support for businesses building or expanding fragrance products." />
          <div className="grid gap-4 md:grid-cols-3">
            {[
              ["OEM Perfume Manufacturing", "OEM manufacturing supports businesses that want fragrance products developed or manufactured under their own brand requirements and product direction."],
              ["White Label Perfume Manufacturing", "White-label projects can be a route to brand customization and B2B production when a business wants to offer fragrance products without developing every element from the beginning."],
              ["Contract Perfume Manufacturing", "Contract and third-party perfume manufacturing provide a structured B2B relationship for producing fragrance products against an agreed brief, specification, and supply scope."],
            ].map(([title, text]) => <GlassCard key={title}><h2 className="font-serif text-2xl font-semibold text-foreground">{title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{text}</p></GlassCard>)}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading title="Who We Work With" subtitle="B2B fragrance support for businesses at different stages of product development." />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {["Emerging perfume brands", "Established fragrance brands", "Startups launching perfume products", "Cosmetics and personal-care businesses", "Retail and private-label businesses", "Businesses developing new fragrance products"].map((item) => <GlassCard key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><p className="text-sm text-foreground">{item}</p></GlassCard>)}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading title="Fragrance & Manufacturing Capabilities" subtitle="Connected technical support for fragrance brands and B2B product teams." />
          <div className="flex flex-col gap-5 text-base leading-relaxed text-muted-foreground">
            <p>Mahadev Aromatics brings together fragrance development, formulation, fragrance compounding, production, quality-control support, and analytical expertise for fragrance applications. Our wider service offering includes <Link className="font-medium text-gold underline-offset-4 hover:underline" href="/services/industrial-fragrance-solutions">industrial fragrance solutions</Link> for home care, personal care, air care, and industrial products.</p>
            <p>For projects that need a new scent direction, <Link className="font-medium text-gold underline-offset-4 hover:underline" href="/services/custom-fragrance-development">custom fragrance development</Link> can be considered separately from manufacturing. Analytical and quality questions can also be discussed through <Link className="font-medium text-gold underline-offset-4 hover:underline" href="/services/gcms-glc-analysis">GCMS &amp; GLC analysis</Link> and <Link className="font-medium text-gold underline-offset-4 hover:underline" href="/services/raw-material-testing">raw material testing</Link>.</p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading title="Industries & Applications" subtitle="Fragrance manufacturing support across the applications represented by our business." />
          <div className="grid gap-4 md:grid-cols-3">
            {["Fine Perfumery", "Cosmetics", "Personal Care", "Home Care", "Air Care", "Industrial fragrance applications"].map((item) => <GlassCard key={item}><h3 className="font-serif text-xl font-semibold text-foreground">{item}</h3><p className="mt-2 text-sm text-muted-foreground">Explore fragrance development, evaluation, and B2B supply considerations for {item.toLowerCase()} products.</p></GlassCard>)}
          </div>
          <p className="mt-8 text-center text-muted-foreground">See our broader <Link className="font-medium text-gold underline-offset-4 hover:underline" href="/industries">industries</Link> and <Link className="font-medium text-gold underline-offset-4 hover:underline" href="/services">services</Link>.</p>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading title="A Clear B2B Process" subtitle="A practical sequence that can be adapted to the agreed project scope." />
          <div className="grid gap-4 sm:grid-cols-2">
            {["Share your requirements", "Discuss fragrance and product direction", "Development or product selection", "Sampling and evaluation", "Manufacturing planning", "Production and quality control", "Dispatch and B2B supply"].map((step, index) => <GlassCard key={step} className="flex items-start gap-4"><span className="font-serif text-2xl font-semibold text-gold">{String(index + 1).padStart(2, "0")}</span><p className="pt-1 text-sm font-medium text-foreground">{step}</p></GlassCard>)}
          </div>
          <p className="mt-8 text-center text-sm text-muted-foreground">Our laboratory presence includes Kannauj, Jaipur, and Sonipat. Contact us to discuss current project and sample-submission guidance.</p>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading title="Frequently Asked Questions" subtitle="Answers for brands considering private-label and OEM perfume manufacturing." />
          <Accordion type="single" collapsible className="w-full">{faqs.map((faq, index) => <AccordionItem key={faq.question} value={`faq-${index}`}><AccordionTrigger>{faq.question}</AccordionTrigger><AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent></AccordionItem>)}</Accordion>
        </div>
      </section>

      <section className="bg-primary py-16 text-center text-primary-foreground md:py-20">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <h2 className="font-serif text-3xl font-semibold md:text-4xl">Planning a branded fragrance product?</h2>
          <p className="mt-4 text-primary-foreground/80">Share your product and manufacturing requirements with Mahadev Aromatics.</p>
          <Button asChild size="lg" className="mt-7"><Link href="/contact">Contact Mahadev Aromatics <ArrowRight data-icon="inline-end" /></Link></Button>
        </div>
      </section>
    </main>
  )
}

export const revalidate = 3600
