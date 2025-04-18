// Pagination.tsx - Composant de pagination
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalItems: number;
  isMobile: boolean;
  onPageChange: (page: number) => void;
}

const Pagination: React.FC<PaginationProps> = ({ 
  currentPage, 
  totalPages, 
  totalItems, 
  isMobile, 
  onPageChange 
}) => {
  const renderPaginationButtons = () => {
    const pages = [];
    
    pages.push(
      <button 
        key="prev" 
        className="flex items-center px-2 py-1 text-gray-600"
        onClick={() => currentPage > 1 && onPageChange(currentPage - 1)}
      >
        <ChevronLeft size={16} /> {!isMobile && "Précédent"}
      </button>
    );
    
    // Logique de pagination adaptée pour mobile
    if (isMobile) {
      // Sur mobile, montrer seulement la page courante et éventuellement +/- 1
      if (currentPage > 1) {
        pages.push(
          <button
            key={1}
            className="w-8 h-8 flex items-center justify-center rounded-md text-gray-700"
            onClick={() => onPageChange(1)}
          >
            1
          </button>
        );
      }
      
      if (currentPage > 2) {
        pages.push(<span key="ellipsis-start" className="px-1">...</span>);
      }
      
      pages.push(
        <button
          key={currentPage}
          className="w-8 h-8 flex items-center justify-center rounded-md bg-purple-100 text-purple-700 font-medium"
        >
          {currentPage}
        </button>
      );
      
      if (currentPage < totalPages - 1) {
        pages.push(<span key="ellipsis-end" className="px-1">...</span>);
      }
      
      if (currentPage < totalPages) {
        pages.push(
          <button
            key={totalPages}
            className="w-8 h-8 flex items-center justify-center rounded-md text-gray-700"
            onClick={() => onPageChange(totalPages)}
          >
            {totalPages}
          </button>
        );
      }
    } else {
      // Pagination normale pour écrans larges
      for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 1 && i <= currentPage + 1)) {
          pages.push(
            <button
              key={i}
              className={`w-8 h-8 flex items-center justify-center rounded-md ${
                currentPage === i ? 'bg-purple-100 text-purple-700 font-medium' : 'text-gray-700'
              }`}
              onClick={() => onPageChange(i)}
            >
              {i}
            </button>
          );
        } else if (i === currentPage - 2 || i === currentPage + 2) {
          pages.push(<span key={`ellipsis-${i}`} className="px-1">...</span>);
        }
      }
    }
    
    pages.push(
      <button 
        key="next" 
        className="flex items-center px-2 py-1 text-gray-600"
        onClick={() => currentPage < totalPages && onPageChange(currentPage + 1)}
      >
        {!isMobile && "Suivant"} <ChevronRight size={16} />
      </button>
    );
    
    return pages;
  };

  return (
    <div className="flex flex-col md:flex-row md:items-center md:justify-between mt-6 text-sm space-y-4 md:space-y-0">
      <div className="text-gray-500 text-center md:text-left">
        Résultat de 1 à 10 sur {totalItems} éléments
      </div>
      <div className="flex items-center justify-center md:justify-end space-x-1">
        {renderPaginationButtons()}
      </div>
    </div>
  );
};

export default Pagination;