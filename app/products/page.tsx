import type { Metadata } from "next"
import Link from "next/link"
import { COMPANY } from "@/lib/constants"
import { DEMO_PRODUCTS } from "@/lib/products"
import { ProductsGrid } from "@/components/products/products-grid"
import { getBreadcrumbSchema, getCollectionPageSchema } from "@/lib/seo"

export const metadata: Metadata = {
  title: "Shop Fragrance Products",
  description: `Shop premium fragrances, attars, body mists, and essential oils from ${COMPANY.name}. Handcrafted in Kannauj with the finest natural ingredients.`,
  alternates: {
    canonical: `${COMPANY.website}/products`,
  },
  openGraph: {
    title: `Shop Fragrance Products | ${COMPANY.name}`,
    description: `Shop premium fragrances, attars, body mists, and essential oils from ${COMPANY.name}. Handcrafted in Kannauj.`,
    url: `${COMPANY.website}/products`,
  },
}

export default function ProductsPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: COMPANY.website },
    { name: "Products", url: `${COMPANY.website}/products` },
  ])

  const collectionSchema = getCollectionPageSchema(
    DEMO_PRODUCTS.map((p) => ({ title: p.title, slug: p.slug }))
  )

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(collectionSchema) }}
      />

      {/* Hero */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-28">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background to-secondary/30" />
        <div className="relative mx-auto max-w-7xl px-4 md:px-6">
          <nav className="mb-6 flex items-center gap-2 text-sm text-muted-foreground" aria-label="Breadcrumb">
            <Link href="/" className="hover:text-foreground transition-colors">Home</Link>
            <span>/</span>
            <span className="text-gold">Products</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">Shop</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Premium{" "}
              <span className="text-gold-gradient">Fragrance Collection</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Discover our curated collection of handcrafted perfumes, attars, and body mists, created by master perfumers in Kannauj.
            </p>
          </div>
        </div>
      </section>

      {/* Products */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <ProductsGrid products={DEMO_PRODUCTS} />
        </div>
      </section>

      {/* Internal Links CTA */}
      <section className="bg-secondary/30 py-20 md:py-28">
        <div className="mx-auto max-w-7xl px-4 md:px-6 text-center">
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Looking for Custom Fragrance Solutions?
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-base text-muted-foreground">
            Beyond our retail collection, we offer custom fragrance development, GCMS analysis, and industrial-scale production for businesses.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
            <Link
              href="/services"
              className="rounded-lg bg-gold px-6 py-3 text-sm font-medium text-primary-foreground transition-colors hover:bg-gold-dark"
            >
              Explore Our Services
            </Link>
            <Link
              href="/contact"
              className="rounded-lg border border-gold/30 px-6 py-3 text-sm font-medium text-foreground transition-colors hover:bg-gold/10 hover:border-gold/50"
            >
              Contact Us for Bulk Orders
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
