"use client"

import Image from "next/image"
import Link from "next/link"
import { ShoppingBag } from "lucide-react"
import type { Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
}

export function ProductsGrid({ products }: { products: Product[] }) {
  const { addItem } = useCart()

  return (
    <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
      {products.map((product) => {
        const firstVariant = product.variants[0]
        return (
          <GlassCard key={product.id} className="flex flex-col overflow-hidden p-0">
            <Link href={`/products/${product.slug}`} className="group block">
              <div className="relative aspect-square">
                <Image
                  src={product.images[0]}
                  alt={`${product.title} - premium fragrance by Mahadev Aromatic`}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
                {firstVariant.discountPrice && (
                  <span className="absolute top-3 right-3 rounded-full bg-gold px-2.5 py-1 text-xs font-bold text-primary-foreground">
                    {Math.round(
                      ((firstVariant.price - firstVariant.discountPrice) /
                        firstVariant.price) *
                        100
                    )}
                    % OFF
                  </span>
                )}
              </div>
            </Link>
            <div className="flex flex-1 flex-col p-6">
              <span className="text-xs text-gold">{product.category}</span>
              <Link href={`/products/${product.slug}`}>
                <h3 className="mt-1 font-serif text-lg font-bold text-foreground hover:text-gold transition-colors">
                  {product.title}
                </h3>
              </Link>
              <p className="mt-2 flex-1 text-sm text-muted-foreground line-clamp-2">
                {product.description}
              </p>
              <div className="mt-4 flex items-center gap-2">
                {firstVariant.discountPrice ? (
                  <>
                    <span className="font-serif text-xl font-bold text-gold">
                      {formatPrice(firstVariant.discountPrice)}
                    </span>
                    <span className="text-sm text-muted-foreground line-through">
                      {formatPrice(firstVariant.price)}
                    </span>
                  </>
                ) : (
                  <span className="font-serif text-xl font-bold text-gold">
                    {formatPrice(firstVariant.price)}
                  </span>
                )}
              </div>
              {product.variants.length > 1 && (
                <p className="mt-1 text-xs text-muted-foreground">
                  {product.variants.length} sizes available
                </p>
              )}
              <Button
                className="mt-4 w-full bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
                onClick={() => addItem(product, firstVariant)}
              >
                <ShoppingBag className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </div>
          </GlassCard>
        )
      })}
    </div>
  )
}
