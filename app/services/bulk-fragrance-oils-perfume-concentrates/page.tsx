import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Button } from "@/components/ui/button"
import { GlassCard } from "@/components/shared/glass-card"
import { SectionHeading } from "@/components/shared/section-heading"
import { COMPANY } from "@/lib/constants"
import { getBreadcrumbSchema, getFAQSchema, getServiceSchema } from "@/lib/seo"

const URL = `${COMPANY.website}services/bulk-fragrance-oils-perfume-concentrates`

const faqs = [
  ["What is a bulk fragrance oil supplier?", "A bulk fragrance oil supplier provides fragrance oils, perfume concentrates, or fragrance compounds for businesses that use them in perfumery, cosmetics, personal care, home care, air care, and industrial applications."],
  ["Do you supply perfume concentrates in bulk?", "Mahadev Aromatics discusses B2B fragrance oils, perfume concentrates, and application-specific fragrance requirements with businesses. Contact the team with your requirement so the appropriate supply conversation can be evaluated."],
  ["Do you manufacture fragrance oils in India?", "Mahadev Aromatics provides fragrance production, compounding, and supply support from India for B2B and industrial fragrance applications. Service scope is discussed according to the project requirement."],
  ["What industries use bulk fragrance oils?", "Bulk fragrance materials and concentrates can support fine perfumery, cosmetics, personal care, home care, air care, and industrial fragrance applications."],
  ["Can fragrance concentrates be developed for specific applications?", "Application-specific requirements can be discussed with the team. Where a new fragrance direction is required, explore our custom fragrance development service."],
  ["Do you provide fragrance samples before bulk supply?", "Sample and evaluation guidance depends on the requirement and project scope. Contact Mahadev Aromatics to discuss the fragrance, application, and next step."],
  ["What is the difference between fragrance oil and perfume concentrate?", "Both terms can describe fragrance compositions supplied for product development or manufacturing. The appropriate material depends on the intended application, formulation, and technical requirement."],
  ["Can you supply fragrance materials for cosmetics and personal care?", "Yes, fragrance work at Mahadev Aromatics supports cosmetics and personal-care applications, alongside perfumery, home care, air care, and industrial requirements."],
  ["Can you provide custom fragrance development?", "Yes. Businesses with a new or application-specific fragrance brief can explore custom fragrance development separately from standard bulk fragrance supply."],
  ["Do you also offer private label perfume manufacturing?", "Yes, private label and OEM perfume manufacturing is a separate service for businesses seeking finished branded perfume products rather than fragrance ingredients or concentrates."],
] as const

const applications = [
  ["Fine Perfumery", "Perfume brands and fragrance businesses can discuss fragrance oils and concentrates for fine fragrance products and signature scent directions."],
  ["Cosmetics", "Fragrance materials can support cosmetic product development where the intended base and sensory experience require an appropriate fragrance direction."],
  ["Personal Care", "B2B fragrance supply can support products such as body wash, shampoo, deodorant, and other personal-care applications."],
  ["Home Care", "Fragrance compounds and concentrates can be considered for detergents, fabric care, surface cleaners, and household products."],
  ["Air Care", "Fragrance materials can support air fresheners, candles, diffusers, and related environmental scenting products."],
  ["Industrial", "Industrial businesses and FMCG manufacturers can discuss compounding, supply, and technical requirements for functional fragrance applications."],
]

const process = [
  ["1. Share Your Requirement", "Tell us about the fragrance material, product application, and B2B supply requirement."],
  ["2. Discuss Fragrance/Application", "Our team discusses the intended application and the relevant fragrance or concentrate direction."],
  ["3. Sample or Evaluation", "Where relevant to the project, sample or evaluation requirements can be discussed before finalizing the direction."],
  ["4. Finalize Requirement", "Align on the fragrance requirement, application context, and technical discussion needed for the project."],
  ["5. B2B Supply / Production", "Proceed with the agreed fragrance supply or production requirement for the business application."],
  ["6. Quality & Technical Support", "Analytical and testing services can support quality or raw-material evaluation when relevant."],
]

