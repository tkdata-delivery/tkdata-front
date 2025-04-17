// SearchBar.tsx
import React from 'react';
import { Search } from 'lucide-react';

interface SearchBarProps {
  searchQuery: string;
  setSearchQuery: React.Dispatch<React.SetStateAction<string>>;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchQuery, setSearchQuery }) => {
  return (
    <div className="flex items-center gap-4 mb-6">
      <div className="flex flex-grow items-center">
        <div className="relative flex-grow">
          <input
            type="text"
            placeholder="Rechercher"
            className="w-110 pl-10 pr-4 h-15 border border-white bg-gray-100 rounded-l-lg"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <div className="absolute left-3 top-1/2 -translate-y-1/2">
            <Search size={20} className="text-gray-400" />
          </div>
        </div>
        <button className="h-15 bg-purple-500 text-white px-4 rounded-r-lg border-l border-white flex items-center justify-center -translate-x-160">
          <Search size={20} />
        </button>
      </div>
    </div>
  );
};

export default SearchBar; // Export par défaut
