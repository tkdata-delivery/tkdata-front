// src/Components/Header/Header.tsx
import { Bell } from "lucide-react";
// import profileImg from "../../assets/profile.jpg";

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center bg-white px-6 py-4 shadow">
      <input
        type="text"
        placeholder="Rechercher..."
        className="border border-gray-300 rounded-lg px-4 py-2 w-4/6"
      />

      <div className="flex items-center space-x-6">
        <Bell className="text-gray-600 w-6 h-6 cursor-pointer" />
        <div className="flex items-center space-x-2">
          {/* <img src={profileImg} alt="Profil" className="w-10 h-10 rounded-full" /> */}
          <div className="flex flex-col">
            <span className="text-gray-700 font-semibold">Anse Dev</span>
            <span className="text-sm text-gray-500">Livreur</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
