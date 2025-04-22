
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Phone, Zap, Lightbulb, Wrench } from "lucide-react";
import ServiceCard from "@/components/ServiceCard";

const Index = () => {
  return (
    <div className="bg-space-dark">
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          {/* Stars background */}
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-space-light via-space-medium to-space-dark"></div>
          <div className="stars absolute inset-0"></div>
          <div className="twinkling absolute inset-0"></div>
        </div>
        
        <div className="container mx-auto px-4 z-10 pt-20 pb-16">
          <div className="flex flex-col items-center text-center">
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-white leading-tight animate-neon-pulse">
              Электрик в Колпино
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 max-w-3xl mb-10">
              Профессиональные электромонтажные работы любой сложности 
              в Колпинском районе Санкт-Петербурга
            </p>
            
            <div className="space-y-4 sm:space-y-0 sm:flex sm:gap-4">
              <a href="tel:89500308830">
                <Button size="lg" className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink hover:opacity-90 text-white border-none text-lg px-8 py-6 animate-pulse-slow">
                  <Phone className="mr-2 h-5 w-5" /> 
                  <span>8 950 030-88-30</span>
                </Button>
              </a>
              <Link to="/services">
                <Button size="lg" variant="outline" className="text-white border-neon-purple hover:bg-neon-purple/10 text-lg px-8 py-6">
                  <Zap className="mr-2 h-5 w-5" /> 
                  <span>Услуги</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
        
        {/* Animated elements */}
        <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-space-dark to-transparent z-10"></div>
      </section>
      
      {/* Services Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Услуги электрика
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Профессиональные электромонтажные работы в Колпино
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard 
              title="Замена розеток и выключателей"
              description="Замена старых розеток и установка современных, в том числе сенсорных моделей. Быстро и качественно!"
              icon={<Wrench className="w-10 h-10 text-neon-purple" />}
              color="purple"
            />
            
            <ServiceCard 
              title="Ремонт электропроводки"
              description="Устранение неисправностей в электропроводке, диагностика и ликвидация коротких замыканий."
              icon={<Zap className="w-10 h-10 text-neon-blue" />}
              color="blue"
            />
            
            <ServiceCard 
              title="Установка умных систем"
              description="Монтаж и настройка систем умного дома, WiFi-розеток и умных выключателей света."
              icon={<Lightbulb className="w-10 h-10 text-neon-pink" />}
              color="pink"
            />
          </div>
          
          <div className="text-center mt-12">
            <Link to="/services">
              <Button size="lg" className="bg-space-medium hover:bg-space-light border border-neon-purple text-white text-lg px-8 py-6">
                Все услуги
              </Button>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Benefits Section */}
      <section className="py-20 px-4 bg-gradient-to-b from-space-dark via-space-medium to-space-dark">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center text-white mb-4">
            Почему выбирают меня
          </h2>
          <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
            Электрик с опытом работы в Колпино
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-black/30 backdrop-blur-sm border border-neon-blue/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-neon-blue mb-3">Быстрый выезд</h3>
              <p className="text-gray-300">Прибытие в течение часа после вашего звонка в любую точку Колпино</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-neon-purple/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-neon-purple mb-3">Качество работы</h3>
              <p className="text-gray-300">Использую только профессиональные инструменты и качественные материалы</p>
            </div>
            
            <div className="bg-black/30 backdrop-blur-sm border border-neon-pink/20 p-6 rounded-lg">
              <h3 className="text-2xl font-bold text-neon-pink mb-3">Доступные цены</h3>
              <p className="text-gray-300">Честные расценки без скрытых платежей и дополнительных наценок</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-black/40 backdrop-blur-sm border border-neon-purple/30 p-8 md:p-12 rounded-xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Вызвать электрика в Колпино
            </h2>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Нет ничего проще — позвоните по телефону 8 950 030-88-30 и расскажите о вашей проблеме с электричеством
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <a href="tel:89500308830">
                <Button size="lg" className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink hover:opacity-90 text-white border-none text-lg px-8 py-6 w-full sm:w-auto">
                  <Phone className="mr-2 h-5 w-5" /> 
                  <span>Позвонить</span>
                </Button>
              </a>
              <a href="https://wa.me/89500308830" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-white border-neon-green hover:bg-neon-green/10 text-lg px-8 py-6 w-full sm:w-auto">
                  <MessageCircle className="mr-2 h-5 w-5" /> 
                  <span>WhatsApp</span>
                </Button>
              </a>
              <a href="https://t.me/89500308830" target="_blank" rel="noopener noreferrer">
                <Button size="lg" variant="outline" className="text-white border-neon-blue hover:bg-neon-blue/10 text-lg px-8 py-6 w-full sm:w-auto">
                  <MessageCircle className="mr-2 h-5 w-5" /> 
                  <span>Telegram</span>
                </Button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
