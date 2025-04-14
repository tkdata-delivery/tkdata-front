// DashboardStatsGrid.jsx

import DashboardCard from './DashboardCard';
import { 
  DollarOutlined, 
  CarOutlined,
  TeamOutlined,
  AppstoreOutlined
} from '@ant-design/icons';

const DashboardStatsGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {/* Carte : Chiffre d'affaires */}
      <DashboardCard 
        title="Chiffre d'affaires total"
        value="952.6k cfa"
        percentage="+8.5%"
        description="Par rapport au mois dernier"
        isPositive={true} // Flèche vers le haut et couleur verte
        icon={<DollarOutlined />}
        iconBackground="bg-green-50"
        iconColor="text-green-500"
        indicatorColor="bg-green-500"
      />
      
      {/* Carte : Livraisons totales */}
      <DashboardCard 
        title="Livraisons totales"
        value="1,245"
        percentage="-12.4%" // Changé de + à -
        description="Par rapport au mois dernier"
        isPositive={false} // Changé à false pour flèche vers le bas et couleur rouge
        icon={<CarOutlined />}
        iconBackground="bg-blue-50"
        iconColor="text-blue-500"
        indicatorColor="bg-blue-500"
      />
      
      {/* Carte : Clients Total */}
      <DashboardCard 
        title="Clients Total"
        value="450"
        percentage="+3.2%" // Changé de - à +
        description="Par rapport au mois dernier"
        isPositive={true} // Changé à true pour flèche vers le haut et couleur verte
        icon={<TeamOutlined />}
        iconBackground="bg-amber-50"
        iconColor="text-amber-500"
        indicatorColor="bg-amber-500"
      />

      {/* Carte : Produits Total */}
      <DashboardCard 
        title="Produits Total"
        value="450"
        percentage="-3.2%"
        description="Par rapport au mois dernier"
        isPositive={false} // Flèche vers le bas et couleur rouge
        icon={<AppstoreOutlined />}
        iconBackground="bg-amber-50"
        iconColor="text-amber-500"
        indicatorColor="bg-amber-500"
      />
    </div>
  );
};

export default DashboardStatsGrid;