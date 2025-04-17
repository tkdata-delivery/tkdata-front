// // Anse.tsx
// import { useState } from 'react';
// import Sidebar from "./Components/Sidebar/Sidebar";
// import Header from "./Components/Header";
// import DashboardStatsGrid from "./Components/Card/DashboardStatsGrid";
// import { RevenueDashboard } from "./Components/Diagramme";
// import FullDashboard from "./Components/FullDashboard/FullDashboard";
// import Livraison from './Components/Delivery/Livraison';

// const Anse = () => {
//   const [activePage, setActivePage] = useState("dashboard");

//   return (
//     <div className="flex bg-gray-100">
//       <Sidebar activeItem={activePage} onChangePage={setActivePage} />
//       <div className="flex-1">
//         <Header />
//         <main className="p-6">
//           {activePage === "dashboard" && (
          
//           )}

//           {activePage === "delivery" && (
//             <Livraison showLivraisonApp={false}  />
//           // )}
//         </main>
//       </div>
//     </div>
//   );
// };

// export default Anse;
