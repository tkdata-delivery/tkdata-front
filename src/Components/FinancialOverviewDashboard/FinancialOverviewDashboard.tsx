// Dashboard2.jsx

// Importation des composants nécessaires
import RevenueLineChart from '../RevenueLineChart/RevenueLineChart';
import PaymentDonutChart from '../PaymentDonutChart/PaymentDonutChart';

/**
 * Composant `Dashboard2`
 * 
 * Ce composant représente un tableau de bord avec deux graphiques :
 * - Un graphique linéaire pour visualiser les revenus au fil du temps.
 * - Un graphique en donut pour afficher les statistiques de paiement.
 * 
 * Il intègre les composants `RevenueLineChart` et `PaymentDonutChart`, qui sont passés en tant que props pour rendre des visualisations des données de revenus et de paiements.
 */
const FinancialOverviewDashboard = () => {
  // Données d'exemple pour les revenus
  const revenueData = [
    { name: 'Lundi', value: 10000 },
    { name: 'Mardi', value: 48000 },
    { name: 'Mercredi', value: 62000 },
    { name: 'Jeudi', value: 53000 },
    { name: 'Vendredi', value: 55642 },
    { name: 'Samedi', value: 22000 },
    { name: 'Dimanche', value: 68000 },
  ];

  // Données d'exemple pour les paiements
  const paymentData = [
    { name: 'Payé Entièrement', value: 65, color: '#8B5CF6' },
    { name: 'Pas totalement payé', value: 30, color: '#DDD6FE' },
    { name: 'Non payé', value: 5, color: '#FBCFE8' },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-4">
      {/* Affichage du graphique des revenus */}
      <RevenueLineChart 
        title="Revenue"
        totalRevenue="91,642 cfa"
        growthPercentage="+3.4%"
        growthLabel="from last period"
        chartData={revenueData}
        highlightedDay="Vendredi"
      />
      
      {/* Affichage du graphique des statistiques de paiement */}
      <PaymentDonutChart 
        title="Statistiques de paiement" 
        data={paymentData}
      />
    </div>
  );
};

export default FinancialOverviewDashboard;
