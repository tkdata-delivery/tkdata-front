//MobileCards.tsx - Composant des cartes pour mobile
import React from 'react';
import { MoreVertical } from 'lucide-react';
import { Order } from './types';
import ActionMenu from './ActionMenu';

interface MobileCardsProps {
  orders: Order[];
  openActionMenu: number | null;
  toggleActionMenu: (index: number, e: React.MouseEvent) => void;
}

const MobileCards: React.FC<MobileCardsProps> = ({ orders, openActionMenu, toggleActionMenu }) => {
  const getPaymentStatusClasses = (status: string) => {
    switch (status) {
      case 'Payé':
        return 'text-purple-500 border border-purple-200 bg-white';
      case 'Non payé':
        return 'text-red-500 border border-red-200 bg-white';
      case 'Pas totalement':
        return 'text-gray-400 border border-gray-200 bg-white';
      default:
        return 'text-gray-500 border border-gray-200 bg-white';
    }
  };

  return (
    <div className="space-y-4">
      {orders.map((order, index) => (
        <div key={index} className="bg-white rounded-lg shadow-sm p-4 mb-4 border border-gray-100 relative">
          {/* Action menu button */}
          <div className="absolute top-3 right-3">
            <button 
              className="p-1 rounded-full hover:bg-gray-100"
              onClick={(e) => toggleActionMenu(index, e)}
            >
              <MoreVertical size={18} />
            </button>
            
            {/* Menu d'actions */}
            {openActionMenu === index && <ActionMenu position="right-0" />}
            
          </div>
          
          {/* Client info */}
          <div className="flex items-center mb-3">
            <div className="w-10 h-10 flex items-center justify-center bg-green-100 text-green-800 rounded-md mr-3">
              {order.clientInitials}
            </div>
            <div>
              <div className="font-medium">{order.clientName}</div>
              <div className="text-xs text-gray-500">{order.id}</div>
            </div>
          </div>
          
          {/* Order details */}
          <div className="grid grid-cols-2 gap-2 mb-3">
            <div>
              <div className="text-xs text-gray-500">Quantité</div>
              <div>{order.quantity}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Montant</div>
              <div>{order.amount}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Date</div>
              <div>{order.date}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">Status</div>
              <div className="inline-block px-2 py-1 rounded-md bg-blue-50 text-blue-500 text-sm">
                {order.status}
              </div>
            </div>
          </div>
          
          {/* Payment status */}
          <div>
            <div className="text-xs text-gray-500 mb-1">Statut de paiement</div>
            <div className={`px-3 py-1 rounded-md inline-block text-sm ${getPaymentStatusClasses(order.paymentStatus)}`}>
              {order.paymentStatus}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MobileCards;