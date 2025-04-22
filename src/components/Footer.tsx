
import { Link } from "react-router-dom";
import { Phone, MessageCircle, ExternalLink } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-space-dark/90 backdrop-blur-sm border-t border-neon-purple/20 text-white">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-neon-purple">Контакты</h3>
            <div className="space-y-3">
              <a 
                href="tel:89500308830" 
                className="flex items-center gap-2 hover:text-neon-purple transition-colors"
              >
                <Phone className="h-4 w-4" /> 
                8 950 030-88-30
              </a>
              <a 
                href="https://t.me/89500308830" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-neon-blue transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> 
                Telegram
              </a>
              <a 
                href="https://wa.me/89500308830" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-neon-green transition-colors"
              >
                <MessageCircle className="h-4 w-4" /> 
                WhatsApp
              </a>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-neon-blue">Навигация</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-neon-blue transition-colors">Главная</Link>
              </li>
              <li>
                <Link to="/services" className="hover:text-neon-purple transition-colors">Услуги</Link>
              </li>
              <li>
                <Link to="/smart-home" className="hover:text-neon-green transition-colors">Умный дом</Link>
              </li>
              <li>
                <Link to="/contacts" className="hover:text-neon-pink transition-colors">Контакты</Link>
              </li>
            </ul>
          </div>

          {/* External links */}
          <div>
            <h3 className="text-lg font-bold mb-4 text-neon-yellow">Другие сайты</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="http://elektrikkolpino.bos.ru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-neon-yellow transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  elektrikkolpino.bos.ru
                </a>
              </li>
              <li>
                <a 
                  href="http://elektrik-kolpino.narod.ru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 hover:text-neon-yellow transition-colors"
                >
                  <ExternalLink className="h-4 w-4" />
                  elektrik-kolpino.narod.ru
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-neon-purple/20 text-center text-sm text-gray-400">
          <p>© {new Date().getFullYear()} Электрик Колпино. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
