import React from 'react';

export const SearchBar: React.FC = () => (
  <div className="relative">
    <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
      </svg>
    </div>
    <input 
      type="search" 
      className="p-2 pl-10 text-sm text-gray-900  h-12 rounded-lg w-79 bg-gray-100 focus:outline-none" 
      placeholder="Rechercher" 
    />
  </div>
);