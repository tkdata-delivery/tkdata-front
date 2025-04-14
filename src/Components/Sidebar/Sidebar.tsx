import { useState } from 'react';
import { LayoutDashboard, Truck, Package, Users, Settings } from 'lucide-react';

// Image URL pour un placeholder - remplacez ceci par l'import de votre logo
 import logo1 from './images/logo1.png';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  onClick: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, active, onClick }) => {
  return (
    <button
      onClick={onClick}
      className={`flex items-center gap-3 px-4 py-3 w-full rounded-lg transition-colors ${
        active 
          ? 'bg-purple-100 text-purple-600' 
          : 'text-gray-400 hover:bg-gray-100'
      }`}
    >
      {icon}
      <span className={active ? 'font-medium' : ''}>{label}</span>
    </button>
  );
};

const Sidebar = () => {
  const [activeItem, setActiveItem] = useState<string>('dashboard');

  const menuItems = [
    {
      id: 'dashboard',
      label: 'Tableau de bord',
      icon: <LayoutDashboard size={20} />,
    },
    {
      id: 'delivery',
      label: 'Livraison',
      icon: <Truck size={20} />,
    },
    {
      id: 'products',
      label: 'Produits',
      icon: <Package size={20} />,
    },
    {
      id: 'clients',
      label: 'Clients',
      icon: <Users size={20} />,
    },
    {
      id: 'settings',
      label: 'Paramètre',
      icon: <Settings size={20} />,
    },
  ];

  return (
    <div className="w-72 h-screen bg-white border-r border-gray-100 p-6 flex flex-col">
      {/* Logo */}
      <div className="flex flex-row items-center -mt-4 mb-8 gap-3">
        {/* Utilisez cette ligne pour l'image importée */}
        {/* <img src={logo} alt="Logo" className="w-15 h-15" /> */}
        
        {/* Placeholder image pour l'exemple */}
        <img src={logo1} alt="Logo" className="w-15 h-15" />
        <h1 className="text-2xl font-bold text-gray-800">TK DATA</h1>
      </div>

      {/* Navigation Items */}
      <div className="flex flex-col gap-1 mt-8">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.id}
            onClick={() => setActiveItem(item.id)}
          />
        ))}
      </div>
      
      {/* Ajout d'un espace vide qui poussera tout vers le haut */}
      <div className="flex-grow"></div>
    </div>
  );
};

export default Sidebar;