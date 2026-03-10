"use client"

import { Star } from "lucide-react"
import { DEMO_REVIEWS, getAverageRating } from "@/lib/reviews"
import { GlassCard } from "@/components/shared/glass-card"
import { AnimatedSection } from "@/components/shared/animated-section"

export function ReviewsSection() {
  const reviews = DEMO_REVIEWS
  const avgRating = getAverageRating(reviews)
  
  const starCounts = [5, 4, 3, 2, 1].map(rating => ({
    rating,
    count: reviews.filter(r => r.rating === rating).length
  }))

  return (
    <section className="relative py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-4 md:px-6">
        <AnimatedSection className="mb-16 text-center">
          <p className="text-sm font-medium uppercase tracking-widest text-gold">
            Customer Reviews
          </p>
          <h2 className="mt-4 font-serif text-3xl font-bold text-foreground md:text-4xl">
            Trusted by Customers Worldwide
          </h2>
          <div className="gold-line mx-auto mt-6 w-16" />
        </AnimatedSection>

        <div className="grid gap-8 lg:grid-cols-3">
          {/* Rating Summary */}
          <GlassCard className="flex flex-col justify-between lg:col-span-1">
            <div>
              <div className="flex items-baseline gap-2">
                <span className="font-serif text-5xl font-bold text-gold">
                  {avgRating}
                </span>
                <span className="text-lg text-muted-foreground">/ 5</span>
              </div>
              
              <div className="mt-2 flex items-center gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    className={`h-4 w-4 ${
                      i < Math.round(avgRating) ? "fill-gold text-gold" : "text-border"
                    }`}
                  />
                ))}
              </div>
              
              <p className="mt-3 text-sm text-muted-foreground">
                Based on {reviews.length} verified reviews
              </p>
            </div>

            {/* Rating Distribution */}
            <div className="mt-8 space-y-2">
              {starCounts.map(({ rating, count }) => (
                <div key={rating} className="flex items-center gap-3">
                  <span className="text-xs text-muted-foreground w-6">{rating}★</span>
                  <div className="h-1 flex-1 rounded-full bg-border/30 overflow-hidden">
                    <div
                      className="h-full bg-gold/60"
                      style={{
                        width: `${(count / Math.max(...starCounts.map(s => s.count))) * 100}%`
                      }}
                    />
                  </div>
                  <span className="text-xs text-muted-foreground w-8 text-right">{count}</span>
                </div>
              ))}
            </div>
          </GlassCard>

          {/* Reviews List */}
          <div className="space-y-4 lg:col-span-2">
            {reviews.slice(0, 6).map((review) => (
              <GlassCard key={review.id} className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center gap-3">
                      <h3 className="font-serif font-semibold text-foreground">
                        {review.name}
                      </h3>
                      {review.verified && (
                        <span className="text-xs bg-green-500/10 text-green-400 border border-green-500/20 px-2 py-0.5 rounded-full">
                          Verified
                        </span>
                      )}
                    </div>
                    
                    <div className="mt-2 flex items-center gap-1">
                      {Array.from({ length: 5 }).map((_, i) => (
                        <Star
                          key={i}
                          className={`h-3.5 w-3.5 ${
                            i < review.rating ? "fill-gold text-gold" : "text-border"
                          }`}
                        />
                      ))}
                    </div>
                  </div>
                  <span className="text-xs text-muted-foreground">
                    {new Date(review.date).toLocaleDateString('en-IN', {
                      year: 'numeric',
                      month: 'short',
                      day: 'numeric'
                    })}
                  </span>
                </div>
                
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {review.comment}
                </p>
              </GlassCard>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
