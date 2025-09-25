import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Camera, FileText, Home, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "Beranda", href: "/", icon: Home },
  { name: "Gallery", href: "/gallery", icon: Camera },
  { name: "Berita", href: "/news", icon: FileText },
  { name: "Lokasi", href: "/location", icon: MapPin },
];

export function Navigation() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  return (
    <nav className="bg-background/95 backdrop-blur-sm border-b border-border sticky top-0 z-50 transition-smooth">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-forest rounded-full flex items-center justify-center">
              <Camera className="w-4 h-4 text-white" />
            </div>
            <div>
              <h1 className="text-xl font-display font-semibold text-forest">
                Birdnest Bolsel
              </h1>
              <p className="text-xs text-muted-foreground -mt-1">
                Eco Tourism
              </p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navigationItems.map((item) => {
                const isActive = location.pathname === item.href;
                return (
                  <Link
                    key={item.name}
                    to={item.href}
                    className={cn(
                      "px-3 py-2 rounded-md text-sm font-medium transition-smooth flex items-center space-x-2",
                      isActive
                        ? "bg-forest text-white"
                        : "text-foreground hover:text-forest hover:bg-forest/10"
                    )}
                  >
                    <item.icon className="w-4 h-4" />
                    <span>{item.name}</span>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Dashboard Button */}
          <div className="hidden md:block">
            <Link to="/dashboard">
              <Button variant="outline" className="border-forest text-forest hover:bg-forest hover:text-white">
                Dashboard
              </Button>
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setIsOpen(!isOpen)}
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-background border-t border-border">
            {navigationItems.map((item) => {
              const isActive = location.pathname === item.href;
              return (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block px-3 py-2 rounded-md text-base font-medium transition-smooth flex items-center space-x-2",
                    isActive
                      ? "bg-forest text-white"
                      : "text-foreground hover:text-forest hover:bg-forest/10"
                  )}
                  onClick={() => setIsOpen(false)}
                >
                  <item.icon className="w-4 h-4" />
                  <span>{item.name}</span>
                </Link>
              );
            })}
            <Link
              to="/dashboard"
              className="block px-3 py-2 rounded-md text-base font-medium text-forest hover:bg-forest/10 transition-smooth"
              onClick={() => setIsOpen(false)}
            >
              Dashboard
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}