import type { Metadata } from "next"
import { CartView } from "@/components/products/cart-view"

export const metadata: Metadata = {
  title: "Shopping Cart",
  description: "Review your shopping cart and proceed to checkout.",
}

export default function CartPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40">
      <div className="mx-auto max-w-4xl px-4 md:px-6">
        <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          Shopping Cart
        </h1>
        <div className="gold-line mt-4 w-16" />
        <CartView />
      </div>
    </section>
  )
}
