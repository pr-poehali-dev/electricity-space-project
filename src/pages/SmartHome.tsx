
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Smartphone, Wifi, Lightbulb, Phone, Wrench } from "lucide-react";

const SmartHome = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-space-dark bg-gradient-to-b from-space-dark via-space-medium to-space-dark">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-4 animate-neon-pulse">
          Умный дом
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12 max-w-3xl mx-auto">
          Современные технологии умного дома для вашего комфорта и безопасности.
          Установка и настройка систем умного дома в Колпино
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <Card className="bg-black/40 backdrop-blur-sm border border-neon-green/30 text-white overflow-hidden hover:shadow-[0_0_15px_rgba(0,255,128,0.5)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-neon-green flex items-center gap-2">
                <Smartphone className="h-5 w-5" />
                <span>Умные выключатели</span>
              </CardTitle>
              <CardDescription className="text-gray-300">Управление освещением со смартфона</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Установка сенсорных и WiFi-выключателей, которые можно контролировать через приложение на вашем телефоне или голосовыми командами.
              </p>
              <Button className="w-full bg-space-medium hover:bg-space-light border border-neon-green text-white group transition-all">
                <Phone className="mr-2 h-4 w-4 group-hover:text-neon-green" /> 
                <span className="group-hover:text-neon-green">8 950 030-88-30</span>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border border-neon-blue/30 text-white overflow-hidden hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-neon-blue flex items-center gap-2">
                <Wifi className="h-5 w-5" />
                <span>Умные розетки</span>
              </CardTitle>
              <CardDescription className="text-gray-300">Дистанционное управление питанием</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                WiFi-розетки позволяют включать и выключать приборы удаленно, создавать расписания и отслеживать энергопотребление.
              </p>
              <Button className="w-full bg-space-medium hover:bg-space-light border border-neon-blue text-white group transition-all">
                <Wrench className="mr-2 h-4 w-4 group-hover:text-neon-blue" /> 
                <span className="group-hover:text-neon-blue">Заказать установку</span>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border border-neon-purple/30 text-white overflow-hidden hover:shadow-[0_0_15px_rgba(155,135,245,0.5)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-neon-purple flex items-center gap-2">
                <Lightbulb className="h-5 w-5" />
                <span>Умное освещение</span>
              </CardTitle>
              <CardDescription className="text-gray-300">Интеллектуальные световые решения</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">
                Умные лампы и светильники с изменяемой яркостью и цветом. Автоматизация освещения по времени или движению.
              </p>
              <Button className="w-full bg-space-medium hover:bg-space-light border border-neon-purple text-white group transition-all">
                <Phone className="mr-2 h-4 w-4 group-hover:text-neon-purple" /> 
                <span className="group-hover:text-neon-purple">8 950 030-88-30</span>
              </Button>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Преимущества умного дома
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            <div className="bg-black/30 border border-neon-blue/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-neon-blue mb-3">Удобство</h3>
              <p className="text-gray-300">Управляйте всеми электроприборами одним касанием с вашего смартфона</p>
            </div>
            <div className="bg-black/30 border border-neon-purple/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-neon-purple mb-3">Экономия</h3>
              <p className="text-gray-300">Снижение энергопотребления благодаря умному управлению приборами</p>
            </div>
            <div className="bg-black/30 border border-neon-green/20 p-6 rounded-lg">
              <h3 className="text-xl font-bold text-neon-green mb-3">Безопасность</h3>
              <p className="text-gray-300">Контроль за электроприборами, даже когда вас нет дома</p>
            </div>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Закажите установку уже сегодня
          </h2>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            В 2025 году умный дом — это уже не роскошь, а необходимость для комфортной и современной жизни
          </p>
          <Button size="lg" className="bg-gradient-to-r from-neon-blue via-neon-purple to-neon-pink hover:opacity-90 text-white border-none text-lg px-8 py-6 animate-pulse-slow">
            <Phone className="mr-2 h-5 w-5" /> 
            <span>Позвонить 8 950 030-88-30</span>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default SmartHome;
