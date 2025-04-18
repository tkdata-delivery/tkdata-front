// SearchBar.tsx - Composant de barre de recherche
import React from 'react';
import { Search } from 'lucide-react';

const SearchBar: React.FC = () => {
  return (
    <div className="relative w-full md:w-96">
      <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
        <Search className="w-4 h-4 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Rechercher"
        className="bg-gray-50 pl-10 pr-4 py-2 rounded-lg w-full text-sm text-gray-600 focus:outline-none"
      />
    </div>
  );
};

export default SearchBar;
