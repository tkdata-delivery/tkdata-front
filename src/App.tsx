// src/App.tsx
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import AuthentificationPage from './Modules/Authentification';
import DashboardLayout from './layouts/DashboardLayout';
import Dashboard from './Modules/Dashboard';
import NewDelivery from './Modules/Delivery/NewDelivery';
import { Delivery } from './Modules/Delivery';
// Suppression de l'import inutilisé
import ClientSelection from './Modules/Delivery/ClientSelection';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthentificationPage />} />
        
        <Route path="/dashboard" element={<DashboardLayout/>}>
          <Route index element={<Navigate to={'home'} />}/>
          <Route path='home' element={<Dashboard/>}/>
          <Route path='delivery'>
            <Route index element={<Delivery/>}/>
            <Route path='new-delivery' element={<NewDelivery/>}/>
            <Route path='new-delivery/client-selection' element={<ClientSelection/>}/>
          </Route>
        </Route> 
      </Routes>
    </Router>
  );
};

export default App;