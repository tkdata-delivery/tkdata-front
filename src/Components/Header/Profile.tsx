// src/Components/Profile/Profile.tsx
import profile from './images/profile.jpg';
import { ChevronDown } from "lucide-react";

const Profile = () => {
  return (
    <div className="flex items-center space-x-2">
      <img src={profile} alt="Profil" className="w-8 h-8 rounded-full" />
      <div className="hidden md:flex flex-col">
        <span className="text-gray-700 font-semibold text-sm">Johny Larsen</span>
        <span className="text-xs text-gray-500">Livreur</span>
      </div>
      <ChevronDown className="w-4 h-4 text-gray-400" />
    </div>
  );
};

export default Profile;