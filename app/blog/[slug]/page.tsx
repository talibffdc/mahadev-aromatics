import type { Metadata } from "next"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { ArrowLeft, Calendar, Clock, User } from "lucide-react"
import { BLOG_POSTS, COMPANY } from "@/lib/constants"
import { getArticleSchema, getBreadcrumbSchema } from "@/lib/seo"

export async function generateStaticParams() {
  return BLOG_POSTS.map((post) => ({ slug: post.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) return {}

  return {
    title: post.title,
    description: post.excerpt,
    alternates: {
      canonical: `${COMPANY.website}/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.excerpt,
      url: `${COMPANY.website}/blog/${slug}`,
      type: "article",
      publishedTime: post.date,
      authors: [post.author],
      images: [{ url: post.image }],
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.excerpt,
      images: post.image,
    },
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = BLOG_POSTS.find((p) => p.slug === slug)
  if (!post) notFound()

  const articleSchema = getArticleSchema(post)
  const breadcrumbSchema = getBreadcrumbSchema([
    { name: "Home", url: COMPANY.website },
    { name: "Blog", url: `${COMPANY.website}/blog` },
    { name: post.title, url: `${COMPANY.website}/blog/${post.slug}` },
  ])

  // Simple markdown-like rendering for content
  const renderContent = (content: string) => {
    return content.split("\n\n").map((block, i) => {
      if (block.startsWith("## ")) {
        return (
          <h2
            key={i}
            className="mt-10 mb-4 font-serif text-2xl font-bold text-foreground"
          >
            {block.replace("## ", "")}
          </h2>
        )
      }
      if (block.startsWith("### ")) {
        return (
          <h3
            key={i}
            className="mt-8 mb-3 font-serif text-xl font-semibold text-foreground"
          >
            {block.replace("### ", "")}
          </h3>
        )
      }
      if (block.startsWith("- ")) {
        const items = block.split("\n").filter((line) => line.startsWith("- "))
        return (
          <ul key={i} className="my-4 ml-4 list-disc space-y-2 text-muted-foreground">
            {items.map((item, j) => {
              const text = item.replace("- ", "")
              // Handle **bold** text
              const parts = text.split(/\*\*(.*?)\*\*/g)
              return (
                <li key={j} className="leading-relaxed">
                  {parts.map((part, k) =>
                    k % 2 === 1 ? (
                      <strong key={k} className="font-semibold text-foreground">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </li>
              )
            })}
          </ul>
        )
      }
      if (block.startsWith("1. ")) {
        const items = block.split("\n").filter((line) => /^\d+\./.test(line))
        return (
          <ol key={i} className="my-4 ml-4 list-decimal space-y-2 text-muted-foreground">
            {items.map((item, j) => {
              const text = item.replace(/^\d+\.\s/, "")
              const parts = text.split(/\*\*(.*?)\*\*/g)
              return (
                <li key={j} className="leading-relaxed">
                  {parts.map((part, k) =>
                    k % 2 === 1 ? (
                      <strong key={k} className="font-semibold text-foreground">
                        {part}
                      </strong>
                    ) : (
                      part
                    )
                  )}
                </li>
              )
            })}
          </ol>
        )
      }
      if (block.startsWith("**") && block.endsWith("**")) {
        return (
          <p key={i} className="my-4 font-semibold text-foreground">
            {block.replace(/\*\*/g, "")}
          </p>
        )
      }
      // Regular paragraph, handle **bold**
      const parts = block.split(/\*\*(.*?)\*\*/g)
      return (
        <p key={i} className="my-4 leading-relaxed text-muted-foreground">
          {parts.map((part, k) =>
            k % 2 === 1 ? (
              <strong key={k} className="font-semibold text-foreground">
                {part}
              </strong>
            ) : (
              part
            )
          )}
        </p>
      )
    })
  }

  const relatedPosts = BLOG_POSTS.filter(
    (p) => p.slug !== post.slug
  ).slice(0, 2)

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />

      <article className="relative pt-32 pb-20 md:pt-40">
        <div className="mx-auto max-w-4xl px-4 md:px-6">
          {/* Breadcrumb */}
          <nav
            className="mb-6 flex items-center gap-2 text-sm text-muted-foreground"
            aria-label="Breadcrumb"
          >
            <Link href="/" className="hover:text-foreground transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link href="/blog" className="hover:text-foreground transition-colors">
              Blog
            </Link>
            <span>/</span>
            <span className="text-gold truncate max-w-[200px]">{post.title}</span>
          </nav>

          {/* Header */}
          <span className="inline-block rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs font-medium text-gold">
            {post.category}
          </span>
          <h1 className="mt-4 font-serif text-3xl font-bold leading-tight text-foreground md:text-4xl lg:text-5xl text-balance">
            {post.title}
          </h1>
          <div className="mt-6 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5">
              <User className="h-4 w-4" />
              {post.author}, {post.authorRole}
            </span>
            <span className="flex items-center gap-1.5">
              <Calendar className="h-4 w-4" />
              {new Date(post.date).toLocaleDateString("en-IN", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="h-4 w-4" />
              {post.readTime}
            </span>
          </div>

          {/* Featured Image */}
          <div className="relative mt-8 aspect-[2/1] overflow-hidden rounded-2xl border border-border/40">
            <Image
              src={post.image}
              alt={`${post.title} - ${post.category} article by ${COMPANY.name}`}
              fill
              sizes="(max-width: 896px) 100vw, 896px"
              className="object-cover"
              priority
            />
          </div>

          {/* Content */}
          <div className="mt-10 max-w-none">
            {renderContent(post.content)}
          </div>

          {/* Internal links */}
          <div className="mt-12 rounded-xl border border-gold/20 bg-gold/5 p-6 text-center">
            <p className="text-sm font-medium text-foreground">
              Interested in our fragrance services?
            </p>
            <div className="mt-3 flex flex-wrap items-center justify-center gap-3">
              <Link
                href="/services"
                className="text-sm font-medium text-gold hover:text-gold-light transition-colors"
              >
                View Our Services
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link
                href="/contact"
                className="text-sm font-medium text-gold hover:text-gold-light transition-colors"
              >
                Get in Touch
              </Link>
              <span className="text-muted-foreground">|</span>
              <Link
                href="/products"
                className="text-sm font-medium text-gold hover:text-gold-light transition-colors"
              >
                Shop Products
              </Link>
            </div>
          </div>

          {/* Back link */}
          <div className="mt-8 border-t border-border/40 pt-8">
            <Link
              href="/blog"
              className="inline-flex items-center gap-2 text-sm font-medium text-gold hover:text-gold-light transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              Back to Blog
            </Link>
          </div>
        </div>
      </article>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <section className="bg-secondary/30 py-20">
          <div className="mx-auto max-w-4xl px-4 md:px-6">
            <h2 className="font-serif text-2xl font-bold text-foreground">
              Related Articles
            </h2>
            <div className="gold-line mt-3 w-16" />
            <div className="mt-8 grid gap-6 md:grid-cols-2">
              {relatedPosts.map((rp) => (
                <Link key={rp.slug} href={`/blog/${rp.slug}`} className="group block">
                  <div className="glass glass-hover rounded-xl overflow-hidden">
                    <div className="relative aspect-[16/9]">
                      <Image
                        src={rp.image}
                        alt={`${rp.title} - related article`}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    <div className="p-4">
                      <span className="text-xs text-gold">{rp.category}</span>
                      <h3 className="mt-1 font-serif text-sm font-semibold text-foreground group-hover:text-gold transition-colors text-balance">
                        {rp.title}
                      </h3>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  )
}
