// Fichier: components/Pagination.tsx
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { PaginationProps } from './types';

export const Pagination: React.FC<PaginationProps> = ({ currentPage, totalPages, totalItems, onPageChange }) => (
  <div className="mt-4 flex items-center justify-between">
    <div className="text-sm text-gray-700">
      Résultat de {(currentPage - 1) * 10 + 1} à {Math.min(currentPage * 10, totalItems)} sur {totalItems} éléments
    </div>
    <div className="flex items-center space-x-2">
      <button 
        onClick={() => onPageChange(currentPage - 1)} 
        disabled={currentPage === 1}
        className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50 flex items-center"
      >
        <ChevronLeft size={16} />
        Précédent
      </button>
      
      {[...Array(Math.min(totalPages, 3))].map((_, i) => (
        <button 
          key={i} 
          onClick={() => onPageChange(i + 1)}
          className={`px-3 py-2 ${
            currentPage === i + 1 
              ? 'bg-purple-600 border border-purple-600 text-white hover:bg-purple-700' 
              : 'bg-white border border-gray-300 text-gray-700 hover:bg-gray-50'
          } rounded-md text-sm font-medium`}
        >
          {i + 1}
        </button>
      ))}
      
      {totalPages > 3 && <span className="text-gray-500">...</span>}
      
      {totalPages > 3 && (
        <button 
          onClick={() => onPageChange(totalPages)}
          className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-50"
        >
          {totalPages}
        </button>
      )}
      
      <button 
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        className="px-3 py-2 bg-white border border-gray-300 rounded-md text-sm font-medium text-gray-500 hover:bg-gray-50 flex items-center"
      >
        Suivant
        <ChevronRight size={16} />
      </button>
    </div>
  </div>
);
