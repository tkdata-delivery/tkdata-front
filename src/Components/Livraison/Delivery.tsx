// Delivery.js
import React, { useState } from 'react';
import DeliveryList from './DeliveryList';
import DeliveryDetails from './DeliveryDetails';
import DeleteConfirmationModal from './DeleteConfirmationModal';

const Delivery = () => {
  const [view, setView] = useState('list'); // 'list', 'details'
  const [selectedOrderId, setSelectedOrderId] = useState(null);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  
  // Gestionnaire pour la sélection d'une livraison
  const handleSelectDelivery = (orderId) => {
    setSelectedOrderId(orderId);
    setView('details');
  };
  
  // Gestionnaire pour retourner à la liste
  const handleBackToList = () => {
    setView('list');
    setSelectedOrderId(null);
  };
  
  // Gestionnaire pour ouvrir le modal de suppression
  const handleOpenDeleteModal = () => {
    setShowDeleteModal(true);
  };
  
  // Gestionnaire pour confirmer la suppression
  const handleConfirmDelete = () => {
    // Logique de suppression ici
    setShowDeleteModal(false);
  };
  
  return (
    <div className="p-6 max-w-4xl mx-auto">
      {/* Toujours afficher la liste ou les détails */}
      <div className="relative">
        {view === 'list' && (
          <DeliveryList onSelectDelivery={handleSelectDelivery} />
        )}
        
        {view === 'details' && (
          <DeliveryDetails
            orderId={selectedOrderId}
            onBack={handleBackToList}
          />
        )}
        
        {/* Modal de suppression (par-dessus) */}
        {showDeleteModal && (
          <DeleteConfirmationModal
            onCancel={() => setShowDeleteModal(false)}
            onConfirm={handleConfirmDelete}
          />
        )}
      </div>
      
      {/* Boutons de démonstration pour tester différentes vues */}
      <div className="mt-4 flex space-x-4">
        <button
          className={`px-4 py-2 rounded ${view === 'list' ? 'bg-purple-600 text-white' : 'bg-gray-200'}`}
          onClick={handleBackToList}
        >
          Liste des livraisons
        </button>
        <button
          className="px-4 py-2 rounded bg-red-500 text-white"
          onClick={handleOpenDeleteModal}
        >
          Tester Modal Suppression
        </button>
      </div>
    </div>
  );
};

export default Delivery;