// src/Components/Sidebar/Dashboard.tsx

import DashboardStatsGrid from "../../Components/Card/DashboardStatsGrid";
import { RevenueDashboard } from "../../Components/Diagramme";
import FullDashboard from "../../Components/FullDashboard/FullDashboard";

const Dashboard = () => {
  return (
    <>
    <h1
      className="text-2xl font-bold"
      style={{
        fontFamily: 'Times New Roman, serif',
        fontWeight: 'bold',
      }}
    >
      Tableau de bord
    </h1>
    <div className="mt-6">
      <DashboardStatsGrid />
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
