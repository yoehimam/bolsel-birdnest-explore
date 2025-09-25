import { Navigation } from "@/components/Navigation";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { MapPin, Clock, Phone, Mail, Navigation as NavigationIcon, Camera, Star, TreePine } from "lucide-react";
import birdnestLandscapeImage from "@/assets/birdnest-landscape.jpg";
import nestDetailImage from "@/assets/nest-detail.jpg";

const locations = [
  {
    id: 1,
    name: "Gua Birdnest Utama",
    description: "Lokasi utama dengan koloni sarang burung walet terbesar dan akses yang mudah untuk pengunjung.",
    image: birdnestLandscapeImage,
    coordinates: "0.7167° N, 124.4167° E",
    features: ["Koloni Burung Terbesar", "Jalur Trekking Mudah", "Area Fotografi Premium"],
    openHours: "06:00 - 17:00 WIT",
    difficulty: "Mudah",
    duration: "2-3 jam"
  },
  {
    id: 2,
    name: "Gua Tersembunyi",
    description: "Lokasi yang lebih menantang dengan pemandangan spektakuler dan pengalaman wildlife yang lebih intim.",
    image: nestDetailImage,
    coordinates: "0.7200° N, 124.4200° E", 
    features: ["Pengalaman Eksklusif", "View Panorama", "Wildlife Photography"],
    openHours: "07:00 - 16:00 WIT",
    difficulty: "Sedang",
    duration: "4-5 jam"
  },
  {
    id: 3,
    name: "Bukit Pandang Sunrise",
    description: "Spot terbaik untuk menyaksikan sunrise dengan latar belakang habitat burung walet yang menakjubkan.",
    image: birdnestLandscapeImage,
    coordinates: "0.7100° N, 124.4100° E",
    features: ["Sunrise Point", "Panorama 360°", "Bird Watching"],
    openHours: "05:30 - 18:00 WIT",
    difficulty: "Sedang",
    duration: "3-4 jam"
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case "Mudah":
      return "bg-green-100 text-green-800";
    case "Sedang":
      return "bg-yellow-100 text-yellow-800";
    case "Sulit":
      return "bg-red-100 text-red-800";
    default:
      return "bg-gray-100 text-gray-800";
  }
};

export default function Location() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Header */}
      <section className="bg-muted/30 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-display font-bold text-foreground mb-4">
              Lokasi Wisata
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Temukan lokasi-lokasi menakjubkan untuk menyaksikan keajaiban satwa liar di Bolaang Mongondow Selatan
            </p>
          </div>
        </div>
      </section>

      {/* Locations */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-12">
            {locations.map((location, index) => (
              <Card key={location.id} className="overflow-hidden border-0 shadow-floating">
                <div className={`grid grid-cols-1 lg:grid-cols-2 gap-0 ${index % 2 === 1 ? 'lg:grid-flow-col-dense' : ''}`}>
                  <div className={`relative ${index % 2 === 1 ? 'lg:col-start-2' : ''}`}>
                    <img
                      src={location.image}
                      alt={location.name}
                      className="w-full h-64 lg:h-full object-cover"
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-sm font-medium ${getDifficultyColor(location.difficulty)}`}>
                        {location.difficulty}
                      </span>
                    </div>
                  </div>
                  <CardContent className={`p-8 flex flex-col justify-center ${index % 2 === 1 ? 'lg:col-start-1' : ''}`}>
                    <CardHeader className="p-0 mb-6">
                      <CardTitle className="text-2xl font-display font-bold text-foreground mb-2">
                        {location.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {location.description}
                      </CardDescription>
                    </CardHeader>

                    {/* Location Info */}
                    <div className="space-y-4 mb-6">
                      <div className="flex items-center space-x-3 text-sm">
                        <MapPin className="w-4 h-4 text-forest" />
                        <span className="text-muted-foreground">{location.coordinates}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <Clock className="w-4 h-4 text-forest" />
                        <span className="text-muted-foreground">{location.openHours}</span>
                      </div>
                      <div className="flex items-center space-x-3 text-sm">
                        <NavigationIcon className="w-4 h-4 text-forest" />
                        <span className="text-muted-foreground">Durasi: {location.duration}</span>
                      </div>
                    </div>

                    {/* Features */}
                    <div className="mb-6">
                      <h4 className="font-medium text-foreground mb-3">Fitur Unggulan:</h4>
                      <div className="flex flex-wrap gap-2">
                        {location.features.map((feature, featureIndex) => (
                          <span
                            key={featureIndex}
                            className="px-3 py-1 bg-forest/10 text-forest text-sm rounded-full"
                          >
                            {feature}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="flex space-x-3">
                      <Button className="nature-gradient text-white">
                        <MapPin className="w-4 h-4 mr-2" />
                        Lihat Peta
                      </Button>
                      <Button variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white">
                        <Camera className="w-4 h-4 mr-2" />
                        Gallery Foto
                      </Button>
                    </div>
                  </CardContent>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact & Info Section */}
      <section className="py-16 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Informasi & Kontak
              </h2>
              <div className="space-y-6">
                <Card className="border-0 shadow-nature">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Phone className="w-5 h-5 text-forest" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Reservasi & Info</h4>
                        <p className="text-muted-foreground">+62 812-3456-7890</p>
                        <p className="text-muted-foreground">+62 813-4567-8901</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-nature">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Mail className="w-5 h-5 text-forest" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Email</h4>
                        <p className="text-muted-foreground">info@birdnestbolsel.com</p>
                        <p className="text-muted-foreground">booking@birdnestbolsel.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-0 shadow-nature">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className="w-10 h-10 bg-forest/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <MapPin className="w-5 h-5 text-forest" />
                      </div>
                      <div>
                        <h4 className="font-medium text-foreground mb-1">Alamat Base Camp</h4>
                        <p className="text-muted-foreground">
                          Desa Wisata Bolsel<br />
                          Kec. Bolaang Mongondow Selatan<br />
                          Sulawesi Utara 95372
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>

            {/* Tips & Guidelines */}
            <div>
              <h2 className="text-3xl font-display font-bold text-foreground mb-6">
                Tips Berkunjung
              </h2>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Star className="w-5 h-5 text-golden mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Waktu Terbaik</h4>
                    <p className="text-sm text-muted-foreground">Pagi hari (06:00-10:00) untuk aktivitas burung optimal</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Camera className="w-5 h-5 text-golden mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Peralatan</h4>
                    <p className="text-sm text-muted-foreground">Bawa kamera telephoto dan tripod untuk hasil fotografi terbaik</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <TreePine className="w-5 h-5 text-golden mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Dress Code</h4>
                    <p className="text-sm text-muted-foreground">Gunakan pakaian warna natural (hijau/coklat) dan sepatu trekking</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-golden mt-0.5" />
                  <div>
                    <h4 className="font-medium text-foreground">Pemandu</h4>
                    <p className="text-sm text-muted-foreground">Pemandu lokal wajib untuk semua trek demi keamanan dan konservasi</p>
                  </div>
                </div>
              </div>

              <div className="mt-8">
                <Button size="lg" className="w-full nature-gradient text-white">
                  <Phone className="w-4 h-4 mr-2" />
                  Hubungi Kami Sekarang
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}