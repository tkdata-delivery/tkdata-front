// src/anse.tsx
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header";
import DashboardStatsGrid from "./Card/DashboardStatsGrid";
import { RevenueDashboard } from "./Diagramme";
import FullDashboard from "./FullDashboard/FullDashboard";

const Anse = () => {
  return (
    <div className="flex bg-gray-100">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <h1
            className="text-2xl font-bold"
            style={{
              fontFamily: 'Times New Roman, serif',
              fontWeight: 'bold',
            }}
          >
            Tableau de bord
          </h1>

          {/* Section des stats du dashboard */}
          <div className="mt-6">
            <DashboardStatsGrid />
          </div>

          {/* Section dédiée aux diagrammes ou autres composants */}
          <div className="mt-6">
            
            <RevenueDashboard />
          </div>
                {/* Section dédiée aux autres diagrammes du composant bien consu */}
          <div className="mt-6">
            
            <FullDashboard />
          </div>

        </main>
      </div>
    </div>
  );
};

export default Anse;
