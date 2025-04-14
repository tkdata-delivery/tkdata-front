import React, { useState } from 'react';
// Import des icônes Ant Design
import {
  MoreOutlined,
  PlusOutlined,
  MinusOutlined,
  CloseOutlined,
  ExportOutlined,
  FilterOutlined,
  ArrowLeftOutlined
} from '@ant-design/icons';

// Composant de détail de livraison
const DeliveryDetails = ({ orderId, onBack }) => {
  const [riceQuantity1, setRiceQuantity1] = useState(21);
  const [riceQuantity2, setRiceQuantity2] = useState(3);

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      {/* Bouton de retour */}
      {onBack && (
        <button 
          onClick={onBack} 
          className="flex items-center text-purple-600 mb-4 hover:text-purple-800"
        >
          <ArrowLeftOutlined className="mr-1" />
          <span>Retour à la liste</span>
        </button>
      )}
      
      <h1 className="text-2xl font-bold mb-6">Détails de la livraison</h1>
      
      {/* En-tête de commande */}
      <div className="flex justify-between mb-4">
        <div>
          <p className="text-sm font-medium mb-1">Commande ID</p>
          <p className="text-sm">{orderId || "17mars2025_steveadam_bonaberi_12:34"}</p>
        </div>
        <div>
          <p className="text-sm font-medium mb-1">Date & Heure</p>
          <p className="text-sm">17mars2025_12:34</p>
        </div>
      </div>
      
      {/* Statut */}
      <div className="flex justify-between mb-6">
        <div>
          <p className="text-sm font-medium mb-1">Statut de la livraison</p>
          <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-md text-sm">En cours</span>
        </div>
        <div>
          <p className="text-sm font-medium mb-1">Statut du paiement</p>
          <span className="bg-red-50 text-red-500 border border-red-200 px-4 py-1 rounded-md text-sm">Non payé</span>
        </div>
      </div>
      
      {/* Détails client */}
      <h2 className="text-xl font-bold mb-4">Détails sur le client</h2>
      <div className="flex justify-between mb-6">
        <div>
          <p className="text-sm font-medium mb-1">Nom</p>
          <p className="text-sm">Steve Adams</p>
          <p className="text-sm font-medium mt-2 mb-1">Emplacement</p>
          <p className="text-sm">Bonaberi, Douala</p>
        </div>
        <div>
          <p className="text-sm font-medium mb-1">Numéro</p>
          <p className="text-sm">+237696971834</p>
        </div>
      </div>
      
      {/* Détails produits */}
      <h2 className="text-xl font-bold mb-4">Détails sur les produits</h2>
      <div className="space-y-4 mb-6">
        {/* Produit 1 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-red-50 p-2 rounded-lg mr-4">
              <img src="/api/placeholder/80/80" alt="Sac de riz" className="w-16 h-16 object-contain" />
            </div>
            <div>
              <p className="font-medium">Sac de riz Bijou de 25Kg</p>
              <p className="text-gray-600">25,000cfa</p>
              <div className="flex items-center mt-2">
                <button 
                  className="bg-gray-200 p-1 rounded" 
                  onClick={() => setRiceQuantity1(Math.max(1, riceQuantity1 - 1))}
                >
                  <MinusOutlined />
                </button>
                <span className="mx-4">{riceQuantity1}</span>
                <button 
                  className="bg-gray-200 p-1 rounded" 
                  onClick={() => setRiceQuantity1(riceQuantity1 + 1)}
                >
                  <PlusOutlined />
                </button>
              </div>
            </div>
          </div>
          <p className="text-purple-500 font-medium">525,000cfa</p>
        </div>
        
        {/* Produit 2 */}
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <div className="bg-red-50 p-2 rounded-lg mr-4">
              <img src="/api/placeholder/80/80" alt="Sac de riz" className="w-16 h-16 object-contain" />
            </div>
            <div>
              <p className="font-medium">Sac de riz Bijou de 25Kg</p>
              <p className="text-gray-600">50,000cfa</p>
              <div className="flex items-center mt-2">
                <button 
                  className="bg-gray-200 p-1 rounded" 
                  onClick={() => setRiceQuantity2(Math.max(1, riceQuantity2 - 1))}
                >
                  <MinusOutlined />
                </button>
                <span className="mx-4">{riceQuantity2}</span>
                <button 
                  className="bg-gray-200 p-1 rounded" 
                  onClick={() => setRiceQuantity2(riceQuantity2 + 1)}
                >
                  <PlusOutlined />
                </button>
              </div>
            </div>
          </div>
          <p className="text-purple-500 font-medium">150,000cfa</p>
        </div>
      </div>
      
      {/* Total */}
      <div className="flex justify-between items-center">
        <p className="font-bold">Total:</p>
        <p className="text-purple-500 font-bold text-xl">675,000 cfa</p>
      </div>
    </div>
  );
};
export default DeliveryDetails;