import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { Calendar, Clock, User } from "lucide-react"
import { BLOG_POSTS, BLOG_CATEGORIES, COMPANY } from "@/lib/constants"
import { getBreadcrumbSchema } from "@/lib/seo"
import { SectionHeading } from "@/components/shared/section-heading"
import { GlassCard } from "@/components/shared/glass-card"

export const metadata: Metadata = {
  title: "Blog",
  description: `Insights on fragrance development, GCMS analysis, aroma chemistry, and perfume industry trends from the ${COMPANY.name} team.`,
  alternates: {
    canonical: `${COMPANY.website}/blog`,
  },
  openGraph: {
    title: `Blog | ${COMPANY.name}`,
    description: `Insights on fragrance development, GCMS analysis, and industry trends.`,
    url: `${COMPANY.website}/blog`,
  },
}

export default function BlogPage() {
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: COMPANY.website },
    { name: "Blog", url: `${COMPANY.website}/blog` },
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
            <span className="text-gold">Blog</span>
          </nav>
          <div className="max-w-3xl">
            <p className="text-sm font-medium uppercase tracking-widest text-gold">Blog</p>
            <h1 className="mt-4 font-serif text-4xl font-bold leading-tight tracking-tight text-foreground md:text-5xl lg:text-6xl text-balance">
              Fragrance{" "}
              <span className="text-gold-gradient">Insights & Science</span>
            </h1>
            <p className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground md:text-lg">
              Deep dives into perfume science, GCMS analytics, aroma chemistry, and industry trends from our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-8">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="flex flex-wrap gap-2">
            <span className="rounded-full border border-gold/30 bg-gold/10 px-4 py-1.5 text-sm font-medium text-gold">
              All
            </span>
            {BLOG_CATEGORIES.map((cat) => (
              <span
                key={cat}
                className="rounded-full border border-border/60 px-4 py-1.5 text-sm text-muted-foreground transition-colors hover:border-gold/30 hover:text-foreground cursor-pointer"
              >
                {cat}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-12 md:py-20">
        <div className="mx-auto max-w-7xl px-4 md:px-6">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {BLOG_POSTS.map((post) => (
              <Link key={post.slug} href={`/blog/${post.slug}`} className="group block">
                <GlassCard className="flex h-full flex-col overflow-hidden p-0">
                  <div className="relative aspect-[16/9]">
                    <Image
                      src={post.image}
                      alt={`${post.title} - ${COMPANY.name} blog`}
                      fill
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      className="object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
                    <span className="absolute bottom-3 left-3 rounded-full bg-gold/10 border border-gold/20 px-3 py-1 text-xs font-medium text-gold">
                      {post.category}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-6">
                    <h2 className="font-serif text-lg font-bold text-foreground group-hover:text-gold transition-colors text-balance">
                      {post.title}
                    </h2>
                    <p className="mt-2 flex-1 text-sm leading-relaxed text-muted-foreground line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-4 flex items-center gap-4 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        {post.author}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        {new Date(post.date).toLocaleDateString("en-IN", {
                          year: "numeric",
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        {post.readTime}
                      </span>
                    </div>
                  </div>
                </GlassCard>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
