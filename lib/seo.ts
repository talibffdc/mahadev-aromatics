import { COMPANY } from "@/lib/constants"

const BASE_URL = COMPANY.website

// Organization schema for the homepage
export function getOrganizationSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: COMPANY.name,
    url: BASE_URL,
    logo: `${BASE_URL}/logo.png`,
    description:
      "Leading fragrance development laboratory specializing in GCMS analysis, custom fragrance creation, aroma chemistry, and industrial perfumery solutions.",
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 42, Industrial Area Phase II",
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.state,
      postalCode: "209725",
      addressCountry: "IN",
    },
    telephone: COMPANY.phone,
    email: COMPANY.email,
    foundingDate: COMPANY.founded,
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      telephone: COMPANY.phone,
      contactType: "customer service",
      availableLanguage: ["English", "Hindi"],
    },
  }
}

// LocalBusiness schema for the homepage
export function getLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY.name,
    url: BASE_URL,
    description: COMPANY.tagline,
    address: {
      "@type": "PostalAddress",
      streetAddress: "Plot No. 42, Industrial Area Phase II",
      addressLocality: COMPANY.city,
      addressRegion: COMPANY.state,
      postalCode: "209725",
      addressCountry: "IN",
    },
    telephone: COMPANY.phone,
    email: COMPANY.email,
    priceRange: "$$",
  }
}

// Breadcrumb schema
export function getBreadcrumbSchema(
  items: { name: string; url: string }[]
) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  }
}

// Product schema
export function getProductSchema(product: {
  title: string
  description: string
  images: string[]
  slug: string
  variants: {
    price: number
    discountPrice?: number
    stock: number
    sku: string
    name: string
  }[]
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Product",
    name: product.title,
    description: product.description,
    image: product.images,
    url: `${BASE_URL}/products/${product.slug}`,
    brand: {
      "@type": "Brand",
      name: COMPANY.name,
    },
    offers: product.variants.map((v) => ({
      "@type": "Offer",
      name: v.name,
      price: v.discountPrice ?? v.price,
      priceCurrency: "INR",
      availability:
        v.stock > 0
          ? "https://schema.org/InStock"
          : "https://schema.org/OutOfStock",
      sku: v.sku,
      seller: {
        "@type": "Organization",
        name: COMPANY.name,
      },
    })),
  }
}

// Service schema
export function getServiceSchema(service: {
  title: string
  description: string
  slug: string
  image: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    description: service.description,
    url: `${BASE_URL}/services/${service.slug}`,
    image: service.image,
    provider: {
      "@type": "Organization",
      name: COMPANY.name,
      url: BASE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "India",
    },
    serviceType: service.title,
  }
}

// Article schema
export function getArticleSchema(post: {
  title: string
  excerpt: string
  content: string
  image: string
  date: string
  author: string
  authorRole: string
  slug: string
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.excerpt,
    image: post.image,
    url: `${BASE_URL}/blog/${post.slug}`,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: post.author,
      jobTitle: post.authorRole,
    },
    publisher: {
      "@type": "Organization",
      name: COMPANY.name,
      url: BASE_URL,
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${BASE_URL}/blog/${post.slug}`,
    },
  }
}

// FAQ schema for service pages
export function getFAQSchema(faqs: { question: string; answer: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  }
}

// WebSite schema for search box
export function getWebSiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: COMPANY.name,
    url: BASE_URL,
    description:
      "Leading fragrance development laboratory specializing in GCMS analysis, custom fragrance creation, and industrial perfumery solutions.",
  }
}

// CollectionPage schema for product listing
export function getCollectionPageSchema(products: { title: string; slug: string }[]) {
  return {
    "@context": "https://schema.org",
    "@type": "CollectionPage",
    name: "Premium Fragrance Collection",
    description: `Shop premium fragrances, attars, body mists, and essential oils from ${COMPANY.name}.`,
    url: `${BASE_URL}/products`,
    mainEntity: {
      "@type": "ItemList",
      itemListElement: products.map((product, index) => ({
        "@type": "ListItem",
        position: index + 1,
        url: `${BASE_URL}/products/${product.slug}`,
        name: product.title,
      })),
    },
  }
}
