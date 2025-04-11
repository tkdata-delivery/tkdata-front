// DashboardStatsGrid.jsx

// Importation de React et des composants nécessaires
import React from 'react';
import DashboardCard from './DashboardCard';
import { DollarOutlined, UserOutlined, ShoppingOutlined } from '@ant-design/icons';

/**
 * Composant `DashboardStatsGrid`
 * 
 * Ce composant représente une section de tableau de bord contenant plusieurs cartes résumant
 * différentes données clés (chiffre d'affaires, utilisateurs, commandes, etc.).
 * 
 * Il organise les cartes dans une grille responsive (1 colonne sur petit écran, 3 colonnes sur écran moyen et plus).
 */
const DashboardStatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
      {/* Carte : Chiffre d'affaires */}
      <DashboardCard 
        title="Chiffre d'affaires total"
        value="952.6k cfa"
        percentage="+8.5%"
        description="Rapport de semaines dernières"
        icon={<DollarOutlined />}
      />

      {/* Carte duplicata pour exemple (même contenu) */}
      <DashboardCard 
        title="Chiffre d'affaires total"
        value="952.6k cfa"
        percentage="+8.5%"
        description="Rapport de semaines dernières"
        icon={<DollarOutlined />}
      />
      
      {/* Carte : Nouveaux utilisateurs */}
      <DashboardCard 
        title="Nouveaux utilisateurs"
        value="1,245"
        percentage="+12.4%"
        description="Ce mois-ci"
        icon={<UserOutlined />}
        iconBackground="bg-blue-50"
        iconColor="text-blue-500"
        indicatorColor="bg-blue-500"
      />
      
      {/* Carte : Commandes (baisse de performance) */}
      <DashboardCard 
        title="Commandes"
        value="450"
        percentage="-3.2%"
        description="Par rapport au mois dernier"
        isPositive={false} // Flèche vers le bas et couleur rouge
        icon={<ShoppingOutlined />}
        iconBackground="bg-amber-50"
        iconColor="text-amber-500"
        indicatorColor="bg-amber-500"
      />
    </div>
  );
};

export default DashboardStatsGrid;
