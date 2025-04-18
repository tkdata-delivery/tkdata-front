import React, { useState } from 'react';
import { ArrowDownToLine, SlidersHorizontal, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ActionButtonsProps {
  isMobile: boolean;
}

const ActionButtons: React.FC<ActionButtonsProps> = ({ isMobile }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <div className="flex items-center justify-between w-full md:w-auto md:justify-start md:space-x-3">
      {/* Boutons visibles seulement sur écrans larges */}
      {!isMobile && (
        <div className="flex items-center space-x-3">
          <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg text-gray-700 ">
            <ArrowDownToLine size={18} />
            <span>Export</span>
          </button>
          
          <button className="flex items-center space-x-2 px-3 py-2 bg-gray-100 rounded-lg text-gray-700">
            <SlidersHorizontal size={18} />
            <span>Filtre</span>
          </button>
        </div>
      )}
      
      {/* Menu hamburger pour mobile */}
      {isMobile && (
        <div className="relative">
          <button 
            className="p-2 rounded-lg border border-gray-300 bg-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          {/* Menu déroulant pour mobile */}
          {isMobileMenuOpen && (
            <div className="absolute right-0 mt-2 z-20 bg-white rounded-md shadow-lg border border-gray-200 py-2 w-48">
              <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors flex items-center">
                <ArrowDownToLine size={16} className="mr-2" />
                <span>Export</span>
              </button>
              <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors flex items-center">
                <SlidersHorizontal size={16} className="mr-2" />
                <span>Filtre</span>
              </button>
            </div>
          )}
        </div>
      )}
      
      {/* Bouton principal déplacé à la fin */}
      <Link to="/dashboard/delivery/new-delivery/">
      <button className="px-4 py-2 bg-purple-500 hover:bg-purple-600 text-white rounded-lg flex-grow md:flex-grow-0">
        Commencer une livraison
      </button>
      </Link>
    </div>
  );
};

export default ActionButtons;