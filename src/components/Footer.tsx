
import { Link } from "react-router-dom";
import { Phone, MessageCircle } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-space-dark border-t border-neon-purple/20 text-white py-8 px-4">
      <div className="container mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-neon-purple">Контакты</h3>
            <div className="space-y-2">
              <a 
                href="tel:89500308830" 
                className="flex items-center gap-2 hover:text-neon-purple transition-colors"
              >
                <Phone className="h-4 w-4" />
                <span>8 950 030-88-30</span>
              </a>
              <a 
                href="https://t.me/89500308830" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-neon-blue transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>Telegram</span>
              </a>
              <a 
                href="https://wa.me/89500308830" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-2 hover:text-neon-green transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
                <span>WhatsApp</span>
              </a>
            </div>
          </div>
          
          {/* Navigation */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-neon-blue">Навигация</h3>
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
          
          {/* External Links */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-neon-pink">Мои сайты</h3>
            <ul className="space-y-2">
              <li>
                <a 
                  href="http://elektrikkolpino.bos.ru" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-neon-pink transition-colors"
                >
                  elektrikkolpino.bos.ru
                </a>
              </li>
              <li>
                <a 
                  href="http://elektrik-kolpino.narod.ru" 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="hover:text-neon-purple transition-colors"
                >
                  elektrik-kolpino.narod.ru
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-neon-purple/20 mt-8 pt-6 text-center text-gray-400">
          <p>&copy; {currentYear} Электрик Колпино. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
