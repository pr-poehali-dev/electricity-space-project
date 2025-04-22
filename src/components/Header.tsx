
import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, Phone, MessageCircle, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="bg-space-dark/80 backdrop-blur-sm border-b border-neon-purple/20 sticky top-0 z-50">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="relative">
              <svg width="40" height="40" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="animate-lightning">
                <path d="M13 3V10H20L11 21V14H4L13 3Z" fill="url(#lightning-gradient)" stroke="white" strokeWidth="0.5" />
                <defs>
                  <linearGradient id="lightning-gradient" x1="4" y1="3" x2="20" y2="21" gradientUnits="userSpaceOnUse">
                    <stop stopColor="#00f3ff" />
                    <stop offset="0.5" stopColor="#9b87f5" />
                    <stop offset="1" stopColor="#ff0066" />
                  </linearGradient>
                </defs>
              </svg>
              <div className="absolute inset-0 blur-sm bg-neon-blue/30 rounded-full"></div>
            </div>
            <h1 className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-neon-pulse hidden sm:block">
              Электрик Колпино
            </h1>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-6">
            <Link to="/" className="text-white hover:text-neon-blue transition-colors">Главная</Link>
            <Link to="/services" className="text-white hover:text-neon-purple transition-colors">Услуги</Link>
            <Link to="/smart-home" className="text-white hover:text-neon-green transition-colors">Умный дом</Link>
            <Link to="/contacts" className="text-white hover:text-neon-pink transition-colors">Контакты</Link>
          </nav>

          {/* Contact */}
          <div className="hidden md:flex items-center gap-3">
            <a 
              href="tel:89500308830" 
              className="text-white hover:text-neon-purple flex items-center gap-1 transition-colors"
            >
              <Phone className="h-4 w-4" />
              <span className="font-medium">8 950 030-88-30</span>
            </a>
            
            <div className="flex gap-2">
              <a
                href="https://t.me/89500308830"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neon-blue transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/89500308830"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white hover:text-neon-green transition-colors"
              >
                <MessageCircle className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <Button 
            variant="ghost" 
            onClick={toggleMenu} 
            className="md:hidden text-white hover:text-neon-purple"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-neon-purple/20 pt-4 flex flex-col gap-4">
            <div className="flex flex-col gap-3">
              <Link 
                to="/" 
                className="text-white hover:text-neon-blue transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Главная
              </Link>
              <Link 
                to="/services" 
                className="text-white hover:text-neon-purple transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Услуги
              </Link>
              <Link 
                to="/smart-home" 
                className="text-white hover:text-neon-green transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Умный дом
              </Link>
              <Link 
                to="/contacts" 
                className="text-white hover:text-neon-pink transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Контакты
              </Link>
            </div>

            <div className="flex flex-col gap-3 pt-3 border-t border-neon-purple/20">
              <a 
                href="tel:89500308830" 
                className="text-white hover:text-neon-purple flex items-center gap-2 transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>8 950 030-88-30</span>
              </a>
              <div className="flex gap-4">
                <a
                  href="https://t.me/89500308830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neon-blue flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>Telegram</span>
                </a>
                <a
                  href="https://wa.me/89500308830"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:text-neon-green flex items-center gap-2 transition-colors"
                >
                  <MessageCircle className="h-5 w-5" />
                  <span>WhatsApp</span>
                </a>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
