import { Navigation } from "@/components/Navigation";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Camera, Calendar, MapPin } from "lucide-react";
import heroBirdsImage from "@/assets/hero-birds.jpg";
import birdnestLandscapeImage from "@/assets/birdnest-landscape.jpg";
import nestDetailImage from "@/assets/nest-detail.jpg";

const galleryImages = [
  {
    id: 1,
    title: "Kingfisher di Pagi Hari",
    category: "Wildlife",
    location: "Sungai Bolsel",
    date: "2024-01-15",
    image: heroBirdsImage,
    description: "Burung kingfisher sedang berburu ikan di sungai jernih pagi hari"
  },
  {
    id: 2,
    title: "Pemandangan Birdnest Site",
    category: "Landscape", 
    location: "Gua Bolsel",
    date: "2024-01-12",
    image: birdnestLandscapeImage,
    description: "Lokasi sarang burung walet yang terjaga kelestariannya"
  },
  {
    id: 3,
    title: "Detail Sarang Burung",
    category: "Macro",
    location: "Gua Utama",
    date: "2024-01-10",
    image: nestDetailImage,
    description: "Close-up struktur sarang burung walet yang menakjubkan"
  },
  {
    id: 4,
    title: "Hornbill di Kanopi",
    category: "Wildlife",
    location: "Hutan Bolsel",
    date: "2024-01-08",
    image: heroBirdsImage,
    description: "Burung hornbill beristirahat di puncak pohon tinggi"
  },
  {
    id: 5,
    title: "Sunrise di Habitat",
    category: "Landscape",
    location: "Bukit Pandang",
    date: "2024-01-05",
    image: birdnestLandscapeImage,
    description: "Matahari terbit di atas habitat alami satwa liar"
  },
  {
    id: 6,
    title: "Struktur Sarang Alami",
    category: "Macro",
    location: "Gua Kedua",
    date: "2024-01-03",
    image: nestDetailImage,
    description: "Detail arsitektur alami sarang burung walet"
  }
];

const categories = ["Semua", "Wildlife", "Landscape", "Macro"];

export default function Gallery() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Gallery Foto Wildlife
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Jelajahi koleksi foto menakjubkan dari ekosistem satwa liar Bolaang Mongondow Selatan
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Content */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
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

          {/* Photo Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {galleryImages.map((image) => (
              <Card key={image.id} className="group cursor-pointer overflow-hidden border-0 shadow-nature hover:shadow-floating transition-smooth">
                <div className="relative overflow-hidden">
                  <img
                    src={image.image}
                    alt={image.title}
                    className="w-full h-64 object-cover group-hover:scale-110 transition-smooth duration-500"
                  />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-smooth" />
                  <div className="absolute top-4 right-4">
                    <Badge className="bg-white/90 text-forest">
                      {image.category}
                    </Badge>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-display font-semibold text-foreground mb-2">
                    {image.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {image.description}
                  </p>
                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="w-4 h-4" />
                      <span>{image.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Calendar className="w-4 h-4" />
                      <span>{image.date}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA Section */}
          <div className="text-center mt-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-forest/10 rounded-full mb-6">
              <Camera className="w-8 h-8 text-forest" />
            </div>
            <h3 className="text-2xl font-display font-bold text-foreground mb-4">
              Ingin Berkontribusi?
            </h3>
            <p className="text-muted-foreground mb-6 max-w-md mx-auto">
              Bagikan foto wildlife Anda untuk memperkaya koleksi gallery kami
            </p>
            <a
              href="/dashboard"
              className="inline-flex items-center px-6 py-3 bg-forest text-white rounded-lg hover:bg-forest-light transition-smooth font-medium"
            >
              Upload Foto
              <Camera className="ml-2 w-4 h-4" />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}