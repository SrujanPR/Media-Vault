import type { MediaItem } from "@/lib/data"
import { Card, CardContent } from "@/components/ui/card"
import Image from "next/image"
import Link from "next/link"

interface MediaCardProps {
  item: MediaItem
}

export function MediaCard({ item }: MediaCardProps) {
  return (
    <Card className="group overflow-hidden border-0 bg-card/50 backdrop-blur-sm transition-all duration-500 hover:scale-110 hover:shadow-2xl hover:shadow-primary/30 hover:bg-card/70">
      <CardContent className="p-0">
        <div className="relative aspect-[2/3] overflow-hidden">
          <Image
            src={item.image || "/placeholder.svg"}
            alt={item.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-125"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
        </div>
        <div className="p-6">
          <Link
            href={item.link}
            target="_blank"
            rel="noopener noreferrer"
            className="block text-base font-medium text-foreground transition-colors hover:text-primary text-center"
          >
            <h3 className="line-clamp-2 text-balance">{item.title}</h3>
          </Link>
        </div>
      </CardContent>
    </Card>
  )
}
