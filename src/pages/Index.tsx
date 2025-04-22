
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Phone, Zap, Star, Lightbulb, Tool } from "lucide-react";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen bg-space-dark">
      {/* Hero Section */}
      <section className="relative py-20 px-4 overflow-hidden">
        {/* Космический фон с градиентом */}
        <div className="absolute inset-0 bg-gradient-to-b from-space-dark via-space-medium to-space-dark"></div>
        
        {/* Звездный эффект */}
        <div className="absolute inset-0" style={{
          backgroundImage: "radial-gradient(white, rgba(255,255,255,.2) 2px, transparent 40px), radial-gradient(white, rgba(255,255,255,.15) 1px, transparent 30px), radial-gradient(white, rgba(255,255,255,.1) 2px, transparent 40px)", 
          backgroundSize: "550px 550px, 350px 350px, 250px 250px",
          backgroundPosition: "0 0, 40px 60px, 130px 270px",
          opacity: 0.3
        }}></div>
        
        <div className="container mx-auto relative z-10">
          <div className="text-center max-w-3xl mx-auto">
            <div className="mb-4 inline-block relative">
              <Zap className="text-neon-yellow h-16 w-16 animate-neon-pulse" />
              <div className="absolute inset-0 blur-md bg-neon-yellow/30 rounded-full"></div>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink animate-neon-pulse">
              Электрик Колпино
            </h1>
            <p className="text-xl md:text-2xl text-white mb-8">
              Профессиональные электромонтажные работы в Колпинском районе Санкт-Петербурга
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" className="bg-gradient-to-r from-neon-blue to-neon-purple hover:from-neon-purple hover:to-neon-blue text-white shadow-lg shadow-purple-500/20 group transition-all">
                <Phone className="mr-2 h-5 w-5 group-hover:animate-neon-pulse" /> 
                <a href="tel:89500308830">8 950 030-88-30</a>
              </Button>
              <Button size="lg" variant="outline" className="border-neon-yellow text-white hover:text-neon-yellow hover:bg-space-light/50 shadow-lg shadow-yellow-500/20">
                <Link to="/services" className="flex items-center">
                  <Tool className="mr-2 h-5 w-5" /> 
                  Наши услуги
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 px-4 relative bg-space-dark">
        <div className="container mx-auto">
          <h2 className="text-3xl font-bold text-center text-white mb-12">
            Почему стоит <span className="text-neon-blue">вызвать электрика</span> на дом
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card className="bg-black/30 backdrop-blur-sm border border-neon-purple/30 text-white overflow-hidden hover:shadow-[0_0_15px_rgba(155,135,245,0.5)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <Zap className="h-12 w-12 text-neon-purple" />
                    <div className="absolute inset-0 blur-md bg-neon-purple/30 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Быстрый приезд</h3>
                <p className="text-gray-300">
                  Прикольно, что есть такой электрик, которому можно позвонить по телефону 8 950 030-88-30 и в течение часа исправить любую проблему, связанную с электричеством.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-sm border border-neon-blue/30 text-white overflow-hidden hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <Star className="h-12 w-12 text-neon-blue" />
                    <div className="absolute inset-0 blur-md bg-neon-blue/30 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Качество работы</h3>
                <p className="text-gray-300">
                  Невероятно здорово, что можно вызвать электрика в городе Колпино по телефону 8 950 030-88-30, заменить автоматы в электрощитке, розетки и выключатели.
                </p>
              </CardContent>
            </Card>

            <Card className="bg-black/30 backdrop-blur-sm border border-neon-green/30 text-white overflow-hidden hover:shadow-[0_0_15px_rgba(0,255,0,0.5)] transition-all duration-300">
              <CardContent className="p-6">
                <div className="flex justify-center mb-4">
                  <div className="relative">
                    <Lightbulb className="h-12 w-12 text-neon-green" />
                    <div className="absolute inset-0 blur-md bg-neon-green/30 rounded-full"></div>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-center mb-4">Современные решения</h3>
                <p className="text-gray-300">
                  Очень круто, что есть сенсорные розетки и умные выключатели, которые можно установить взамен устаревших механических выключателей.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 relative">
        <div className="container mx-auto">
          <div className="bg-gradient-to-r from-space-dark via-space-medium to-space-dark p-8 md:p-12 rounded-2xl border border-neon-pink/30 shadow-[0_0_30px_rgba(255,0,255,0.2)] relative overflow-hidden">
            <div className="absolute top-0 right-0 opacity-20">
              <Zap className="h-64 w-64 text-neon-pink transform rotate-12" />
            </div>
            
            <div className="relative z-10 max-w-2xl">
              <h2 className="text-3xl font-bold text-white mb-4">
                Самый модный тренд 2025 года
              </h2>
              <p className="text-white/90 text-lg mb-6">
                Вызвать электрика по телефону 8 950 030-88-30 в Колпинском районе города Колпино и забыть о проблемах с электричеством.
              </p>
              <p className="text-white/90 mb-8">
                Замена розеток и выключателей, ремонт проводки, установка современного оборудования — заменить розетку дома вообще не вопрос!
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-gradient-to-r from-neon-pink to-neon-purple hover:from-neon-purple hover:to-neon-pink text-white shadow-lg shadow-pink-500/20">
                  <Phone className="mr-2 h-5 w-5" /> 
                  <a href="tel:89500308830">8 950 030-88-30</a>
                </Button>
                <Button size="lg" variant="outline" className="border-neon-blue text-white hover:text-neon-blue">
                  <Link to="/smart-home" className="flex items-center">
                    <Lightbulb className="mr-2 h-5 w-5" /> 
                    Умный дом
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
