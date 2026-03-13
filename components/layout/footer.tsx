import Link from "next/link"
import { Mail, Phone, MapPin } from "lucide-react"
import { COMPANY, NAV_LINKS, SERVICES } from "@/lib/constants"

export function Footer() {
  return (
    <footer className="border-t border-border/50 bg-background">
      <div className="mx-auto max-w-7xl px-4 py-16 md:px-6">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">
          {/* Company Info */}
          <div>
            <Link href="/" className="inline-block">
              <span className="font-serif text-lg font-bold tracking-wide text-foreground">
                MAHADEV{" "}
              </span>
              <span className="text-gold-gradient font-serif text-lg font-bold tracking-wide">
                AROMATIC
              </span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
              {COMPANY.tagline}. Based in the perfume capital of India,
              Kannauj, we combine traditional craftsmanship with modern
              analytical science.
            </p>
            <div className="mt-6 flex flex-col gap-3">
              {COMPANY.labCertifications.map((cert) => (
                <span
                  key={cert}
                  className="inline-flex w-fit items-center rounded-full border border-border/60 px-3 py-1 text-xs text-muted-foreground"
                >
                  {cert}
                </span>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
              Navigation
            </h3>
            <div className="gold-line mt-3 w-12" />
            <ul className="mt-4 flex flex-col gap-2.5">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
              Services
            </h3>
            <div className="gold-line mt-3 w-12" />
            <ul className="mt-4 flex flex-col gap-2.5">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-gold"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
              Contact
            </h3>
            <div className="gold-line mt-3 w-12" />
            <ul className="mt-4 flex flex-col gap-4">
              <li className="flex items-start gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`tel:${COMPANY.phone}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {COMPANY.phone}
                  </a>
                  {COMPANY.phone2 && (
                    <a
                      href={`tel:${COMPANY.phone2}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {COMPANY.phone2}
                    </a>
                  )}
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                <div className="flex flex-col gap-1">
                  <a
                    href={`mailto:${COMPANY.email}`}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {COMPANY.email}
                  </a>
                  {COMPANY.email2 && (
                    <a
                      href={`mailto:${COMPANY.email2}`}
                      className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {COMPANY.email2}
                    </a>
                  )}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Locations Section */}
        <div className="mt-12 border-t border-border/50 pt-10">
          <h3 className="font-serif text-sm font-semibold uppercase tracking-wider text-foreground">
            Locations
          </h3>
          <div className="gold-line mt-3 w-12" />
          <div className="mt-6 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Plant Unit */}
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                  Plant Unit
                </span>
                <span className="text-sm text-muted-foreground">
                  Mahadev Aromatics
                </span>
                <span className="text-sm text-muted-foreground">
                  Plot No. 69, Phase-3, Sector-24
                </span>
                <span className="text-sm text-muted-foreground">
                  HSIIDC Industrial Estate, Barhi
                </span>
                <span className="text-sm text-muted-foreground">
                  Sonipat, Haryana 131101, India
                </span>
                <span className="mt-1 text-xs text-muted-foreground">
                  GST: {COMPANY.gst}
                </span>
              </div>
            </div>

            {/* Creative Centre */}
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                  Creative Centre
                </span>
                <span className="text-sm text-muted-foreground">
                  Plot No. A-26
                </span>
                <span className="text-sm text-muted-foreground">
                  Arti Nagar, Jagatpura
                </span>
                <span className="text-sm text-muted-foreground">
                  Jaipur, Rajasthan 302017, India
                </span>
              </div>
            </div>

            {/* Kannauj Natural Manufacturing Unit */}
            <div className="flex items-start gap-3">
              <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
              <div className="flex flex-col gap-0.5">
                <span className="text-xs font-semibold uppercase tracking-wide text-foreground">
                  Kannauj Natural Manufacturing Unit
                </span>
                <span className="text-sm text-muted-foreground">
                  Plot No. 308
                </span>
                <span className="text-sm text-muted-foreground">
                  Sekhpura Area
                </span>
                <span className="text-sm text-muted-foreground">
                  Kannauj, Uttar Pradesh 209725, India
                </span>
                <a
                  href="http://fragranzia.in/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 text-sm text-gold transition-colors hover:text-gold/80"
                >
                  fragranzia.in
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="gold-line mt-12" />
        <div className="mt-8 flex flex-col items-center justify-between gap-4 md:flex-row">
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} {COMPANY.name}. All rights
            reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="/privacy-policy"
              className="text-xs text-muted-foreground transition-colors hover:text-gold"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-and-conditions"
              className="text-xs text-muted-foreground transition-colors hover:text-gold"
            >
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
