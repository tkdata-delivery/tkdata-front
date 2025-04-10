// src/Components/Sidebar/Sidebar.tsx
import { LayoutDashboard, Truck } from "lucide-react";
// import logo from "../../assets/logo1.png";

const Sidebar = () => {
  return (
    <div className="w-72 h-screen bg-[rgba(215,187,245,1)] p-6 flex flex-col">
      <div className="flex flex-col items-center mb-10">
        {/* <img src={logo} alt="Logo" className="w-20 h-20 mb-2" /> */}
        <h1 className="text-xl font-bold text-center text-gray-800">TV DATA</h1>
      </div>

      <nav className="flex flex-col space-y-6">
        <a href="#" className="flex items-center space-x-3 text-lg text-gray-800 font-medium">
          <LayoutDashboard className="w-6 h-6" />
          <span>Tableau de bord</span>
        </a>
        <a href="#" className="flex items-center space-x-3 text-lg text-gray-800 font-medium">
          <Truck className="w-6 h-6" />
          <span>Livraison</span>
        </a>
      </nav>
    </div>
  );
};

export default Sidebar;
