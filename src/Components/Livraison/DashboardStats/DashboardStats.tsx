// Dashboard.tsx - Composant principal du tableau de bord 
import React from 'react';
import { TrendingUp, Truck, Users, Package } from 'lucide-react';
import StatCard from './StatsCard';
import StatsCarousel from './StatsCarousel';

const DashboardStats: React.FC = () => {
  const stats = [
    {
      title: "Chiffre d'affaires total",
      value: "952.6k cfa",
      change: 8,
      icon: <TrendingUp size={20} className="text-green-500" />,
      barColor: "bg-green-500",
      period: "Depuis la semaine dernière"
    },
    {
      title: "Livraisons totales",
      value: "241",
      change: -15,
      icon: <Truck size={20} className="text-purple-500" />,
      barColor: "bg-purple-500",
      period: "Depuis la semaine dernière"
    },
    {
      title: "Clients total",
      value: "89",
      change: 10,
      icon: <Users size={20} className="text-blue-400" />,
      barColor: "bg-blue-400",
      period: "Depuis la semaine dernière"
    },
    {
      title: "Produits total",
      value: "56",
      change: -3,
      icon: <Package size={20} className="text-indigo-500" />,
      barColor: "bg-indigo-500",
      period: "Depuis la semaine dernière"
    }
  ];

  return (
    <div className="px-1 py-4 -translate-y-4">
      {/* Affichage en grille pour écrans moyens et grands */}
      <div className="hidden sm:grid sm:grid-cols-2 lg:grid-cols-4 gap-4 h-35">
        {stats.map((stat, index) => (
          <StatCard 
            key={index}
            title={stat.title}
            value={stat.value}
            change={stat.change}
            icon={stat.icon}
            barColor={stat.barColor}
            period={stat.period}
          />
        ))}
      </div>

      {/* Carrousel pour mobile */}
      <div className="block sm:hidden">
        <StatsCarousel stats={stats} />
      </div>
    </div>
  );
};

export default DashboardStats;
