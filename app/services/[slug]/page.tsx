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

const GCMS_ADDITIONAL_FAQS = [
  {
    question: "What is fragrance GCMS analysis?",
    answer:
      "Fragrance GCMS analysis combines gas chromatography and mass spectrometry to separate and identify volatile components in a perfume, fragrance, or raw-material sample. It provides analytical insight into composition without claiming to identify every ingredient or replace formulation work.",
  },
  {
    question: "What does GCMS identify in a perfume sample?",
    answer:
      "Depending on the sample and analytical conditions, GCMS can help identify individual volatile compounds, aroma chemicals, and other components that contribute to a fragrance profile. Results are interpreted in the context of the sample and the purpose of the analysis.",
  },
  {
    question: "Can GCMS analyse fragrance composition?",
    answer:
      "Yes. Fragrance composition analysis can help businesses understand the detectable volatile composition of perfumes, fragrance concentrates, cosmetic fragrances, personal-care fragrances, and selected raw materials.",
  },
  {
    question: "Can GCMS detect adulteration in fragrance raw materials?",
    answer:
      "GCMS-supported testing can help investigate purity concerns, unexpected components, and possible adulteration by comparing analytical findings with specifications, reference samples, or expected composition. It is an investigative quality-control tool, not an absolute guarantee for every possible adulterant.",
  },
  {
    question: "Can GCMS support fragrance reverse engineering?",
    answer:
      "GCMS can provide analytical insight into a fragrance sample and support a wider matching or recreation workflow. Analytical testing and fragrance formulation are separate steps; a perfumer still evaluates the sensory profile, performance, and product application.",
  },
  {
    question: "What information is included in a GCMS fragrance report?",
    answer:
      "A report may include identified compounds or components, analytical findings, composition insights, quality observations, sample comparisons where applicable, and technical interpretation relevant to the agreed testing objective.",
  },
  {
    question: "Which industries use fragrance analysis?",
    answer:
      "Fragrance analysis is useful across fine perfumery, cosmetics, personal care, home care, air care, and industrial fragrance applications, as well as for businesses evaluating fragrance and aroma-chemical raw materials.",
  },
  {
    question: "Can Mahadev Aromatics analyse cosmetic and personal-care fragrances?",
    answer:
      "Yes. Analytical evaluation can support fragrance testing for cosmetics and personal-care products, including composition review, comparison, raw-material quality control, and development decisions based on the submitted sample and testing objective.",
  },
] as const

