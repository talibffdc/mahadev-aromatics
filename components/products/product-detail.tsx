"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ShoppingBag, Minus, Plus, Truck, ShieldCheck, RotateCcw } from "lucide-react"
import { cn } from "@/lib/utils"
import type { Product } from "@/lib/products"
import { useCart } from "@/lib/cart-context"
import { Button } from "@/components/ui/button"

function formatPrice(price: number) {
  return new Intl.NumberFormat("en-IN", {
    style: "currency",
    currency: "INR",
    maximumFractionDigits: 0,
  }).format(price)
}

export function ProductDetail({ product }: { product: Product }) {
  const [selectedVariant, setSelectedVariant] = useState(0)
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const { addItem } = useCart()

  const variant = product.variants[selectedVariant]
  const price = variant.discountPrice ?? variant.price

  const handleAddToCart = () => {
    addItem(product, variant, quantity)
  }

  return (
    <div className="grid gap-10 lg:grid-cols-2">
      {/* Images */}
      <div>
        <div className="relative aspect-square overflow-hidden rounded-2xl border border-border/40">
          <Image
            src={product.images[selectedImage]}
            alt={`${product.title} - ${product.category} by Mahadev Aromatic`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
            priority
          />
          {variant.discountPrice && (
            <span className="absolute top-4 right-4 rounded-full bg-gold px-3 py-1.5 text-sm font-bold text-primary-foreground">
              {Math.round(
                ((variant.price - variant.discountPrice) / variant.price) * 100
              )}
              % OFF
            </span>
          )}
        </div>
        {product.images.length > 1 && (
          <div className="mt-4 flex gap-3">
            {product.images.map((img, i) => (
              <button
                key={i}
                onClick={() => setSelectedImage(i)}
                className={cn(
                  "relative h-20 w-20 overflow-hidden rounded-lg border-2 transition-all",
                  selectedImage === i
                    ? "border-gold"
                    : "border-border/40 hover:border-border"
                )}
              >
                <Image src={img} alt={`${product.title} - view ${i + 1}`} fill sizes="80px" className="object-cover" />
              </button>
            ))}
          </div>
        )}
      </div>

      {/* Details */}
      <div>
        <span className="text-sm font-medium text-gold">{product.category}</span>
        <h1 className="mt-2 font-serif text-3xl font-bold text-foreground md:text-4xl">
          {product.title}
        </h1>

        {/* Price */}
        <div className="mt-4 flex items-baseline gap-3">
          <span className="font-serif text-3xl font-bold text-gold">
            {formatPrice(price)}
          </span>
          {variant.discountPrice && (
            <span className="text-lg text-muted-foreground line-through">
              {formatPrice(variant.price)}
            </span>
          )}
        </div>

        <p className="mt-4 leading-relaxed text-muted-foreground">
          {product.description}
        </p>

        {/* Variants */}
        <div className="mt-6">
          <p className="text-sm font-medium text-foreground">Size / Volume</p>
          <div className="mt-2 flex flex-wrap gap-2">
            {product.variants.map((v, i) => (
              <button
                key={v.id}
                onClick={() => {
                  setSelectedVariant(i)
                  setQuantity(1)
                }}
                className={cn(
                  "rounded-lg border px-4 py-2 text-sm font-medium transition-all",
                  selectedVariant === i
                    ? "border-gold bg-gold/10 text-gold"
                    : "border-border/60 text-muted-foreground hover:border-gold/30"
                )}
              >
                {v.name}
              </button>
            ))}
          </div>
        </div>

        {/* Stock */}
        <p className="mt-3 text-xs text-muted-foreground">
          SKU: {variant.sku} | {variant.stock > 0 ? `${variant.stock} in stock` : "Out of stock"}
        </p>

        {/* Quantity */}
        <div className="mt-6 flex items-center gap-4">
          <p className="text-sm font-medium text-foreground">Quantity</p>
          <div className="flex items-center rounded-lg border border-border/60">
            <button
              onClick={() => setQuantity(Math.max(1, quantity - 1))}
              className="flex h-10 w-10 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Decrease quantity"
            >
              <Minus className="h-4 w-4" />
            </button>
            <span className="flex h-10 w-12 items-center justify-center text-sm font-medium text-foreground">
              {quantity}
            </span>
            <button
              onClick={() => setQuantity(Math.min(variant.stock, quantity + 1))}
              className="flex h-10 w-10 items-center justify-center text-muted-foreground hover:text-foreground transition-colors"
              aria-label="Increase quantity"
            >
              <Plus className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Actions */}
        <div className="mt-8 flex flex-wrap gap-3">
          <Button
            size="lg"
            className="flex-1 bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
            onClick={handleAddToCart}
            disabled={variant.stock === 0}
          >
            <ShoppingBag className="mr-2 h-4 w-4" />
            Add to Cart
          </Button>
          <Button
            asChild
            size="lg"
            variant="outline"
            className="flex-1 border-gold/30 text-foreground hover:bg-gold/10 hover:border-gold/50 font-medium"
          >
            <Link href="/cart">Buy Now</Link>
          </Button>
        </div>

        {/* Trust badges */}
        <div className="mt-8 grid grid-cols-3 gap-4">
          {[
            { icon: Truck, label: "Free Shipping", sub: "Above Rs.999" },
            { icon: ShieldCheck, label: "Authentic", sub: "100% Genuine" },
            { icon: RotateCcw, label: "Easy Returns", sub: "7 Day Policy" },
          ].map(({ icon: Icon, label, sub }) => (
            <div key={label} className="text-center">
              <Icon className="mx-auto h-5 w-5 text-gold" />
              <p className="mt-1.5 text-xs font-medium text-foreground">{label}</p>
              <p className="text-xs text-muted-foreground">{sub}</p>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="mt-6 flex flex-wrap gap-1.5">
          {product.tags.map((tag) => (
            <span
              key={tag}
              className="rounded-full bg-secondary px-3 py-1 text-xs text-muted-foreground"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Long description */}
        <div className="mt-8 border-t border-border/40 pt-8">
          <h2 className="font-serif text-xl font-bold text-foreground">Product Details</h2>
          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {product.longDescription}
          </p>
        </div>
      </div>
    </div>
  )
}
