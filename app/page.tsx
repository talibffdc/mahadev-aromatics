import { Hero } from "@/components/home/hero"
import { TrustSection } from "@/components/home/trust-section"
import { ServicesOverview } from "@/components/home/services-overview"
import { ProductCategories } from "@/components/home/product-categories"
import { WhyChooseUs } from "@/components/home/why-choose-us"
import { OurProcess } from "@/components/home/our-process"
import { ClientsSection } from "@/components/home/clients-section"
import { ReviewsSection } from "@/components/home/reviews-section"
import { ContactCta } from "@/components/home/contact-cta"

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustSection />
      <ServicesOverview />
      <ProductCategories />
      <WhyChooseUs />
      <OurProcess />
      <ReviewsSection />
      <ClientsSection />
      <ContactCta />
    </>
  )
}
