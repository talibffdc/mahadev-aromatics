import { Plus, Edit, Trash2, Globe } from "lucide-react"
import { SERVICES } from "@/lib/constants"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"

export default function AdminServicesPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Services</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Manage your service pages
          </p>
        </div>
        <Button className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium">
          <Plus className="mr-2 h-4 w-4" />
          New Service
        </Button>
      </div>

      <div className="mt-8 space-y-4">
        {SERVICES.map((service) => (
          <GlassCard key={service.slug} className="flex items-center gap-4">
            <div className="flex-1 min-w-0">
              <h3 className="font-serif text-sm font-semibold text-foreground">
                {service.title}
              </h3>
              <div className="mt-1 flex items-center gap-3 text-xs text-muted-foreground">
                <span className="flex items-center gap-1">
                  <Globe className="h-3 w-3" />
                  /services/{service.slug}
                </span>
                <span>{service.industries.length} industries</span>
                <span>{service.faqs.length} FAQs</span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="border-border/60 text-muted-foreground hover:text-foreground">
                <Edit className="h-3.5 w-3.5" />
                <span className="sr-only">Edit</span>
              </Button>
              <Button variant="outline" size="sm" className="border-border/60 text-muted-foreground hover:text-destructive">
                <Trash2 className="h-3.5 w-3.5" />
                <span className="sr-only">Delete</span>
              </Button>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
