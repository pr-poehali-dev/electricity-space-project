
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, MessageCircle, ExternalLink } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-space-dark bg-gradient-to-b from-space-dark via-space-medium to-space-dark">
      <div className="container mx-auto max-w-4xl">
        <h1 className="text-5xl font-bold text-center text-white mb-4 animate-neon-pulse">
          Контакты
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Свяжитесь с электриком в Колпино
        </p>

        <Card className="bg-black/40 backdrop-blur-sm border border-neon-purple/30 overflow-hidden mb-8">
          <CardContent className="p-8">
            <div className="flex flex-col md:flex-row justify-between items-center gap-8">
              <div className="space-y-4 text-center md:text-left">
                <h2 className="text-2xl font-bold text-white">Телефон для связи</h2>
                <p className="text-3xl font-bold text-neon-purple animate-neon-pulse">8 950 030-88-30</p>
                <p className="text-gray-300">Колпинский район Санкт-Петербурга</p>
              </div>
              
              <div className="flex flex-col gap-4 w-full md:w-auto">
                <Button className="bg-space-medium hover:bg-space-light border border-neon-blue text-white group transition-all">
                  <Phone className="mr-2 h-4 w-4 group-hover:text-neon-blue" /> 
                  <a href="tel:89500308830" className="group-hover:text-neon-blue">Позвонить</a>
                </Button>
                
                <Button variant="outline" className="border-neon-green hover:bg-space-light text-white group transition-all">
                  <MessageCircle className="mr-2 h-4 w-4 text-neon-green" /> 
                  <a href="https://wa.me/89500308830" target="_blank" rel="noopener noreferrer" className="group-hover:text-neon-green">
                    WhatsApp
                  </a>
                </Button>
                
                <Button variant="outline" className="border-neon-blue hover:bg-space-light text-white group transition-all">
                  <MessageCircle className="mr-2 h-4 w-4 text-neon-blue" /> 
                  <a href="https://t.me/89500308830" target="_blank" rel="noopener noreferrer" className="group-hover:text-neon-blue">
                    Telegram
                  </a>
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <Card className="bg-black/40 backdrop-blur-sm border border-neon-yellow/30 overflow-hidden hover:shadow-[0_0_15px_rgba(255,255,0,0.3)] transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-neon-yellow mb-2">Другие сайты</h3>
              <div className="space-y-3">
                <a 
                  href="http://elektrikkolpino.bos.ru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-neon-yellow transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  elektrikkolpino.bos.ru
                </a>
                <a 
                  href="http://elektrik-kolpino.narod.ru" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="flex items-center text-white hover:text-neon-yellow transition-colors"
                >
                  <ExternalLink className="h-4 w-4 mr-2" />
                  elektrik-kolpino.narod.ru
                </a>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border border-neon-pink/30 overflow-hidden hover:shadow-[0_0_15px_rgba(255,0,255,0.3)] transition-all">
            <CardContent className="p-6">
              <h3 className="text-xl font-bold text-neon-pink mb-2">Зона обслуживания</h3>
              <p className="text-white">
                Колпинский район Санкт-Петербурга, город Колпино и ближайшие населенные пункты.
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
