import type { Metadata } from "next"
import { CheckoutForm } from "@/components/products/checkout-form"

export const metadata: Metadata = {
  title: "Checkout",
  description: "Complete your order with secure checkout.",
}

export default function CheckoutPage() {
  return (
    <section className="pt-32 pb-20 md:pt-40">
      <div className="mx-auto max-w-5xl px-4 md:px-6">
        <h1 className="font-serif text-3xl font-bold text-foreground md:text-4xl">
          Checkout
        </h1>
        <div className="gold-line mt-4 w-16" />
        <CheckoutForm />
      </div>
    </section>
  )
}
