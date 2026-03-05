import { Mail, Phone, MapPin, MessageCircle, Clock } from "lucide-react"
import { COMPANY } from "@/lib/constants"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"

const INFO_ITEMS = [
  {
    icon: Phone,
    label: "Phone",
    value: COMPANY.phone,
    href: `tel:${COMPANY.phone}`,
  },
  {
    icon: Mail,
    label: "Email",
    value: COMPANY.email,
    href: `mailto:${COMPANY.email}`,
  },
  {
    icon: MapPin,
    label: "Address",
    value: COMPANY.address,
    href: null,
  },
  {
    icon: Clock,
    label: "Working Hours",
    value: "Mon - Sat: 9:00 AM - 6:00 PM IST",
    href: null,
  },
]

export function ContactInfo() {
  return (
    <div className="space-y-6">
      <GlassCard>
        <h2 className="font-serif text-xl font-bold text-foreground">
          Contact Information
        </h2>
        <div className="mt-6 space-y-5">
          {INFO_ITEMS.map(({ icon: Icon, label, value, href }) => (
            <div key={label} className="flex items-start gap-3">
              <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-gold/10">
                <Icon className="h-4 w-4 text-gold" />
              </div>
              <div>
                <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  {label}
                </p>
                {href ? (
                  <a
                    href={href}
                    className="mt-0.5 text-sm text-foreground hover:text-gold transition-colors"
                  >
                    {value}
                  </a>
                ) : (
                  <p className="mt-0.5 text-sm text-foreground">{value}</p>
                )}
              </div>
            </div>
          ))}
        </div>
      </GlassCard>

      {/* WhatsApp */}
      <GlassCard className="text-center">
        <MessageCircle className="mx-auto h-8 w-8 text-gold" />
        <h3 className="mt-3 font-serif text-lg font-semibold text-foreground">
          Chat on WhatsApp
        </h3>
        <p className="mt-1 text-sm text-muted-foreground">
          Get instant support from our team.
        </p>
        <Button
          asChild
          className="mt-4 w-full bg-gold text-primary-foreground hover:bg-gold-dark font-medium"
        >
          <a
            href={`https://wa.me/${COMPANY.whatsapp}?text=Hello%20Mahadev%20Aromatic%2C%20I%20would%20like%20to%20inquire%20about%20your%20services.`}
            target="_blank"
            rel="noopener noreferrer"
          >
            <MessageCircle className="mr-2 h-4 w-4" />
            Start WhatsApp Chat
          </a>
        </Button>
      </GlassCard>

      {/* Certifications */}
      <GlassCard>
        <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
          Certifications
        </h3>
        <div className="mt-3 flex flex-wrap gap-2">
          {COMPANY.labCertifications.map((cert) => (
            <span
              key={cert}
              className="rounded-full border border-gold/20 bg-gold/5 px-3 py-1 text-xs text-gold"
            >
              {cert}
            </span>
          ))}
        </div>
      </GlassCard>
    </div>
  )
}
