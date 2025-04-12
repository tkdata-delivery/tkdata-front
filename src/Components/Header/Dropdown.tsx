
import { useState } from "react";
import { ChevronDown } from "lucide-react"; 

const Dropdown = () => {
  const [showLogout, setShowLogout] = useState(false);

  const handleToggleLogout = () => {
    setShowLogout((prev) => !prev);
  };

  return (
    <div className="relative">

      <ChevronDown
        className="text-gray-600 w-6 h-6 cursor-pointer"
        onClick={handleToggleLogout}
      />

    
      {showLogout && (
        <div className="absolute right-0 mt-6 p-6 bg-white border rounded-lg shadow-lg">
          <button className="text-black-500">Se déconnecter</button>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
