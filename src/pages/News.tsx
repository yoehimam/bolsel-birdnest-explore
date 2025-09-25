import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Calendar, User, ArrowRight, FileText } from "lucide-react";
import nestDetailImage from "@/assets/nest-detail.jpg";
import birdnestLandscapeImage from "@/assets/birdnest-landscape.jpg";

const newsArticles = [
  {
    id: 1,
    title: "Program Konservasi Birdnest Bolsel Raih Penghargaan Internasional",
    excerpt: "Upaya konservasi yang dilakukan di Bolaang Mongondow Selatan berhasil meraih pengakuan dari World Wildlife Conservation Society.",
    content: "Program konservasi sarang burung walet di Bolaang Mongondow Selatan telah meraih penghargaan bergengsi dari World Wildlife Conservation Society...",
    author: "Dr. Sarah Wildlife",
    date: "2024-01-20",
    category: "Konservasi",
    image: birdnestLandscapeImage,
    featured: true
  },
  {
    id: 2,
    title: "Penemuan Spesies Baru di Ekosistem Bolsel",
    excerpt: "Tim peneliti menemukan spesies burung baru yang sebelumnya belum pernah terdokumentasi di kawasan Bolaang Mongondow Selatan.",
    content: "Dalam ekspedisi penelitian terbaru, tim gabungan dari Universitas Indonesia dan Wildlife Research Institute...",
    author: "Prof. Ahmad Biodiversity",
    date: "2024-01-18",
    category: "Penelitian",
    image: nestDetailImage,
    featured: false
  },
  {
    id: 3,
    title: "Workshop Fotografi Wildlife untuk Komunitas Lokal",
    excerpt: "Pelatihan fotografi wildlife gratis untuk masyarakat sekitar guna meningkatkan awareness terhadap konservasi.",
    content: "Dalam rangka meningkatkan kesadaran masyarakat terhadap pentingnya konservasi wildlife...",
    author: "Tim Birdnest Bolsel",
    date: "2024-01-15",
    category: "Komunitas",
    image: birdnestLandscapeImage,
    featured: false
  },
  {
    id: 4,
    title: "Kemitraan dengan Eco-Tourism Indonesia",
    excerpt: "Birdnest Bolsel resmi bermitra dengan asosiasi eco-tourism nasional untuk pengembangan pariwisata berkelanjutan.",
    content: "Kerjasama strategis ini bertujuan untuk mengembangkan model eco-tourism yang berkelanjutan...",
    author: "Manajer Kemitraan",
    date: "2024-01-12",
    category: "Kemitraan",
    image: nestDetailImage,
    featured: false
  },
  {
    id: 5,
    title: "Edukasi Lingkungan di Sekolah-Sekolah Sekitar",
    excerpt: "Program edukasi lingkungan hidup untuk pelajar SD dan SMP di sekitar kawasan konservasi Birdnest Bolsel.",
    content: "Sebagai bagian dari tanggung jawab sosial, Birdnest Bolsel mengadakan program edukasi lingkungan...",
    author: "Tim Edukasi",
    date: "2024-01-10",
    category: "Edukasi",
    image: birdnestLandscapeImage,
    featured: false
  }
];

const categories = ["Semua", "Konservasi", "Penelitian", "Komunitas", "Kemitraan", "Edukasi"];

export default function News() {
  const featuredArticle = newsArticles.find(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Berita & Artikel
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Update terbaru seputar konservasi, penelitian, dan aktivitas eco-tourism di Birdnest Bolsel
            </p>
          </div>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Featured Article */}
          {featuredArticle && (
            <div className="mb-16">
              <Card className="overflow-hidden border-0 shadow-floating">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-0">
                  <div className="relative">
                    <img
                      src={featuredArticle.image}
                      alt={featuredArticle.title}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <Badge className="bg-golden text-forest font-medium">
                        Artikel Utama
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="p-8 flex flex-col justify-center">
                    <Badge className="w-fit mb-4 bg-forest/10 text-forest">
                      {featuredArticle.category}
                    </Badge>
                    <h2 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-4">
                      {featuredArticle.title}
                    </h2>
                    <p className="text-muted-foreground mb-6 leading-relaxed">
                      {featuredArticle.excerpt}
                    </p>
                    <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-6">
                      <div className="flex items-center space-x-1">
                        <User className="w-4 h-4" />
                        <span>{featuredArticle.author}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="w-4 h-4" />
                        <span>{featuredArticle.date}</span>
                      </div>
                    </div>
                    <Button className="w-fit nature-gradient text-white">
                      Baca Selengkapnya
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Button>
                  </CardContent>
                </div>
              </Card>
            </div>
          )}

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map((category) => (
              <Badge
                key={category}
                variant={category === "Semua" ? "default" : "outline"}
                className="px-4 py-2 cursor-pointer hover:bg-forest hover:text-white transition-smooth"
              >
                {category}
              </Badge>
            ))}
          </div>

          {/* Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularArticles.map((article) => (
              <Card key={article.id} className="group cursor-pointer overflow-hidden border-0 shadow-nature hover:shadow-floating transition-smooth">
                <div className="relative overflow-hidden">
                  <img
                    src={article.image}
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-smooth" />
                  <div className="absolute top-4 left-4">
                    <Badge className="bg-white/90 text-forest">
                      {article.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-lg font-display font-semibold text-foreground mb-3 line-clamp-2">
                    {article.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                    {article.excerpt}
                  </p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                    <div className="flex items-center space-x-1">
                      <User className="w-3 h-3" />
                      <span>{article.author}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-3 h-3" />
                      <span>{article.date}</span>
                    </div>
                  </div>
                  <Button variant="outline" size="sm" className="text-forest border-forest hover:bg-forest hover:text-white">
                    Baca Artikel
                    <ArrowRight className="ml-2 w-3 h-3" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-forest/10 rounded-full mb-6">
              <FileText className="w-8 h-8 text-forest" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Ingin Berbagi Cerita?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Kirimkan artikel atau cerita pengalaman Anda di Birdnest Bolsel
            </p>
            <a
              href="/dashboard"
              className="inline-flex items-center px-6 py-3 bg-forest text-white rounded-lg hover:bg-forest-light transition-smooth font-medium"
            >
              Tulis Artikel
              <FileText className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}