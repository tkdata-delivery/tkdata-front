// FullDashboard.jsx - Exemple d'utilisation de tous les composants ensemble

// Importation de React et des composants du dashboard
import BestSellingProducts from './BestSellingProducts';
import TopClients from './TopClients';
import SalesZoneChart from './SalesZoneChart';
import RecentDeliveries from './RecentDeliveries';




/**
 * Composant principal `FullDashboard`
 * Il regroupe toutes les sections du tableau de bord dans une disposition responsive
 * organisée par lignes avec Tailwind CSS (grilles + marges).
 */
const FullDashboard = () => {
  return (
    <div className="grid grid-cols-1">
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
