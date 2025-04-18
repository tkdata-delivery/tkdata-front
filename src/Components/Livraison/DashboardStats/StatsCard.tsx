// StatCard.tsx - Composant pour une carte de statistique individuelle
import React from 'react';
import { TrendingUp, TrendingDown } from 'lucide-react';

export type StatCardProps = {
  title: string;
  value: string;
  change: number;
  icon: React.ReactNode;
  barColor: string;
  period: string;
};

const StatCard: React.FC<StatCardProps> = ({ title, value, change, icon, barColor, period }) => {
  const isPositive = change >= 0;
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4 relative overflow-hidden flex flex-col min-w-full sm:min-w-0">
      {/* Barre de couleur verticale - maintenant avec un padding et une hauteur ajustée */}
      <div className={`absolute left-3 top-4 bottom-4 w-1 ${barColor} rounded-full`}></div>
      
      {/* Contenu de la carte avec un padding à gauche pour tenir compte de la barre */}
      <div className="pl-5">
        <div className="flex justify-between items-start mb-2">
          <p className="text-sm text-gray-500">{title}</p>
          <div className="text-gray-400">{icon}</div>
        </div>
        
        <h2 className="text-2xl font-bold mb-2">{value}</h2>
        
        <div className="flex items-center text-xs">
          <div className={`flex items-center ${isPositive ? 'text-green-500' : 'text-red-500'} mr-2`}>
            {isPositive ? (
              <TrendingUp size={14} className="mr-1" />
            ) : (
              <TrendingDown size={14} className="mr-1" />
            )}
            <span>{Math.abs(change)}%</span>
          </div>
          <span className="text-gray-500">/ {period}</span>
        </div>
      </div>
    </div>
  );
};

export default StatCard;