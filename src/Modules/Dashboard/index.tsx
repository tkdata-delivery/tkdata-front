
import { RevenueDashboard } from "../../Components/Diagramme";
import FullDashboard from "../../Components/FullDashboard/FullDashboard";
import DashboardStats from "../../Components/Livraison/DashboardStats/DashboardStats";
import PageTitle from "../../Components/PageTitle";


const Dashboard = () => {
  return (
    <>
   <PageTitle>Tableau de bord</PageTitle>
    <div className="mt-6">
       {/* <DashboardStatsGrid />  */}
      <DashboardStats />
    </div>
    <div className="mt-6">
      <RevenueDashboard />
    </div>
    <div className="mt-6">
      <FullDashboard />
    </div>
  </>
  );
};

export default Dashboard;
