import { Camera, MapPin, Shield, Users } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import birdnestLandscapeImage from "@/assets/birdnest-landscape.jpg";
import nestDetailImage from "@/assets/nest-detail.jpg";

const features = [
  {
    title: "Fotografi Wildlife Premium",
    description: "Sesi fotografi eksklusif dengan pemandu berpengalaman untuk menangkap momen terbaik satwa liar.",
    icon: Camera,
  },
  {
    title: "Lokasi Strategis",
    description: "Akses langsung ke habitat alami burung-burung langka di Bolaang Mongondow Selatan.",
    icon: MapPin,
  },
  {
    title: "Konservasi Terjamin",
    description: "Berpartisipasi dalam upaya konservasi dan perlindungan ecosystem satwa liar.",
    icon: Shield,
  },
  {
    title: "Komunitas Eco-Tourist",
    description: "Bergabung dengan komunitas pecinta alam dan wildlife photography enthusiast.",
    icon: Users,
  },
];

export function FeaturesSection() {
  return (
    <section className="py-20 bg-muted/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold text-foreground mb-4">
            Mengapa Memilih Birdnest Bolsel?
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Pengalaman eco-tourism yang berkelanjutan dengan fokus pada konservasi dan edukasi wildlife.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 bg-white shadow-nature hover:shadow-floating transition-smooth">
              <CardHeader className="text-center pb-4">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-forest/10 rounded-full mb-4 mx-auto">
                  <feature.icon className="w-6 h-6 text-forest" />
                </div>
                <CardTitle className="text-lg font-display">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center text-muted-foreground">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Image Gallery Preview */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h3 className="text-2xl md:text-3xl font-display font-bold text-foreground mb-6">
              Keindahan Alam yang Memukau
            </h3>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Nikmati pemandangan spektakuler dari lokasi birdnest yang tersembunyi di tengah hutan tropis. 
              Setiap sudut menawarkan kesempatan fotografi yang luar biasa dengan latar belakang alam yang pristine.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-forest rounded-full"></div>
                <p className="text-sm text-muted-foreground">Habitat alami yang terjaga</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-forest rounded-full"></div>
                <p className="text-sm text-muted-foreground">Akses aman dan terawat</p>
              </div>
              <div className="flex items-center space-x-3">
                <div className="w-2 h-2 bg-forest rounded-full"></div>
                <p className="text-sm text-muted-foreground">Pemandu lokal berpengalaman</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="overflow-hidden rounded-2xl shadow-floating">
              <img 
                src={birdnestLandscapeImage} 
                alt="Birdnest Landscape Bolsel"
                className="w-full h-64 object-cover hover:scale-105 transition-smooth"
              />
            </div>
            <div className="overflow-hidden rounded-2xl shadow-floating">
              <img 
                src={nestDetailImage} 
                alt="Bird Nest Detail"
                className="w-full h-48 object-cover hover:scale-105 transition-smooth"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}