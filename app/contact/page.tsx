import type { Metadata } from "next"
import Link from "next/link"
import { COMPANY } from "@/lib/constants"
import { ContactForm } from "@/components/contact/contact-form"
import { ContactInfo } from "@/components/contact/contact-info"
import { getBreadcrumbSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Contact Us",
  description: `Get in touch with ${COMPANY.name} for custom fragrance development, GCMS analysis, and industrial perfumery solutions. Located in Kannauj, India.`,
  alternates: {
    canonical: `${COMPANY.website}/contact`,
  },
  openGraph: {
    title: `Contact Us | ${COMPANY.name}`,
    description: `Get in touch with ${COMPANY.name} for custom fragrance development and GCMS analysis.`,
    url: `${COMPANY.website}/contact`,
  },
}

export default function ContactPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: COMPANY.website },
    { name: "Contact", url: `${COMPANY.website}/contact` },
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
            <span className="text-gold">Contact</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">Contact</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Let&apos;s Create{" "}
              <span className="text-gold-gradient">Something Extraordinary</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Whether you need custom fragrance development, analytical testing, or want to discuss a
              partnership, our team is ready to help.
            </p>
          </div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-12 lg:grid-cols-5">
            <div className="lg:col-span-3">
              <ContactForm />
            </div>
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="py-0">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="overflow-hidden rounded-2xl border border-border/40">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d57009.08440419997!2d79.8872927!3d27.0550!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3f0e6d06d59b%3A0x7d8b5c1c4a0d7f0c!2sKannauj%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1700000000000"
              width="100%"
              height="400"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mahadev Aromatic Location - Kannauj, India"
            />
          </div>
        </div>
      </section>

      <div className="h-20" />
    </>
  )
}
