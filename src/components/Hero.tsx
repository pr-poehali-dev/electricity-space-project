
import { Phone } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative w-full py-20 overflow-hidden">
      {/* Фоновый эффект - "электрические" линии */}
      <div className="absolute inset-0 z-0 opacity-20">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i}
              className="absolute h-px bg-neon-blue animate-pulse"
              style={{
                top: `${Math.random() * 100}%`,
                left: 0,
                right: 0,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
          {Array.from({ length: 8 }).map((_, i) => (
            <div 
              key={i + 8}
              className="absolute w-px bg-neon-purple animate-pulse"
              style={{
                left: `${Math.random() * 100}%`,
                top: 0,
                bottom: 0,
                animationDelay: `${Math.random() * 2}s`,
                opacity: Math.random() * 0.7 + 0.3
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 neon-text">
            Электромонтажные работы в Колпино
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-gray-300">
            Профессиональные услуги электрика в Колпинском районе Санкт-Петербурга
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a 
              href="tel:+79500308830" 
              className="neon-button neon-blue flex items-center justify-center gap-2"
            >
              <Phone size={20} />
              <span>Вызвать электрика</span>
            </a>
            <a 
              href="#services" 
              className="neon-button neon-purple"
            >
              Наши услуги
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
