
import { ReactNode } from "react";

interface ServiceCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  color: "blue" | "purple" | "pink";
}

const ServiceCard = ({ title, description, icon, color }: ServiceCardProps) => {
  const colorClasses = {
    blue: "border-neon-blue from-neon-blue/5 to-transparent",
    purple: "border-neon-purple from-neon-purple/5 to-transparent",
    pink: "border-neon-pink from-neon-pink/5 to-transparent",
  };

  const shadowColors = {
    blue: "0 0 15px rgba(0, 243, 255, 0.3)",
    purple: "0 0 15px rgba(155, 135, 245, 0.3)",
    pink: "0 0 15px rgba(255, 0, 255, 0.3)",
  };

  return (
    <div 
      className={`p-6 rounded-lg border bg-gradient-to-b ${colorClasses[color]} transition-all duration-300 hover:scale-105`}
      style={{ boxShadow: shadowColors[color] }}
    >
      <div className="mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold mb-2">{title}</h3>
      <p className="text-gray-300">{description}</p>
    </div>
  );
};

export default ServiceCard;
