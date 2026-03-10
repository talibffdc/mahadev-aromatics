export interface Review {
  id: string
  name: string
  rating: number
  comment: string
  productId?: string
  verified: boolean
  date: string
}

export const DEMO_REVIEWS: Review[] = [
  {
    id: "rev-001",
    name: "Rajesh Kumar",
    rating: 5,
    comment: "Absolutely premium quality! The Royal Oud fragrance is exceptional. Worth every rupee. The scent lasts all day and the bottle is beautifully designed.",
    productId: "prod-001",
    verified: true,
    date: "2025-12-20",
  },
  {
    id: "rev-002",
    name: "Priya Sharma",
    rating: 5,
    comment: "I've been using the Fresh Aqua Body Mist for a month now. It's so refreshing and doesn't leave any residue. Perfect for daily use!",
    productId: "prod-002",
    verified: true,
    date: "2025-12-15",
  },
  {
    id: "rev-003",
    name: "Amit Patel",
    rating: 4,
    comment: "The Premium Sandalwood Attar is authentic and long-lasting. A bit pricey but the quality justifies it. Highly recommended for sandalwood lovers.",
    productId: "prod-003",
    verified: true,
    date: "2025-12-10",
  },
  {
    id: "rev-004",
    name: "Sneha Desai",
    rating: 5,
    comment: "Mahadev Aromatics has exceeded my expectations. Their customer service is excellent and the fragrance collection is outstanding. Definitely ordering again!",
    verified: true,
    date: "2025-12-05",
  },
  {
    id: "rev-005",
    name: "Vikram Singh",
    rating: 4,
    comment: "The packaging is elegant and the fragrance is high quality. The delivery was fast too. Would give 5 stars if the price was a bit lower.",
    verified: true,
    date: "2025-11-28",
  },
  {
    id: "rev-006",
    name: "Ananya Gupta",
    rating: 5,
    comment: "Finally found a brand that takes fragrance seriously. Every product from Mahadev Aromatics is carefully crafted. Impressed with their attention to detail!",
    verified: true,
    date: "2025-11-20",
  },
]

export function getAverageRating(reviews: Review[]): number {
  if (reviews.length === 0) return 0
  const sum = reviews.reduce((acc, review) => acc + review.rating, 0)
  return Math.round((sum / reviews.length) * 10) / 10
}

export function getReviewSchema(reviews: Review[]) {
  const avgRating = getAverageRating(reviews)
  return {
    "@context": "https://schema.org",
    "@type": "AggregateRating",
    "ratingValue": avgRating,
    "reviewCount": reviews.length,
    "bestRating": "5",
    "worstRating": "1"
  }
}

export function getReviewSchemas(reviews: Review[]) {
  return reviews.map(review => ({
    "@context": "https://schema.org",
    "@type": "Review",
    "reviewRating": {
      "@type": "Rating",
      "ratingValue": review.rating,
      "bestRating": "5",
      "worstRating": "1"
    },
    "reviewBody": review.comment,
    "author": {
      "@type": "Person",
      "name": review.name
    },
    "datePublished": review.date
  }))
}
