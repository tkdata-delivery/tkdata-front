// src/Components/Search/Search.tsx
import { Search } from "lucide-react";

const SearchComponent = () => {
  return (
    <div className="flex items-center space-x-2 border bg-gray-100 border-white rounded-lg px-4 py-2 w-6/8">
      <Search className="text-gray-300 w-7 h-7" />
      <input
        type="text"
        placeholder="Rechercher..."
        className="border-none outline-none w-full"
      />
    </div>
  );
};

export default SearchComponent;
