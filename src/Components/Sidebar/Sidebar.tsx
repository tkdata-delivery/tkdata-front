// Sidebar.tsx
import {  } from 'react';
import { LayoutDashboard, Truck, Package, Users, Settings } from 'lucide-react';
import logo1 from './images/logo1.png';
import { NavLink } from 'react-router-dom';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  path:string;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, path }) => {
  return (
   <NavLink to={path}>
    {({isActive})=>(
       <button
       className={`flex items-center cursor-pointer gap-3 px-4 py-3 w-full rounded-lg transition-colors ${
        isActive 
           ? 'bg-purple-100 text-purple-600' 
           : 'text-gray-400 hover:bg-gray-100'
       }`}
     >
       {icon}
       <span className={isActive ? 'font-medium' : ''}>{label}</span>
     </button>
    )}
   </NavLink>
  );
};


const Sidebar: React.FC = () => {
  const menuItems = [
    { id: 'home', label: 'Tableau de bord', icon: <LayoutDashboard size={20} /> },
    { id: 'delivery', label: 'Livraison', icon: <Truck size={20} /> },
    { id: 'products', label: 'Produits', icon: <Package size={20} /> },
    { id: 'clients', label: 'Clients', icon: <Users size={20} /> },
    { id: 'settings', label: 'Paramètre', icon: <Settings size={20} /> },
  ];

  return (
    <div className="w-72 h-screen bg-white border-r border-gray-100 p-6 flex flex-col">
      <div className="flex flex-row items-center -mt-4 mb-8 gap-3">
        <img src={logo1} alt="Logo" className="w-15 h-15" />
        <h1 className="text-2xl font-bold text-gray-800">TK DATA</h1>
      </div>
      <div className="flex flex-col gap-1 mt-8">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            path={item.id}
          />
        ))}
      </div>
      <div className="flex-grow"></div>
    </div>
  );
};

export default Sidebar;
