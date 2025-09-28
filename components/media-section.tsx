import type { MediaItem } from "@/lib/data"
import { MediaCard } from "./media-card"

interface MediaSectionProps {
  title: string
  items: MediaItem[]
}

export function MediaSection({ title, items }: MediaSectionProps) {
  return (
    <section className="space-y-6">
      <h2 className="text-2xl font-bold text-foreground">{title}</h2>
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
        {items.map((item) => (
          <MediaCard key={item.id} item={item} />
        ))}
      </div>
    </section>
  )
}
