
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Smartphone, Wifi, Lightbulb, Phone } from "lucide-react";

const SmartHome = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-space-dark bg-gradient-to-b from-space-dark via-space-medium to-space-dark">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-8 animate-neon-pulse">
          Умный дом в Колпино
        </h1>
        
        <div className="max-w-3xl mx-auto text-center mb-12">
          <p className="text-xl text-gray-300">
            В 2025 году есть все возможности установить умные системы управления домом. 
            Вызовите электрика в Колпино и модернизируйте ваш дом!
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
          <Card className="bg-black/40 backdrop-blur-sm border border-neon-blue/30 text-white overflow-hidden hover:shadow-[0_0_15px_rgba(0,243,255,0.5)] transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="mb-2 text-neon-blue">
                <Smartphone className="h-8 w-8 mx-auto" />
              </div>
              <CardTitle className="text-neon-blue text-center">Умные выключатели</CardTitle>
              <CardDescription className="text-gray-300 text-center">Управление со смартфона</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">Установка сенсорных и дистанционных выключателей. Управляйте освещением через приложение!</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border border-neon-purple/30 text-white overflow-hidden hover:shadow-[0_0_15px_rgba(155,135,245,0.5)] transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="mb-2 text-neon-purple">
                <Wifi className="h-8 w-8 mx-auto" />
              </div>
              <CardTitle className="text-neon-purple text-center">Wi-Fi розетки</CardTitle>
              <CardDescription className="text-gray-300 text-center">Удаленное управление</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">Установка умных розеток с возможностью удаленного управления через Wi-Fi и мониторингом энергопотребления.</p>
            </CardContent>
          </Card>

          <Card className="bg-black/40 backdrop-blur-sm border border-neon-pink/30 text-white overflow-hidden hover:shadow-[0_0_15px_rgba(255,0,255,0.5)] transition-all duration-300">
            <CardHeader className="pb-2">
              <div className="mb-2 text-neon-pink">
                <Lightbulb className="h-8 w-8 mx-auto" />
              </div>
              <CardTitle className="text-neon-pink text-center">Умное освещение</CardTitle>
              <CardDescription className="text-gray-300 text-center">Современные технологии</CardDescription>
            </CardHeader>
            <CardContent className="text-center">
              <p className="mb-4">Установка умных светильников с возможностью изменения яркости, цвета и дистанционного управления.</p>
            </CardContent>
          </Card>
        </div>
        
        <div className="mt-16 text-center">
          <Button className="px-8 py-6 bg-space-medium hover:bg-space-light border-2 border-neon-purple text-white text-xl group transition-all hover:shadow-[0_0_15px_rgba(155,135,245,0.7)]">
            <Phone className="mr-3 h-5 w-5 group-hover:text-neon-purple" /> 
            <span className="group-hover:text-neon-purple">Вызвать электрика: 8 950 030-88-30</span>
          </Button>
          <p className="mt-4 text-gray-300">Модернизируйте свой дом с помощью современных технологий!</p>
        </div>
      </div>
    </div>
  );
};

export default SmartHome;
