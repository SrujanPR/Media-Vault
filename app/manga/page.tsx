"use client"
import { Navigation } from "@/components/navigation"
import { MediaSection } from "@/components/media-section"
import { mangaData } from "@/lib/data"
import { useMemo, useState } from "react"
import { Input } from "@/components/ui/input"
import { MediaCard } from "@/components/media-card"
import { Search } from "lucide-react"

export default function MangaPage() {
  const [query, setQuery] = useState("")
  const allItems = useMemo(() => [...mangaData.completed, ...mangaData.currentlyWatching], [])
  const results = useMemo(() => {
    const q = query.trim().toLowerCase()
    if (!q) return []
    return allItems.filter((i) => i.title.toLowerCase().includes(q))
  }, [query, allItems])

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      <main className="container mx-auto px-4 py-8">
        <div className="text-center space-y-4 mb-12">
          <h1 className="text-3xl md:text-4xl font-bold text-balance bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Manga Collection
          </h1>
          <p className="text-muted-foreground max-w-2xl mx-auto text-balance">
            Organize your manga reading list and completed series
          </p>
        </div>

        <div className="max-w-md mx-auto mb-10">
          <div className="relative">
            <Search
              className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground z-10"
              aria-hidden="true"
            />
            <Input
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              placeholder="Search manga (title)..."
              aria-label="Search manga by title"
              className="bg-background/60 backdrop-blur border-muted/40 focus-visible:ring-primary text-foreground pl-9"
            />
          </div>
        </div>

        {query ? (
          <section className="space-y-6">
            <h2 className="text-2xl font-bold text-foreground">Search Results</h2>
            {results.length ? (
              <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6">
                {results.map((item) => (
                  <MediaCard key={item.id} item={item} />
                ))}
              </div>
            ) : (
              <p className="text-muted-foreground">No results found.</p>
            )}
          </section>
        ) : (
          <div className="space-y-12">
            <MediaSection title="Completed" items={mangaData.completed} />
            <MediaSection title="Currently Reading" items={mangaData.currentlyWatching} />
          </div>
        )}
      </main>
    </div>
  )
}
