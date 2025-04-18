// src/Components/Header/Header.tsx
import { Menu } from "lucide-react";
import SearchComponent from "./Search";
import Profile from "./Profile";
import Notification from "./Notification";

interface HeaderProps {
  toggleSidebar: () => void;
}

const Header: React.FC<HeaderProps> = ({ toggleSidebar }) => {
  return (
    <div className="w-full flex items-center justify-between bg-white px-4 py-3 border-b border-gray-200">
      <div className="flex items-center gap-4">
        <button 
          className="text-gray-600 lg:hidden"
          onClick={toggleSidebar}
        >
          <Menu size={24} />
        </button>
        <SearchComponent />
      </div>
      
      <div className="flex items-center space-x-4">
        <Notification />
        <Profile />
      </div>
    </div>
  );
};

export default Header;