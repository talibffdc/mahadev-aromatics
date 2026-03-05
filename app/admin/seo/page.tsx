import { Globe, FileText, CheckCircle2 } from "lucide-react"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

const SEO_CHECKLIST = [
  { item: "Meta titles on all pages", done: true },
  { item: "Meta descriptions on all pages", done: true },
  { item: "Open Graph tags configured", done: true },
  { item: "Twitter card tags configured", done: true },
  { item: "Organization schema markup", done: true },
  { item: "Product schema markup", done: true },
  { item: "Article schema markup", done: true },
  { item: "Service schema markup", done: true },
  { item: "Dynamic sitemap.xml", done: true },
  { item: "robots.txt configured", done: true },
  { item: "Canonical URLs set", done: true },
  { item: "Image alt texts", done: true },
  { item: "Breadcrumb navigation", done: true },
]

export default function AdminSEOPage() {
  return (
    <div>
      <div>
        <h1 className="font-serif text-2xl font-bold text-foreground">SEO Settings</h1>
        <p className="mt-1 text-sm text-muted-foreground">
          Configure global SEO settings and metadata
        </p>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-2">
        {/* Global SEO */}
        <GlassCard>
          <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
            <Globe className="h-5 w-5 text-gold" />
            Global Metadata
          </h2>
          <div className="mt-4 space-y-4">
            <div>
              <Label htmlFor="site-title" className="text-foreground">Site Title</Label>
              <Input
                id="site-title"
                defaultValue="Mahadev Aromatic | Custom Fragrance Development & GCMS Analysis"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="site-desc" className="text-foreground">Site Description</Label>
              <Textarea
                id="site-desc"
                defaultValue="Leading fragrance development laboratory specializing in GCMS analysis, custom fragrance creation, aroma chemistry, and industrial perfumery solutions."
                rows={3}
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="canonical" className="text-foreground">Canonical URL</Label>
              <Input
                id="canonical"
                defaultValue="https://mahadevaromatic.com"
                className="mt-1"
              />
            </div>
            <div>
              <Label htmlFor="keywords" className="text-foreground">Keywords</Label>
              <Textarea
                id="keywords"
                defaultValue="fragrance development, GCMS analysis, custom perfume, aroma chemicals, Kannauj perfume"
                rows={2}
                className="mt-1"
              />
            </div>
            <Button className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium">
              Save Settings
            </Button>
          </div>
        </GlassCard>

        {/* Checklist */}
        <GlassCard>
          <h2 className="flex items-center gap-2 font-serif text-lg font-bold text-foreground">
            <FileText className="h-5 w-5 text-gold" />
            SEO Checklist
          </h2>
          <p className="mt-1 text-xs text-muted-foreground">
            {SEO_CHECKLIST.filter((c) => c.done).length}/{SEO_CHECKLIST.length} completed
          </p>
          <div className="mt-4 space-y-2">
            {SEO_CHECKLIST.map((check) => (
              <div key={check.item} className="flex items-center gap-3 rounded-lg border border-border/40 px-4 py-2.5">
                <CheckCircle2
                  className={`h-4 w-4 shrink-0 ${check.done ? "text-green-400" : "text-muted-foreground"}`}
                />
                <span className={`text-sm ${check.done ? "text-foreground" : "text-muted-foreground"}`}>
                  {check.item}
                </span>
              </div>
            ))}
          </div>
        </GlassCard>
      </div>
    </div>
  )
}
