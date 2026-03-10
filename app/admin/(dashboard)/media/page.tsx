import Image from "next/image"
import { Upload, Trash2 } from "lucide-react"
import { GlassCard } from "@/components/shared/glass-card"
import { Button } from "@/components/ui/button"

const MEDIA_ITEMS = [
  { name: "perfume-lab.jpg", url: "https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=400&q=80", size: "1.2 MB" },
  { name: "fragrance-bottles.jpg", url: "https://images.unsplash.com/photo-1541643600914-78b084683601?w=400&q=80", size: "890 KB" },
  { name: "body-mist.jpg", url: "https://images.unsplash.com/photo-1556228578-0d85b1a4d571?w=400&q=80", size: "756 KB" },
  { name: "essential-oil.jpg", url: "https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=400&q=80", size: "1.1 MB" },
  { name: "gcms-machine.jpg", url: "https://images.unsplash.com/photo-1579154204601-01588f351e67?w=400&q=80", size: "945 KB" },
  { name: "laboratory.jpg", url: "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=400&q=80", size: "1.3 MB" },
  { name: "candles.jpg", url: "https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=400&q=80", size: "680 KB" },
  { name: "cosmetics.jpg", url: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=400&q=80", size: "820 KB" },
]

export default function AdminMediaPage() {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div>
          <h1 className="font-serif text-2xl font-bold text-foreground">Media Library</h1>
          <p className="mt-1 text-sm text-muted-foreground">
            Upload and manage images and assets
          </p>
        </div>
        <Button className="bg-gold text-primary-foreground hover:bg-gold-dark font-medium">
          <Upload className="mr-2 h-4 w-4" />
          Upload Files
        </Button>
      </div>

      {/* Upload zone */}
      <div className="mt-8">
        <GlassCard className="border-2 border-dashed border-gold/20 py-12 text-center">
          <Upload className="mx-auto h-10 w-10 text-muted-foreground" />
          <p className="mt-3 text-sm text-muted-foreground">
            Drag and drop files here, or click to browse
          </p>
          <p className="mt-1 text-xs text-muted-foreground">
            Supports JPG, PNG, WebP up to 10MB
          </p>
        </GlassCard>
      </div>

      {/* Gallery */}
      <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-4">
        {MEDIA_ITEMS.map((item) => (
          <GlassCard key={item.name} className="group relative overflow-hidden p-0">
            <div className="relative aspect-square">
              <Image
                src={item.url}
                alt={item.name}
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-background/60 opacity-0 transition-opacity group-hover:opacity-100">
                <Button variant="outline" size="sm" className="border-border text-foreground">
                  <Trash2 className="mr-1 h-3 w-3" />
                  Delete
                </Button>
              </div>
            </div>
            <div className="p-3">
              <p className="truncate text-xs font-medium text-foreground">{item.name}</p>
              <p className="text-xs text-muted-foreground">{item.size}</p>
            </div>
          </GlassCard>
        ))}
      </div>
    </div>
  )
}
