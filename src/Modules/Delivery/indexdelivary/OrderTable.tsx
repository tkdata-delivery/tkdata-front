import React from 'react';
import { MoreVertical } from 'lucide-react';
import { Order } from './types';
import ActionMenu from './ActionMenu';

interface OrderTableProps {
  orders: Order[];
  openActionMenu: number | null;
  toggleActionMenu: (index: number, e: React.MouseEvent) => void;
}

const OrderTable: React.FC<OrderTableProps> = ({ orders, openActionMenu, toggleActionMenu }) => {
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
    <div className="overflow-x-auto">
      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-500 text-sm">
            <th className="pb-4 pl-4 pr-2 font-medium">
              <div className="flex items-center space-x-1">
                <span>Commande ID</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
            </th>
            <th className="pb-4 px-2 font-medium">
              <div className="flex items-center space-x-1">
                <span>Nom du client</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
            </th>
            <th className="pb-4 px-2 font-medium">
              <div className="flex items-center space-x-1">
                <span>Quantité</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
            </th>
            <th className="pb-4 px-2 font-medium">
              <div className="flex items-center space-x-1">
                <span>Statut de paiement</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
            </th>
            <th className="pb-4 px-2 font-medium">
              <div className="flex items-center space-x-1">
                <span>Montant</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
            </th>
            <th className="pb-4 px-2 font-medium">
              <div className="flex items-center space-x-1">
                <span>Date</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
            </th>
            <th className="pb-4 px-2 font-medium">
              <div className="flex items-center space-x-1">
                <span>Status</span>
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
                </svg>
              </div>
            </th>
            <th className="pb-4 px-2 font-medium">Action</th>
          </tr>
        </thead>
        <tbody className="text-sm">
          {orders.map((order, index) => (
            <tr key={index} className="border-t border-gray-100">
              <td className="py-3 pl-4 pr-2 text-gray-600">{order.id}</td>
              <td className="py-3 px-2">
                <div className="flex items-center">
                  <div className="w-8 h-8 flex items-center justify-center bg-green-100 text-green-800 rounded-md mr-2">
                    {order.clientInitials}
                  </div>
                  <span>{order.clientName}</span>
                </div>
              </td>
              <td className="py-3 px-2">{order.quantity}</td>
              <td className="py-3 px-2">
                <div className={`px-4 py-1 rounded-md inline-block text-center ${getPaymentStatusClasses(order.paymentStatus)}`}>
                  {order.paymentStatus}
                </div>
              </td>
              <td className="py-3 px-2">{order.amount}</td>
              <td className="py-3 px-2">{order.date}</td>
              <td className="py-3 px-2">
                <div className="px-4 py-1 rounded-md inline-block bg-blue-50 text-blue-500">
                  {order.status}
                </div>
              </td>
              <td className="py-3 px-2 relative">
                <button 
                  className="p-1 rounded-full hover:bg-gray-100"
                  onClick={(e) => toggleActionMenu(index, e)}
                >
                  <MoreVertical size={18} />
                </button>
                
                {/* Menu d'actions */}
                {openActionMenu === index && <ActionMenu position="right-8 top-8" />}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default OrderTable;