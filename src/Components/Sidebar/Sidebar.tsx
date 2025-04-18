// src/Components/Sidebar/Sidebar.tsx
import { useEffect } from 'react';
import { LayoutDashboard, Truck, Package, Users, Settings } from 'lucide-react';
import logo1 from './images/logo1.png';
import { NavLink, useLocation } from 'react-router-dom';

interface SidebarItemProps {
  icon: React.ReactNode;
  label: string;
  path: string;
  onClick?: () => void;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, label, path, onClick }) => {
  return (
    <NavLink to={path}>
      {({ isActive }) => (
        <button
          className={`flex items-center cursor-pointer gap-3 px-4 py-3 w-full rounded-lg transition-colors duration-200 ${
            isActive ? 'bg-purple-100 text-purple-600' : 'text-gray-400 hover:bg-gray-100'
          }`}
          onClick={onClick}
        >
          {icon}
          <span className={isActive ? 'font-medium' : ''}>{label}</span>
        </button>
      )}
    </NavLink>
  );
};

const Sidebar: React.FC<{ isOpen: boolean; setIsOpen: (isOpen: boolean) => void }> = ({
  isOpen,
  setIsOpen,
}) => {
  const location = useLocation();

  // Ferme le menu quand l'URL change
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname, setIsOpen]);

  const menuItems = [
    { id: 'home', label: 'Tableau de bord', icon: <LayoutDashboard size={20} /> },
    { id: 'delivery', label: 'Livraison', icon: <Truck size={20} /> },
    { id: 'products', label: 'Produits', icon: <Package size={20} /> },
    { id: 'clients', label: 'Clients', icon: <Users size={20} /> },
    { id: 'settings', label: 'Paramètre', icon: <Settings size={20} /> },
  ];

  // Ferme le menu en cliquant sur l'overlay
  const handleOverlayClick = () => {
    setIsOpen(false);
  };

  return (
    <>
      {/* Overlay pour mobile */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-transparent bg-opacity-30 z-40"
          onClick={handleOverlayClick}
        />
      )}

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
        } fixed lg:sticky top-0 left-0 h-screen w-64 bg-white border-r border-gray-200 z-40 transition-transform duration-300 flex flex-col`}
      >
        {/* Logo et titre */}
        <div className="flex items-center gap-3 p-4 border-b border-gray-200">
          <img src={logo1} alt="Logo" className="w-10 h-10" />
          <h1 className="text-xl font-bold text-gray-800">TK DATA</h1>
        </div>

        {/* Menu Items */}
        <div className="flex flex-col gap-1 p-4 flex-1 overflow-y-auto">
          {menuItems.map((item) => (
            <SidebarItem
              key={item.id}
              icon={item.icon}
              label={item.label}
              path={`/dashboard/${item.id}`} // ✅ correction ici
              onClick={() => setIsOpen(false)} // Fermer au clic
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
