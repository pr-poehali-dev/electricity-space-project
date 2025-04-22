
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Lightbulb, Wifi, Cable } from "lucide-react";

const SmartHome = () => {
  return (
    <div className="min-h-screen py-16 px-4 bg-space-dark bg-gradient-to-b from-space-dark via-space-medium to-space-dark">
      <div className="container mx-auto">
        <h1 className="text-5xl font-bold text-center text-white mb-4 animate-neon-pulse">
          Умный дом в Колпино
        </h1>
        <p className="text-xl text-center text-gray-300 mb-12">
          Современные технологии для вашего комфорта
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          <div className="p-6 rounded-lg bg-gradient-to-br from-space-medium/40 to-space-light/20 backdrop-blur-sm border border-neon-blue/20 flex flex-col items-center transform hover:scale-105 transition-all">
            <Wifi className="h-14 w-14 text-neon-blue mb-4 animate-glow" />
            <h3 className="text-xl font-bold text-white mb-2">Wi-Fi розетки</h3>
            <p className="text-gray-300 text-center">Управляйте питанием устройств удаленно с вашего смартфона</p>
          </div>

          <div className="p-6 rounded-lg bg-gradient-to-br from-space-medium/40 to-space-light/20 backdrop-blur-sm border border-neon-purple/20 flex flex-col items-center transform hover:scale-105 transition-all">
            <Lightbulb className="h-14 w-14 text-neon-purple mb-4 animate-glow" />
            <h3 className="text-xl font-bold text-white mb-2">Умные светильники</h3>
            <p className="text-gray-300 text-center">Управление яркостью и цветом света через приложение</p>
          </div>

          <div className="p-6 rounded-lg bg-gradient-to-br from-space-medium/40 to-space-light/20 backdrop-blur-sm border border-neon-pink/20 flex flex-col items-center transform hover:scale-105 transition-all">
            <Cable className="h-14 w-14 text-neon-pink mb-4 animate-glow" />
            <h3 className="text-xl font-bold text-white mb-2">Сенсорные выключатели</h3>
            <p className="text-gray-300 text-center">Современная замена устаревшим механическим выключателям</p>
          </div>
        </div>

        <div className="bg-black/40 backdrop-blur-sm p-8 rounded-lg border border-neon-green/30">
          <h2 className="text-2xl font-bold text-neon-green mb-4">Умный дом 2025</h2>
          <p className="text-white mb-4">
            В настоящее время уже в 2025 году есть все возможности установить дистанционные умные выключатели и розетки и подключить их к функции умный дом.
          </p>
          <p className="text-white mb-4">
            Если вы вызовете электрика в Колпино по телефону <span className="text-neon-yellow font-bold">8 950 030-88-30</span>, вы можете установить:
          </p>
          <ul className="list-disc list-inside text-white space-y-2 mb-4">
            <li>Сенсорные выключатели</li>
            <li>Умные розетки</li>
            <li>Wi-Fi розетки и выключатели</li>
            <li>Умные светильники с дистанционным управлением</li>
          </ul>
          <p className="text-gray-300 italic">
            Управляйте всем освещением и электропитанием в доме с помощью вашего смартфона!
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartHome;
