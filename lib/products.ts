export interface ProductVariant {
  id: string
  name: string
  price: number
  discountPrice?: number
  sku: string
  stock: number
}

export interface Product {
  id: string
  title: string
  slug: string
  description: string
  longDescription: string
  images: string[]
  category: string
  tags: string[]
  variants: ProductVariant[]
  featured: boolean
  seo: {
    metaTitle: string
    metaDescription: string
  }
}

export const PRODUCT_CATEGORIES_LIST = [
  "Perfumes & Attars",
  "Body Mists & Sprays",
  "Essential Oils",
] as const

export const DEMO_PRODUCTS: Product[] = [
  {
    id: "prod-001",
    title: "Royal Oud Perfume",
    slug: "royal-oud-perfume",
    description:
      "A majestic blend of aged oud, rose, and sandalwood that evokes regal sophistication. Crafted by master perfumers using the finest natural ingredients.",
    longDescription:
      "Royal Oud is our signature creation that pays homage to the timeless tradition of oud perfumery. This luxurious composition opens with rich, smoky oud wood notes, complemented by velvety Bulgarian rose and creamy Indian sandalwood. The heart reveals warm amber and subtle saffron, while the base lingers with musk, vetiver, and a whisper of vanilla. Each bottle is meticulously crafted using aged oud oil and the finest natural ingredients, making it a true collector's fragrance. Perfect for evening wear and special occasions.",
    images: [
      "https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80",
      "https://images.unsplash.com/photo-1585386959984-a4155224a1ad?w=800&q=80",
      "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80",
    ],
    category: "Perfumes & Attars",
    tags: ["oud", "luxury", "unisex", "evening wear", "natural"],
    variants: [
      {
        id: "v-001-12ml",
        name: "12ml Attar",
        price: 2499,
        discountPrice: 1999,
        sku: "MA-RO-12",
        stock: 50,
      },
      {
        id: "v-001-50ml",
        name: "50ml EDP",
        price: 4999,
        discountPrice: 3999,
        sku: "MA-RO-50",
        stock: 30,
      },
      {
        id: "v-001-100ml",
        name: "100ml EDP",
        price: 7999,
        discountPrice: 6499,
        sku: "MA-RO-100",
        stock: 20,
      },
    ],
    featured: true,
    seo: {
      metaTitle: "Royal Oud Perfume | Premium Oud Fragrance | Mahadev Aromatic",
      metaDescription:
        "Experience the majesty of Royal Oud - a luxurious blend of aged oud, Bulgarian rose, and Indian sandalwood. Handcrafted by master perfumers at Mahadev Aromatic.",
    },
  },
  {
    id: "prod-002",
    title: "Fresh Aqua Body Mist",
    slug: "fresh-aqua-body-mist",
    description:
      "A refreshing aquatic mist with ocean breeze notes, bergamot, and white tea. Light, invigorating, and perfect for everyday freshness.",
    longDescription:
      "Fresh Aqua captures the essence of a pristine morning by the sea. This invigorating body mist combines crisp aquatic notes with sparkling bergamot and delicate white tea, creating a sensation of pure freshness. The transparent floral heart of lotus and lily of the valley adds elegance, while a clean base of white musk and cedar keeps you feeling refreshed throughout the day. Formulated with skin-friendly ingredients and a micro-fine mist spray for even application. Ideal for daily use, post-workout, or whenever you need a burst of freshness.",
    images: [
      "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=800&q=80",
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80",
      "https://images.unsplash.com/photo-1585421514284-efb74c2b69ba?w=800&q=80",
    ],
    category: "Body Mists & Sprays",
    tags: ["aquatic", "fresh", "daily wear", "unisex", "body mist"],
    variants: [
      {
        id: "v-002-100ml",
        name: "100ml",
        price: 699,
        discountPrice: 549,
        sku: "MA-FA-100",
        stock: 100,
      },
      {
        id: "v-002-200ml",
        name: "200ml",
        price: 1199,
        discountPrice: 949,
        sku: "MA-FA-200",
        stock: 75,
      },
    ],
    featured: true,
    seo: {
      metaTitle: "Fresh Aqua Body Mist | Refreshing Aquatic Fragrance | Mahadev Aromatic",
      metaDescription:
        "Stay fresh all day with Fresh Aqua Body Mist - a light, invigorating blend of ocean breeze, bergamot, and white tea. Shop now at Mahadev Aromatic.",
    },
  },
  {
    id: "prod-003",
    title: "Premium Sandalwood Attar",
    slug: "premium-sandalwood-attar",
    description:
      "Pure Indian sandalwood attar distilled from aged Mysore sandalwood. A timeless classic with warm, creamy, and meditative qualities.",
    longDescription:
      "Our Premium Sandalwood Attar is a tribute to the centuries-old tradition of Indian attar-making. Distilled using the traditional deg-bhapka method from carefully selected aged Mysore sandalwood, this attar offers an extraordinarily smooth, creamy, and warm scent profile. The initial notes reveal buttery wood with subtle sweetness, developing into a rich, meditative depth that lasts for hours on the skin. Each batch is aged for a minimum of 6 months to develop its full character. This attar is 100% natural, alcohol-free, and perfect for those who appreciate the authentic artistry of Indian perfumery.",
    images: [
      "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&q=80",
      "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=800&q=80",
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800&q=80",
    ],
    category: "Perfumes & Attars",
    tags: ["sandalwood", "natural", "attar", "traditional", "unisex"],
    variants: [
      {
        id: "v-003-3ml",
        name: "3ml Attar",
        price: 1499,
        discountPrice: 1299,
        sku: "MA-SA-3",
        stock: 40,
      },
      {
        id: "v-003-6ml",
        name: "6ml Attar",
        price: 2799,
        discountPrice: 2399,
        sku: "MA-SA-6",
        stock: 25,
      },
      {
        id: "v-003-12ml",
        name: "12ml Attar",
        price: 4999,
        discountPrice: 4299,
        sku: "MA-SA-12",
        stock: 15,
      },
    ],
    featured: true,
    seo: {
      metaTitle: "Premium Sandalwood Attar | Pure Mysore Sandalwood | Mahadev Aromatic",
      metaDescription:
        "Experience the authentic warmth of Premium Sandalwood Attar - distilled from aged Mysore sandalwood using traditional methods. Shop at Mahadev Aromatic.",
    },
  },
]