export const metadata: Metadata = {
  title: "Bulk Fragrance Oils & Perfume Concentrates | India | Mahadev Aromatics",
  description: "Bulk fragrance oils, perfume concentrates and fragrance compounds for B2B fragrance applications across perfumery, cosmetics, personal care, home care and air care.",
  alternates: { canonical: URL },
  openGraph: { title: "Bulk Fragrance Oils & Perfume Concentrates | Mahadev Aromatics", description: "B2B fragrance oils, perfume concentrates and fragrance compounds for applications across India.", url: URL },
}

export default function BulkFragrancePage() {
  const service = { title: "Bulk Fragrance Oils & Perfume Concentrates", description: "B2B fragrance oils, perfume concentrates, fragrance compounds, and supply support for businesses across perfumery, cosmetics, personal care, home care, air care, and industrial applications.", slug: "bulk-fragrance-oils-perfume-concentrates", image: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=1200&q=80" }
  const serviceSchema = getServiceSchema(service)
  const breadcrumbSchema = getBreadcrumbSchema([{ name: "Home", url: COMPANY.website }, { name: "Services", url: `${COMPANY.website}services` }, { name: service.title, url: URL }])
  const faqSchema = getFAQSchema(faqs.map(([question, answer]) => ({ question, answer })))

  return <>
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
      <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
      <div className="relative mx-auto max-w-7xl px-4 md:px-6">
        <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb"><Link href="/" className="hover:text-foreground">Home</Link><span>/</span><Link href="/services" className="hover:text-foreground">Services</Link><span>/</span><span className="text-gold">Bulk Fragrance Oils</span></nav>
        <div className="grid items-center gap-12 lg:grid-cols-2">
          <div><h1 className="font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl text-balance">Bulk Fragrance Oils &amp; Perfume Concentrates</h1><p className="mt-6 text-base leading-relaxed text-muted-foreground md:text-lg">B2B fragrance oils, perfume concentrates, fragrance compounds, and supply support for businesses developing and manufacturing scented products.</p><div className="mt-8 flex flex-wrap gap-4"><Button asChild size="lg" className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium"><Link href="/contact">Request a Quote<ArrowRight className="ml-2 h-4 w-4" /></Link></Button><Button asChild size="lg" variant="outline"><Link href="/contact">Contact Our Team</Link></Button></div></div>
          <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/40"><Image src={service.image} alt="B2B fragrance compounding and supply" fill sizes="(max-width: 1024px) 100vw, 50vw" className="object-cover" priority /></div>
        </div>
      </div>
    </section>

    <section className="py-20 md:py-28"><div className="mx-auto max-w-4xl px-4 md:px-6"><SectionHeading title="Bulk Fragrance Supply for B2B Requirements" subtitle="Fragrance oils and concentrates for businesses with defined product applications." /><div className="space-y-5 text-base leading-relaxed text-muted-foreground"><p>Businesses often need a dependable fragrance oil manufacturer or bulk fragrance supplier for repeat product development and production requirements. Mahadev Aromatics supports discussions around fragrance oils, perfume concentrates, and fragrance compounds for B2B fragrance applications.</p><p>Requirements may relate to an existing fragrance or concentrate, an application-specific direction, or a broader industrial fragrance supply need. The appropriate fragrance material and supply discussion depends on the product, intended use, and technical brief.</p></div></div></section>

    <section className="bg-secondary/30 py-20 md:py-28"><div className="mx-auto max-w-7xl px-4 md:px-6"><SectionHeading title="Perfume Concentrates for Product Applications" subtitle="Fragrance support across established Mahadev Aromatics application areas." /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{applications.map(([title, description]) => <GlassCard key={title}><h2 className="font-serif text-xl font-semibold text-foreground">{title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p></GlassCard>)}</div></div></section>

    <section className="py-20 md:py-28"><div className="mx-auto max-w-4xl px-4 md:px-6"><SectionHeading title="Fragrance Oil Manufacturing & Supply in India" subtitle="A B2B fragrance partner for production, compounding, and application-led requirements." /><div className="space-y-5 text-base leading-relaxed text-muted-foreground"><p>Mahadev Aromatics provides fragrance production, compounding, and supply support for FMCG manufacturers, contract fillers, and industrial product companies. This makes the team a relevant fragrance oil supplier in India for businesses discussing bulk fragrance oils and concentrates.</p><p>For a new scent brief, our <Link href="/services/custom-fragrance-development" className="font-medium text-gold underline-offset-4 hover:underline">custom fragrance development</Link> service is a separate route. For industrial product requirements, see <Link href="/services/industrial-fragrance-solutions" className="font-medium text-gold underline-offset-4 hover:underline">industrial fragrance solutions</Link>.</p></div></div></section>

    <section className="bg-secondary/30 py-20 md:py-28"><div className="mx-auto max-w-7xl px-4 md:px-6"><SectionHeading title="Why Work With Mahadev Aromatics?" subtitle="Fragrance expertise and technical support for B2B discussions." /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{["Fragrance industry and formulation expertise", "B2B fragrance production, compounding, and supply support", "Application-aware support across fragrance industries", "Analytical and raw-material testing capabilities", "Laboratory presence in Kannauj, Jaipur, and Sonipat", "Technical discussions for quality and development requirements"].map((item) => <GlassCard key={item} className="flex items-start gap-3"><CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" /><p className="text-sm text-foreground">{item}</p></GlassCard>)}</div></div></section>

    <section className="py-20 md:py-28"><div className="mx-auto max-w-7xl px-4 md:px-6"><SectionHeading title="A Simple B2B Supply Process" subtitle="A practical path from requirement to fragrance supply and technical support." /><div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">{process.map(([title, description]) => <GlassCard key={title}><h2 className="font-serif text-xl font-semibold text-foreground">{title}</h2><p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p></GlassCard>)}</div></div></section>

    <section className="bg-secondary/30 py-20 md:py-28"><div className="mx-auto max-w-4xl px-4 md:px-6"><SectionHeading title="Quality, Testing & Related Services" subtitle="Additional support when a fragrance or raw-material question requires technical evaluation." /><div className="space-y-5 text-base leading-relaxed text-muted-foreground"><p>Analytical and testing capabilities can support fragrance quality and raw-material evaluation. Explore <Link href="/services/raw-material-testing" className="font-medium text-gold underline-offset-4 hover:underline">raw material testing</Link> for broader quality-control requirements and <Link href="/services/gcms-glc-analysis" className="font-medium text-gold underline-offset-4 hover:underline">GCMS &amp; GLC analysis</Link> for composition and analytical questions.</p><p>Businesses seeking finished branded products rather than fragrance ingredients may need <Link href="/services/private-label-perfume-manufacturing" className="font-medium text-gold underline-offset-4 hover:underline">private label and OEM perfume manufacturing</Link>. These are separate B2B requirements.</p></div></div></section>

    <section className="py-20 md:py-28"><div className="mx-auto max-w-4xl px-4 md:px-6"><SectionHeading title="Frequently Asked Questions" subtitle="Common questions about bulk fragrance oils and perfume concentrates." /><Accordion type="single" collapsible className="w-full">{faqs.map(([question, answer], index) => <AccordionItem value={`faq-${index}`} key={question}><AccordionTrigger className="text-left">{question}</AccordionTrigger><AccordionContent className="text-muted-foreground">{answer}</AccordionContent></AccordionItem>)}</Accordion></div></section>

    <section className="bg-primary py-16"><div className="mx-auto max-w-4xl px-4 text-center md:px-6"><h2 className="font-serif text-3xl font-bold text-primary-foreground md:text-4xl">Discuss Your B2B Fragrance Requirement</h2><p className="mx-auto mt-4 max-w-2xl text-primary-foreground/75">Share your application, fragrance material, or concentrate requirement with our team.</p><Button asChild size="lg" className="mt-8 bg-gold text-primary-foreground hover:bg-gold-dark"><Link href="/contact">Contact Mahadev Aromatics<ArrowRight className="ml-2 h-4 w-4" /></Link></Button></div></section>
  </>
}
