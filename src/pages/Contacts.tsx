
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, MessageCircle, ExternalLink } from "lucide-react";

const Contacts = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-space-dark bg-gradient-to-b from-space-dark via-space-medium to-space-dark">
      <div className="container mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold text-center text-white mb-4 animate-neon-pulse">
          Контакты
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Свяжитесь с электриком в Колпино любым удобным способом
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <Card className="bg-black/40 backdrop-blur-sm border border-neon-purple/30 text-white overflow-hidden hover:shadow-[0_0_15px_rgba(155,135,245,0.5)] transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-neon-purple mb-6">Телефон</h2>
              <p className="text-lg text-gray-300 mb-8">
                Самый быстрый способ связаться и вызвать электрика в Колпино — просто позвонить по телефону
              </p>
              <a href="tel:89500308830" className="inline-block w-full">
                <Button size="lg" className="w-full bg-space-medium hover:bg-space-light border border-neon-purple text-white group transition-all text-xl p-6">
                  <Phone className="mr-3 h-6 w-6 group-hover:text-neon-purple" /> 
                  <span className="group-hover:text-neon-purple">8 950 030-88-30</span>
                </Button>
              </a>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border border-neon-blue/30 text-white overflow-hidden hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all duration-300">
            <CardContent className="p-8">
              <h2 className="text-3xl font-bold text-neon-blue mb-6">Мессенджеры</h2>
              <p className="text-lg text-gray-300 mb-8">
                Напишите сообщение в любом удобном для вас мессенджере
              </p>
              <div className="flex flex-col gap-4">
                <a href="https://t.me/89500308830" target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                  <Button size="lg" className="w-full bg-space-medium hover:bg-space-light border border-neon-blue text-white group transition-all text-xl p-6">
                    <MessageCircle className="mr-3 h-6 w-6 group-hover:text-neon-blue" /> 
                    <span className="group-hover:text-neon-blue">Telegram</span>
                  </Button>
                </a>
                <a href="https://wa.me/89500308830" target="_blank" rel="noopener noreferrer" className="inline-block w-full">
                  <Button size="lg" className="w-full bg-space-medium hover:bg-space-light border border-neon-green text-white group transition-all text-xl p-6">
                    <MessageCircle className="mr-3 h-6 w-6 group-hover:text-neon-green" /> 
                    <span className="group-hover:text-neon-green">WhatsApp</span>
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center text-white mb-8">
            Мои сайты
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-3xl mx-auto">
            <a 
              href="http://elektrikkolpino.bos.ru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/30 border border-neon-pink/20 p-6 rounded-lg flex items-center gap-3 hover:border-neon-pink/60 transition-all duration-300"
            >
              <ExternalLink className="h-6 w-6 text-neon-pink" />
              <span className="text-xl text-white">elektrikkolpino.bos.ru</span>
            </a>
            <a 
              href="http://elektrik-kolpino.narod.ru" 
              target="_blank" 
              rel="noopener noreferrer"
              className="bg-black/30 border border-neon-purple/20 p-6 rounded-lg flex items-center gap-3 hover:border-neon-purple/60 transition-all duration-300"
            >
              <ExternalLink className="h-6 w-6 text-neon-purple" />
              <span className="text-xl text-white">elektrik-kolpino.narod.ru</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contacts;
