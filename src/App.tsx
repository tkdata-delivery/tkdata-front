// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthentificationPage from './Modules/Authentification';
import Anse from './Components/anse';
import DashboardLayout from './layouts/DashboardLayout';
import DashboardStatsGrid from './Components/Card/DashboardStatsGrid';
import Dashboard2 from './Components/FinancialOverviewDashboard/FinancialOverviewDashboard';
import FullDashboard from './Components/FullDashboard/FullDashboard';
import ClientsTable from './Components/Client/ClientTable';
import DeliveryProductSelection from './Components/Livraison/DeliveryProductSelection';
import Delivery from './Components/Livraison/Delivery';


const App = () => {
  return (
    <Router>
      <Routes>
  
        <Route path="/" element={<AuthentificationPage />} />
        <Route path="/anse" element={<Anse />} />
  
        <Route path="/dashboard1" element={
            <DashboardLayout>
              <DashboardStatsGrid />
              <Dashboard2 />

            </DashboardLayout>
          } />

            <Route path="/dashboard" element={
            <DashboardLayout>
              <FullDashboard />

            </DashboardLayout>
          } />      

          <Route path="/clients" element={
            <DashboardLayout>
              <ClientsTable />

            </DashboardLayout>
          } />  

        <Route path="/livraison" element={
            <DashboardLayout>
              <DeliveryProductSelection />

            </DashboardLayout>
          } /> 

<Route path="/livraison2" element={
            <DashboardLayout>
              <Delivery />

            </DashboardLayout>
          } /> 
      </Routes>
      
    </Router>
  );
};

export default App;


