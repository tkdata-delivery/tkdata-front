
// Delivery.tsx - Composant principal qui assemble tous les composants
import React, { useState, useEffect } from 'react';
//import { Order } from './types';
import { Order } from './indexdelivary/types';
//import SearchBar from './SearchBar';
import SearchBar from './indexdelivary/SearchBar';
///import ActionButtons from './ActionButtons';
import ActionButtons from './indexdelivary/ActionButtons';
//import OrderTable from './OrderTable';
import OrderTable from './indexdelivary/OrderTable';
//import MobileCards from './MobileCards';
import MobileCards from './indexdelivary/MobileCards';
//import Pagination from './Pagination';
import Pagination from './indexdelivary/Pagination';
import PageTitle from '../../Components/PageTitle';

const Delivery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(2);
  const totalPages = 8;
  const totalItems = 32;
  const [openActionMenu, setOpenActionMenu] = useState<number | null>(null);
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1024);
  
  // Déterminer si on est sur mobile
  const isMobile = windowWidth < 768;
  
  // Données d'exemple
  const orders: Order[] = Array(10).fill(null).map((_, index) => ({
    id: '17mars2025_steveadam_bonaberi_1234',
    clientInitials: 'SA',
    clientName: 'Steve Adam',
    quantity: 150,
    paymentStatus: index === 1 ? 'Non payé' : index === 2 ? 'Pas totalement' : 'Payé',
    amount: '350.000 cfa',
    date: '17 mars 2025',
    status: 'En cours'
  }));

  // Gérer le redimensionnement de la fenêtre
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  const toggleActionMenu = (index: number, e: React.MouseEvent) => {
    e.stopPropagation();
    if (openActionMenu === index) {
      setOpenActionMenu(null);
    } else {
      setOpenActionMenu(index);
    }
  };

  // Fermer le menu lorsqu'on clique ailleurs sur la page
  useEffect(() => {
    const handleClickOutside = () => {
      setOpenActionMenu(null);
    };

    document.addEventListener('click', handleClickOutside);
    return () => {
      document.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <>
    <PageTitle>Livraison</PageTitle>
    <div className="bg-white p-3 md:p-6 min-h-screen rounded-[10px]">
      <div className="bg-white rounded-lg shadow-sm p-3 md:p-4">
        {/* Header avec recherche et boutons */}
        <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-6 space-y-4 md:space-y-0">
          {/* Barre de recherche */}
          <SearchBar />
          
          {/* Boutons d'action */}
          <ActionButtons isMobile={isMobile} />
        </div>
        
        {/* Affichage conditionnel selon la taille d'écran */}
        {isMobile ? (
          <MobileCards 
            orders={orders} 
            openActionMenu={openActionMenu} 
            toggleActionMenu={toggleActionMenu}
          />
        ) : (
          <OrderTable 
            orders={orders} 
            openActionMenu={openActionMenu} 
            toggleActionMenu={toggleActionMenu}
          />
        )}
        
        {/* Pagination */}
        <Pagination 
          currentPage={currentPage} 
          totalPages={totalPages} 
          totalItems={totalItems} 
          isMobile={isMobile}
          onPageChange={handlePageChange}
        />
      </div>
    </div>
    </>
  );
};

export default Delivery;