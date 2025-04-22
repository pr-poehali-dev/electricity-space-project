
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Phone, Zap } from "lucide-react";

const Services = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-space-dark bg-gradient-to-b from-space-dark via-space-medium to-space-dark">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-8 animate-neon-pulse">
          Услуги электрика в Колпино
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          <Card className="bg-black/40 backdrop-blur-sm border border-neon-purple/30 text-white overflow-hidden hover:shadow-[0_0_15px_rgba(155,135,245,0.5)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-neon-purple">Замена розеток и выключателей</CardTitle>
              <CardDescription className="text-gray-300">Быстрая и качественная замена</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Заменить розетку дома вообще не вопрос! Профессиональная замена механических и установка сенсорных розеток.</p>
              <Button className="w-full bg-space-medium hover:bg-space-light border border-neon-purple text-white group transition-all">
                <Phone className="mr-2 h-4 w-4 group-hover:text-neon-purple" /> 
                <span className="group-hover:text-neon-purple">8 950 030-88-30</span>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border border-neon-blue/30 text-white overflow-hidden hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-neon-blue">Ремонт электропроводки</CardTitle>
              <CardDescription className="text-gray-300">Устранение неисправностей</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Исправлю любую проблему, связанную с неисправностями электропроводки у вас в квартире в течение часа.</p>
              <Button className="w-full bg-space-medium hover:bg-space-light border border-neon-blue text-white group transition-all">
                <Zap className="mr-2 h-4 w-4 group-hover:text-neon-blue" /> 
                <span className="group-hover:text-neon-blue">Вызвать мастера</span>
              </Button>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border border-neon-pink/30 text-white overflow-hidden hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300">
            <CardHeader>
              <CardTitle className="text-neon-pink">Замена автоматов</CardTitle>
              <CardDescription className="text-gray-300">Работы с электрощитком</CardDescription>
            </CardHeader>
            <CardContent>
              <p className="mb-4">Замена автоматов в электрощитке, модернизация и обеспечение безопасности электросети вашего дома.</p>
              <Button className="w-full bg-space-medium hover:bg-space-light border border-neon-pink text-white group transition-all">
                <Phone className="mr-2 h-4 w-4 group-hover:text-neon-pink" /> 
                <span className="group-hover:text-neon-pink">8 950 030-88-30</span>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Services;
