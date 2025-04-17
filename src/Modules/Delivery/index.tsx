// Ajout d'un effet de clic extérieur pour fermer le menu dans OrdersTable.tsx
import React, { useState, useEffect, useRef } from 'react';
//import { Order } from './types';
import { Order } from '../../Components/Delivery/types';
import { SearchBar } from '../../Components/Delivery/SearchBar';
import { ActionButtons } from '../../Components/Delivery/ActionButtons';
import { OrderTable } from '../../Components/Delivery/OrderTable';
import { Pagination } from '../../Components/Delivery/Pagination';
import PageTitle from '../../Components/PageTitle';
//import { SearchBar } from './SearchBar';


export const Delivery: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  
  // Les données d'exemple...
  const orders: Order[] = [

    {
      id: '17mars2025_steveadam_bonalert_1234',
      client: { initials: 'SA', name: 'Steve Adam' },
      quantity: 150,
      paymentStatus: 'Payé',
      amount: '350,000 cfa',
      date: '17 mars 2025',
      status: 'En cour',
    },
  
    {
      id: '17mars2025_steveadam_bonalert_1235',
      client: { initials: 'SA', name: 'Tchio Anse' },
      quantity: 150,
      paymentStatus: 'Non payé',
      amount: '350,000 cfa',
      date: '17 mars 2025',
      status: 'En cour',
    },
  
  
    // Les commandes...
  ];

  // Effet pour fermer le menu lors d'un clic à l'extérieur
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveMenu(null);
      }
    }
    
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  const toggleMenu = (orderId: string) => {
    if (activeMenu === orderId) {
      setActiveMenu(null);
    } else {
      setActiveMenu(orderId);
    }
  };

  const handleAction = (action: string, orderId: string) => {
    console.log(`Action ${action} pour la commande ${orderId}`);
    // Ici vous pouvez ajouter la logique pour chaque action
    switch(action) {
      case 'afficher':
        console.log(`Affichage des détails pour ${orderId}`);
        break;
      case 'modifier':
        console.log(`Modification de ${orderId}`);
        break;
      case 'annuler':
        console.log(`Annulation de ${orderId}`);
        break;
      case 'supprimer':
        console.log(`Suppression de ${orderId}`);
        break;
    }
    
    // Fermer le menu après action
    setActiveMenu(null);
  };

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  return (
    <>
      <PageTitle>Livraison</PageTitle>

      <div className="bg-white p-6 w-full rounded-[10px]" ref={menuRef}>
      <div className="mb-4 flex items-center justify-between">
        <SearchBar />
        <ActionButtons />
      </div>

      <OrderTable 
        orders={orders} 
        activeMenu={activeMenu} 
        onToggleMenu={toggleMenu}
        onAction={handleAction}
      />

      <Pagination 
        currentPage={currentPage} 
        totalPages={8} 
        totalItems={32} 
        onPageChange={handlePageChange} 
      />
    </div>

    </>
  );
};


