// src/Components/Dropdown/Dropdown.tsx
import { useState, useRef, useEffect } from "react";
import { ChevronDown } from "lucide-react";

const Dropdown = () => {
  const [showLogout, setShowLogout] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  // Ferme le menu lors d'un clic à l'extérieur
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowLogout(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleToggleLogout = () => {
    setShowLogout((prev) => !prev);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <div 
        className="p-1 bg-gray-200 rounded-full cursor-pointer flex items-center justify-center"
        onClick={handleToggleLogout}
      >
        <ChevronDown className="text-gray-600 w-6 h-6" />
      </div>
      
      {/* Menu déroulant */}
      {showLogout && (
        <div className="absolute right-0 mt-2 p-4 bg-white border rounded-lg shadow-lg w-40 z-50">
          <button className="text-gray-800 hover:text-purple-600 transition-colors w-full text-left">
            Se déconnecter
          </button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
