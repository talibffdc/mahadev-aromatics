import type { Metadata } from "next"
import { notFound } from "next/navigation"
import Link from "next/link"
import { DEMO_PRODUCTS } from "@/lib/products"
import { COMPANY } from "@/lib/constants"
import { ProductDetail } from "@/components/products/product-detail"
import { getProductSchema, getBreadcrumbSchema } from "@/lib/seo"

export async function generateStaticParams() {
  return DEMO_PRODUCTS.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const product = DEMO_PRODUCTS.find((p) => p.slug === slug)
  if (!product) return {}

  return {
    title: product.seo.metaTitle,
    description: product.seo.metaDescription,
    alternates: {
      canonical: `${COMPANY.website}/products/${slug}`,
    },
    openGraph: {
      title: product.seo.metaTitle,
      description: product.seo.metaDescription,
      url: `${COMPANY.website}/products/${slug}`,
      images: product.images.map((url) => ({ url })),
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: product.seo.metaTitle,
      description: product.seo.metaDescription,
      images: product.images[0],
    },
  }
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const product = DEMO_PRODUCTS.find((p) => p.slug === slug)
  if (!product) notFound()

  const productSchema = getProductSchema(product)
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: COMPANY.website },
    { name: "Products", url: `${COMPANY.website}/products` },
    { name: product.title, url: `${COMPANY.website}/products/${product.slug}` },
  ])

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(productSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
      <section className="pt-32 pb-20 md:pt-40">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <nav
            className="mb-8 flex items-center gap-2 text-sm text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/products" className="hover:text-foreground transition-colors">
              Products
            </Link>
            <span>/</span>
            <span className="text-gold truncate max-w-[200px]">{product.title}</span>
          </nav>

          <ProductDetail product={product} />
        </div>
      </section>
    </>
  )
}