function GcmsAdditionalContent() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            title="Fragrance GCMS & GLC Analysis"
            subtitle="Analytical insight for fragrance composition, quality control, and development decisions."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Mahadev Aromatics uses GCMS and GLC analysis to help B2B fragrance teams understand submitted perfume and fragrance samples. Fragrance composition analysis can support the identification of individual fragrance compounds, aroma chemicals, and other detectable fragrance ingredients in complex mixtures.
            </p>
            <p>
              Depending on the sample and the agreed testing objective, qualitative and quantitative analysis can provide useful composition insights for analytical testing in perfumery, product quality control, raw-material evaluation, and formulation decisions. Findings are presented in an analytical report intended to support technical discussion and next steps.
            </p>
            <p>
              GCMS or GLC analysis is an analytical service, not a promise that every ingredient in every complex mixture will be detected or that a fragrance will be reproduced automatically. Interpretation, sensory evaluation, and formulation development remain important parts of any fragrance project.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            title="What Can GCMS Analysis Reveal?"
            subtitle="Practical findings that can support fragrance and raw-material decisions."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              "Individual volatile components and aroma chemicals detected in a sample",
              "Composition insights for perfume and fragrance mixtures",
              "Unexpected components that may require technical review",
              "Purity concerns in selected fragrance raw materials",
              "Possible adulteration indicators for further investigation",
              "Differences and similarities when fragrance samples are compared",
            ].map((item) => (
              <GlassCard key={item} className="flex items-start gap-3">
                <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-gold" />
                <p className="text-sm text-foreground">{item}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            title="Fragrance Composition Analysis"
            subtitle="Supporting composition review across fragrance applications and raw materials."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Fragrance composition analysis can be relevant to fine perfumes, fragrance concentrates, aroma compounds, cosmetic fragrances, personal-care fragrances, home-care fragrances, and selected natural or synthetic raw materials. It can help teams organize technical questions around a submitted sample and decide whether additional formulation or quality work is appropriate.
            </p>
            <p>
              For product developers and quality teams, analytical findings may support perfume compound identification, aroma chemical identification, fragrance ingredient identification, batch comparison, and communication with suppliers or perfumers. The scope and interpretation depend on the sample, reference information, and purpose of testing.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            title="Raw Material Purity & Adulteration Testing"
            subtitle="Analytical support for incoming material verification and supplier quality evaluation."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Raw material purity testing can support quality-control programs for essential oils, aroma chemicals, natural extracts, and other fragrance materials. GCMS-supported review may help teams compare incoming material findings with specifications, reference samples, or previous batches.
            </p>
            <p>
              This work can support adulteration investigation, incoming material verification, batch-to-batch comparison, and supplier quality evaluation. Results should be interpreted alongside documentation, sensory assessment, specifications, and any other testing required for the material and its intended use.
            </p>
            <p>
              For broader quality requirements, explore our <Link href="/services/raw-material-testing" className="font-medium text-gold underline-offset-4 hover:underline">raw material testing and QC service</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            title="GCMS for Fragrance Reverse Engineering"
            subtitle="Analytical insight that can inform, but does not replace, fragrance development."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              GCMS analysis can provide useful analytical insight into the detectable composition of a fragrance sample and help a technical team understand possible contributors to its profile. This can support fragrance matching, recreation, reformulation, and development conversations.
            </p>
            <p>
              GCMS analysis is the testing step; fragrance matching and recreation is a separate formulation and development process involving sensory evaluation, perfumery expertise, performance review, and the intended product base. Learn more about our <Link href="/services/fragrance-matching-recreation" className="font-medium text-gold underline-offset-4 hover:underline">fragrance matching and recreation service</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            title="Fragrance Testing for Different Industries"
            subtitle="Analytical testing can answer different questions across fragrance applications."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Fine Perfumery", "Review perfume samples, concentrates, and fragrance profiles to support product development, comparison, and quality discussions."],
              ["Cosmetics", "Support composition and quality evaluation for fragrances used in skincare, makeup, and other cosmetic formulations."],
              ["Personal Care", "Help teams assess fragrance samples used in shampoo, body wash, deodorant, and related personal-care products."],
              ["Home Care", "Provide analytical context for fragrances used in detergents, fabric care, surface cleaners, and household products."],
              ["Air Care", "Support technical review of fragrance materials used in air fresheners, candles, diffusers, and environmental scenting."],
              ["Industrial Fragrance Applications", "Help quality and development teams investigate composition and raw-material questions in functional fragrance applications."],
            ].map(([title, description]) => (
              <GlassCard key={title}>
                <h3 className="font-serif text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            title="GCMS Analysis Reports"
            subtitle="Clear technical context for B2B fragrance and quality decisions."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              A GCMS fragrance report may help a client understand identified compounds or components, analytical findings, composition insights, quality observations, and technical interpretation related to the submitted sample. Where applicable, sample comparison can also help highlight similarities or differences between materials.
            </p>
            <p>
              The report scope depends on the sample and the agreed objective. Our team can discuss the relevant testing question before analysis so that the findings are useful for quality control, product development, supplier review, or analytical evaluation.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            title="Why Choose Mahadev Aromatics for Fragrance Analysis?"
            subtitle="Technical support grounded in fragrance development and analytical experience."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Mahadev Aromatics combines fragrance industry experience with GCMS and GLC analytical capability, raw-material testing, and fragrance development knowledge. This broader context helps B2B teams connect analytical findings with practical quality-control and product-development questions.
            </p>
            <p>
              With laboratory presence in Kannauj, Jaipur, and Sonipat, we support fragrance businesses with technical discussions around submitted samples, composition analysis, and next-step evaluation. Services and capabilities can vary by project and location, so please contact our team to discuss your specific requirement.
            </p>
            <p>
              For development-led projects, see our <Link href="/services/custom-fragrance-development" className="font-medium text-gold underline-offset-4 hover:underline">custom fragrance development service</Link>. For industrial applications, explore our <Link href="/services/industrial-fragrance-solutions" className="font-medium text-gold underline-offset-4 hover:underline">industrial fragrance solutions</Link>, or <Link href="/contact" className="font-medium text-gold underline-offset-4 hover:underline">contact Mahadev Aromatics</Link> to discuss a sample and testing objective.
            </p>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <p className="text-sm leading-relaxed text-muted-foreground">
            Our fragrance analysis laboratories have a presence in <strong className="text-foreground">Kannauj, Jaipur, and Sonipat</strong>. Please contact us for current sample-submission guidance and service availability.
          </p>
        </div>
      </section>
    </>
  )
}

const CUSTOM_FRAGRANCE_ADDITIONAL_FAQS = [
  {
    question: "What is custom fragrance development?",
    answer: "Custom fragrance development is the process of creating an original fragrance profile from a brand brief, desired scent direction, selected ingredients, formulation work, evaluation, and refinement for the intended product application.",
  },
  {
    question: "What does a fragrance development company do?",
    answer: "A fragrance development company translates a brand or product brief into fragrance concepts, supports formulation and sample development, evaluates performance, and collaborates with the client toward a suitable final fragrance.",
  },
  {
    question: "Can you develop fragrances for perfume brands?",
    answer: "Yes. Mahadev Aromatics develops bespoke fragrance profiles for perfume brands, including signature scent concepts shaped around brand identity, target audience, market positioning, and intended application.",
  },
  {
    question: "Do you provide fragrance formulation services?",
    answer: "Yes. Our fragrance formulation services include fragrance concept development, ingredient selection, sample development, evaluation, refinement, and technical documentation for the agreed project scope.",
  },
  {
    question: "Can you develop fragrances for cosmetics and personal care?",
    answer: "Yes. Fragrance development can be adapted for cosmetics and personal-care applications, with evaluation focused on the intended product base, sensory direction, and performance requirements.",
  },
  {
    question: "What is the difference between fragrance development and fragrance matching?",
    answer: "Custom fragrance development creates a fragrance from a brand brief and desired profile. Fragrance matching and recreation starts with an existing reference sample and works toward a close, technically informed match without promising exact duplication.",
  },
  {
    question: "Can GCMS analysis support fragrance development?",
    answer: "GCMS/GLC analysis can provide analytical insight when it is relevant to a project, but it is a separate service and is not automatically included in every fragrance development project.",
  },
  {
    question: "Do you develop fragrances for home-care and air-care applications?",
    answer: "Yes. Our fragrance development services can support home-care and air-care applications such as detergents, household products, air fresheners, candles, and diffusers, subject to the project brief and target product base.",
  },
] as const

function CustomFragranceAdditionalContent() {
  return (
    <>
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            title="Fragrance Development for Brands"
            subtitle="A collaborative path from fragrance brief to a distinctive product-ready scent."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Mahadev Aromatics supports perfume brands, cosmetics companies, personal-care brands, and product developers with custom fragrance development built around a clear fragrance brief. We begin by understanding the brand, audience, product application, scent direction, and the role the fragrance should play in the finished product.
            </p>
            <p>
              Our perfumers translate that fragrance concept into formulation and sample development, followed by evaluation and refinement based on the agreed brief and feedback. This collaborative approach helps brands move from an initial idea to final fragrance development with technical context at each stage.
            </p>
            <p>
              As one of the fragrance development companies serving businesses in India, we provide development collaboration rather than a one-size-fits-all catalogue solution. The scope, samples, evaluation, and documentation are discussed around each project&apos;s requirements.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            title="What Is Custom Fragrance Development?"
            subtitle="Original fragrance creation guided by a brand brief and intended application."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Custom fragrance development means developing an original fragrance profile for a defined brand, product, or market objective. It combines creative direction with the practical work of selecting fragrance ingredients, creating a formulation, developing samples, evaluating the scent, and refining it for the intended application.
            </p>
            <p>
              A professional fragrance formulation service helps translate a brand brief into a fragrance that is considered for sensory character, product context, and development requirements. The final direction may be bespoke, functional, expressive, or a combination of these depending on the brief.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            title="Our Fragrance Development Process"
            subtitle="A clear, collaborative workflow for custom fragrance and perfume formula development."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["1. Understand the Brand & Brief", "We discuss brand identity, target audience, product application, market direction, and the practical requirements that shape the fragrance brief."],
              ["2. Define the Olfactive Direction", "We establish the desired scent direction, fragrance concept, references, emotional character, and the role of the fragrance in the finished product."],
              ["3. Formulation & Fragrance Creation", "Our perfumers select suitable fragrance ingredients and develop a formulation aligned with the agreed creative and application direction."],
              ["4. Sample Development", "The developing fragrance is prepared as samples for review in the context of the project and intended product base."],
              ["5. Evaluation & Refinement", "Feedback and evaluation guide refinement of the fragrance profile, performance, and fit with the original brief."],
              ["6. Finalization & Documentation", "Once the direction is agreed, the final fragrance development is supported with the relevant technical documentation for the project scope."],
            ].map(([title, description]) => (
              <GlassCard key={title}>
                <h3 className="font-serif text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <SectionHeading
            title="Fragrance Development for Different Applications"
            subtitle="Application-aware fragrance creation for a range of product categories."
          />
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
            {[
              ["Fine Perfumery", "Develop distinctive perfume profiles and signature scent directions for fine fragrance products and brands."],
              ["Personal Care", "Create fragrances considered for products such as body care, hair care, deodorants, and other personal-care applications."],
              ["Cosmetics", "Develop fragrance directions suited to cosmetic products while considering the intended base and sensory experience."],
              ["Home Care", "Support fragrance creation for household and cleaning products with the intended product application in view."],
              ["Air Care", "Develop fragrance concepts for air fresheners, candles, diffusers, and related air-care products."],
              ["Industrial Applications", "Support functional fragrance development for businesses with defined application, performance, and product requirements."],
            ].map(([title, description]) => (
              <GlassCard key={title}>
                <h3 className="font-serif text-xl font-semibold text-foreground">{title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{description}</p>
              </GlassCard>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            title="Why Work With a Fragrance Development Company?"
            subtitle="Technical and creative collaboration for brands developing fragrance products."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Working with a professional fragrance development company gives brands access to technical expertise, formulation support, fragrance evaluation, and a collaborative development process. It also helps keep the fragrance direction connected to the intended product application rather than treating scent as an isolated creative exercise.
            </p>
            <p>
              Mahadev Aromatics supports application-specific fragrance development and can bring analytical context into a project where relevant. Development decisions remain guided by the project brief, evaluation, product base, and the information available for the submitted materials.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            title="Custom Fragrance Development vs Fragrance Matching"
            subtitle="Two related services with different starting points and search intent."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Custom fragrance development creates or develops a fragrance according to a brand&apos;s brief, desired scent direction, and intended application. It begins with an opportunity or product idea rather than an existing fragrance that must be reproduced.
            </p>
            <p>
              Fragrance matching and recreation begins with an existing reference sample and uses analytical and olfactory work to develop a fragrance toward a close match. It does not promise exact duplication or 100% matching. Explore our <Link href="/services/fragrance-matching-recreation" className="font-medium text-gold underline-offset-4 hover:underline">fragrance matching and recreation service</Link> for that requirement.
            </p>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          <SectionHeading
            title="Analytical Support for Fragrance Development"
            subtitle="Connecting fragrance development with analysis and raw-material quality when relevant."
          />
          <div className="space-y-5 text-base leading-relaxed text-muted-foreground">
            <p>
              Some fragrance development projects benefit from analytical support. GCMS and GLC analysis can provide insight into a submitted fragrance sample or reference material when composition information is relevant to the development question. Learn more about <Link href="/services/gcms-glc-analysis" className="font-medium text-gold underline-offset-4 hover:underline">GCMS &amp; GLC analysis</Link>.
            </p>
            <p>
              Raw-material testing can also support quality conversations around selected fragrance materials, specifications, and incoming material evaluation. Explore our <Link href="/services/raw-material-testing" className="font-medium text-gold underline-offset-4 hover:underline">raw material testing and QC service</Link>. These are related services and are not automatically included in every custom fragrance development project.
            </p>
          </div>
        </div>
      </section>

      <section className="bg-secondary/30 py-16 md:py-20">
        <div className="mx-auto max-w-4xl px-4 text-center md:px-6">
          <SectionHeading
            title="Development Locations"
            subtitle="Mahadev Aromatics has laboratory presence supporting fragrance work in India."
          />
          <p className="text-base leading-relaxed text-muted-foreground">
            Our laboratory presence includes <strong className="text-foreground">Kannauj, Jaipur, and Sonipat</strong>. Contact our team to discuss current project requirements, sample guidance, and service availability.
          </p>
          <Link href="/services/industrial-fragrance-solutions" className="mt-5 inline-block font-medium text-gold underline-offset-4 hover:underline">
            Explore industrial fragrance solutions
          </Link>
        </div>
      </section>
    </>
  )
}

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

  const isGcmsPage = slug === "gcms-glc-analysis"
  const isCustomFragrancePage = slug === "custom-fragrance-development"
  const title = isGcmsPage
    ? "GCMS & GLC Analysis | Fragrance Analysis & Testing | Mahadev Aromatics"
    : isCustomFragrancePage
      ? "Custom Fragrance Development | Fragrance Development Company | Mahadev Aromatics"
      : service.title
  const description = isGcmsPage
    ? "Professional GCMS and GLC fragrance analysis for composition identification, raw material testing, quality control, and analytical evaluation by Mahadev Aromatics."
    : isCustomFragrancePage
      ? "Custom fragrance development and formulation services for brands across perfumery, cosmetics, personal care, home care, and other fragrance applications."
      : service.shortDescription

  return {
    title,
    description,
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
  const isGcmsPage = slug === "gcms-glc-analysis"
  const isCustomFragrancePage = slug === "custom-fragrance-development"
  const pageFaqs = isGcmsPage
    ? [...service.faqs, ...GCMS_ADDITIONAL_FAQS]
    : isCustomFragrancePage
      ? [...service.faqs, ...CUSTOM_FRAGRANCE_ADDITIONAL_FAQS]
      : [...service.faqs]
  const faqSchema = getFAQSchema(pageFaqs)

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

      {isGcmsPage && <GcmsAdditionalContent />}
      {isCustomFragrancePage && <CustomFragranceAdditionalContent />}

      {/* FAQ */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-3xl px-4 md:px-6">
          <SectionHeading
            title="Frequently Asked Questions"
            subtitle={`Common questions about our ${service.title.toLowerCase()} services.`}
          />
          <Accordion type="single" collapsible className="w-full">
            {pageFaqs.map((faq, i) => (
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
