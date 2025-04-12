// src/Components/Sidebar/Sidebar.tsx
import Dashboard from "../../Modules/Dashboard/Dashboard"; 
import Delivery from "../../Modules/Delivery/Delivery"; 
import logo1 from './images/logo1.png';
import Produit from "../../Modules/Produits/Produit";
import Client from "../../Modules/Clients/Client";
import Parametre from "../../Modules/Parametre/Parametre";

const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-white p-6 flex flex-col">
      {/* Section supérieure : logo et nom de l'entreprise */}
          <div className="flex flex-row items-center -mt-4 mb-4 gap-3">
      <img src={logo1} alt="Logo" className="w-15 h-15" />
      <h1 className="text-2xl font-bold text-gray-800">TV DATA</h1>
    </div>


    <nav className="flex flex-col space-y-4 mt-8">
        <Dashboard />
        <Delivery />
        <Produit />
        <Client />
        <Parametre />
      </nav>
    </div>
  );
};

export default Sidebar;
