// src/Components/Sidebar/Produit.tsx
import { Package } from "lucide-react";

const Produit = () => {
  return (
    <a href="#" className="text-lg font-medium text-gray-800">
      <button className="group flex items-center space-x-3 px-2 py-2 bg-transparent border-none rounded-lg hover:bg-gray-300">
        <Package className="w-8 h-8 text-gray-800 group-hover:text-indigo-500 cursor-pointer" />
        <span className="text-gray-800 group-hover:text-indigo-500"
          style={{
            fontFamily: 'Times New Roman, serif',
            fontWeight: 'bold',
          }}
        >Produit</span>
      </button>
    </a>
  );
};

export default Produit;
