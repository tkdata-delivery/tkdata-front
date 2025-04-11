// FullDashboard.jsx - Exemple d'utilisation de tous les composants ensemble

// Importation de React et des composants du dashboard
import BestSellingProducts from './BestSellingProducts';
import TopClients from './TopClients';
import SalesZoneChart from './SalesZoneChart';
import RecentDeliveries from './RecentDeliveries';
import RevenueLineChart from '../RevenueLineChart/RevenueLineChart';
import PaymentDonutChart from '../PaymentDonutChart/PaymentDonutChart';
import DashboardCard from '../Card/DashboardCard';

/**
 * Composant principal `FullDashboard`
 * Il regroupe toutes les sections du tableau de bord dans une disposition responsive
 * organisée par lignes avec Tailwind CSS (grilles + marges).
 */
const FullDashboard = () => {
  return (
    <div className="grid grid-cols-1">
      
      {/* Première ligne : 3 cartes récapitulatives */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <DashboardCard 
          title="Chiffre d'affaires total"
          value="952.6k cfa"
          percentage="+8.5%"
          description="Rapport de semaines dernières"
        />
        
        <DashboardCard 
          title="Nouveaux utilisateurs"
          value="1,245"
          percentage="+12.4%"
          description="Ce mois-ci"
          iconBackground="bg-blue-50"
          iconColor="text-blue-500"
          indicatorColor="bg-blue-500"
        />
        
        <DashboardCard 
          title="Commandes"
          value="450"
          percentage="-3.2%"
          description="Par rapport au mois dernier"
          isPositive={false} // Permet d’afficher la flèche rouge plutôt que verte
          iconBackground="bg-amber-50"
          iconColor="text-amber-500"
          indicatorColor="bg-amber-500"
        />
      </div>
      
      {/* Deuxième ligne : graphique des revenus + graphique des moyens de paiement */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        <RevenueLineChart />
        <PaymentDonutChart />
      </div>
      
      {/* Troisième ligne : produits les plus vendus, meilleurs clients, zones de vente */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
        <BestSellingProducts />
        <TopClients />
        <SalesZoneChart />
      </div>
      
      {/* Quatrième ligne : liste des livraisons récentes */}
      <div className="mb-6">
        <RecentDeliveries />
      </div>
    </div>
  );
};

export default FullDashboard;
