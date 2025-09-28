import { Navigation } from "@/components/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import Link from "next/link"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <Navigation />

      <main className="container mx-auto px-4 py-12">
        <div className="text-center space-y-8 mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-balance bg-gradient-to-r from-foreground to-muted-foreground bg-clip-text text-transparent">
            Welcome to MediaVault
          </h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-balance">
            Your futuristic collection hub for anime, manga, and manhwa. Organize, track, and discover your favorite
            media in style.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <Card className="group border-0 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <span className="text-2xl">📺</span>
              </div>
              <CardTitle className="text-xl">Anime</CardTitle>
              <CardDescription>Discover and track your favorite animated series</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild className="w-full">
                <Link href="/anime">Explore Anime</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <span className="text-2xl">📚</span>
              </div>
              <CardTitle className="text-xl">Manga</CardTitle>
              <CardDescription>Read and organize your Japanese comic collection</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild className="w-full">
                <Link href="/manga">Explore Manga</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <span className="text-2xl">🎨</span>
              </div>
              <CardTitle className="text-xl">Manhwa</CardTitle>
              <CardDescription>Dive into Korean webtoons and digital comics</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild className="w-full">
                <Link href="/manhwa">Explore Manhwa</Link>
              </Button>
            </CardContent>
          </Card>

          <Card className="group border-0 bg-card/50 backdrop-blur-sm transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-primary/20">
            <CardHeader className="text-center">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 flex items-center justify-center">
                <span className="text-2xl">🎬</span>
              </div>
              <CardTitle className="text-xl">Series</CardTitle>
              <CardDescription>Explore live-action and animated series</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <Button asChild className="w-full">
                <Link href="/series">Explore Series</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  )
}
