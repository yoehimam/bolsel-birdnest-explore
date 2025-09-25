import { Button } from "@/components/ui/button";
import { ArrowRight, MapPin, Users, Award } from "lucide-react";
import { Link } from "react-router-dom";
import heroBirdsImage from "@/assets/hero-birds.jpg";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: `url(${heroBirdsImage})`,
        }}
      >
        <div className="absolute inset-0 hero-overlay" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-display font-bold text-white mb-6 leading-tight">
            Jelajahi Keajaiban
            <span className="block text-golden"> Satwa Liar Bolsel</span>
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8 max-w-3xl mx-auto leading-relaxed">
            Rasakan pengalaman eco-tourism yang tak terlupakan di Bolaang Mongondow Selatan. 
            Saksikan keindahan burung-burung eksotis dalam habitat aslinya.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Link to="/gallery">
              <Button 
                size="lg" 
                className="bg-golden hover:bg-golden/90 text-forest font-semibold px-8 py-3 transition-bounce shadow-floating"
              >
                Lihat Gallery
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/location">
              <Button 
                variant="outline" 
                size="lg"
                className="border-2 border-white text-white hover:bg-white hover:text-forest px-8 py-3 transition-bounce"
              >
                <MapPin className="mr-2 w-5 h-5" />
                Lokasi Wisata
              </Button>
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">500+</h3>
              <p className="text-white/80">Wisatawan per Tahun</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
                <Award className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">15+</h3>
              <p className="text-white/80">Spesies Burung Langka</p>
            </div>
            <div className="text-center">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 backdrop-blur-sm">
                <MapPin className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-display font-bold text-white">3</h3>
              <p className="text-white/80">Lokasi Eksklusif</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}