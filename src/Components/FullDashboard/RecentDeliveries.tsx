import { useState } from 'react';
import { MoreVertical, ChevronRight } from 'lucide-react';

// Types des statuts
type PaymentStatus = 'Payé' | 'Non payé' | 'Pas totalement';
type DeliveryStatus = 'Terminer' | 'En cour';

// Interface pour une livraison
interface Delivery {
  id: string;
  clientInitials: string;
  clientName: string;
  quantity: number;
  paymentStatus: PaymentStatus;
  amount: string;
  status: DeliveryStatus;
}

const RecentDeliveries = () => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);

  const toggleMenu = (id: string) => {
    setOpenMenuId((prev) => (prev === id ? null : id));
  };

  const [deliveries] = useState<Delivery[]>([
    {
      id: '17mars2025_steveadam_bonaberi_12:34',
      clientInitials: 'SA',
      clientName: 'Steve Adam',
      quantity: 150,
      paymentStatus: 'Payé',
      amount: '350.000 cfa',
      status: 'Terminer',
    },
    {
      id: '18mars2025_steveadam_bonaberi_14:15',
      clientInitials: 'SA',
      clientName: 'Steve Adam',
      quantity: 100,
      paymentStatus: 'Non payé',
      amount: '250.000 cfa',
      status: 'En cour',
    },
    {
      id: '19mars2025_steveadam_bonaberi_10:30',
      clientInitials: 'SA',
      clientName: 'Steve Adam',
      quantity: 80,
      paymentStatus: 'Pas totalement',
      amount: '200.000 cfa',
      status: 'En cour',
    },
    {
      id: '20mars2025_steveadam_bonaberi_09:00',
      clientInitials: 'SA',
      clientName: 'Steve Adam',
      quantity: 60,
      paymentStatus: 'Pas totalement',
      amount: '150.000 cfa',
      status: 'En cour',
    },
  ]);

  const getPaymentStatusClasses = (status: PaymentStatus) => {
    switch (status) {
      case 'Payé':
        return 'bg-purple-50 text-purple-700 border border-purple-200';
      case 'Non payé':
        return 'bg-red-50 text-red-700 border border-red-200';
      case 'Pas totalement':
        return 'bg-yellow-50 text-yellow-700 border border-yellow-200';
      default:
        return '';
    }
  };

  const getDeliveryStatusClasses = (status: DeliveryStatus) => {
    switch (status) {
      case 'Terminer':
        return 'bg-green-100 text-green-800';
      case 'En cour':
        return 'bg-blue-100 text-blue-800';
      default:
        return '';
    }
  };

  return (
    <div className="p-4 sm:p-6 bg-white rounded-lg shadow-sm max-w-8xl mx-auto">
      <div className="flex justify-between items-center mb-4 sm:mb-6">
        <h2 className="text-lg sm:text-xl font-bold text-gray-900">Livraisons récentes</h2>
        <a href="#" className="text-purple-600 flex items-center text-sm hover:underline">
          Accéder à la page de livraison
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left text-xs sm:text-sm">
          <thead className="text-gray-500">
            <tr>
              <th className="pb-4 font-medium">Commande ID</th>
              <th className="pb-4 font-medium">Nom du client</th>
              <th className="pb-4 font-medium hidden md:table-cell">Quantité</th>
              <th className="pb-4 font-medium">Paiement</th>
              <th className="pb-4 font-medium hidden md:table-cell">Montant</th>
              <th className="pb-4 font-medium hidden sm:table-cell">Statut</th>
              <th className="pb-4 font-medium">Action</th>
            </tr>
          </thead>
          <tbody>
            {deliveries.map((delivery, index) => (
              <tr
                key={index}
                className="border-t border-gray-100 hover:bg-gray-50 transition text-xs sm:text-sm"
              >
                <td className="py-4 break-all">{delivery.id}</td>
                <td className="py-4">
                  <div className="flex items-center">
                    <div className="bg-green-100 text-green-800 w-7 h-7 sm:w-8 sm:h-8 rounded-md flex items-center justify-center mr-2 font-bold text-xs sm:text-sm">
                      {delivery.clientInitials}
                    </div>
                    <span>{delivery.clientName}</span>
                  </div>
                </td>
                <td className="py-4 hidden md:table-cell">{delivery.quantity}</td>
                <td className="py-4">
                  <span
                    className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-md font-medium ${getPaymentStatusClasses(
                      delivery.paymentStatus
                    )}`}
                  >
                    {delivery.paymentStatus}
                  </span>
                </td>
                <td className="py-4 hidden md:table-cell">{delivery.amount}</td>
                <td className="py-4 hidden sm:table-cell">
                  <span
                    className={`px-2 py-0.5 sm:px-3 sm:py-1 rounded-md font-medium ${getDeliveryStatusClasses(
                      delivery.status
                    )}`}
                  >
                    {delivery.status}
                  </span>
                </td>
                <td className="py-4 relative">
                  <button
                    className="text-gray-500 hover:text-gray-700"
                    onClick={() => toggleMenu(delivery.id)}
                  >
                    <MoreVertical className="h-5 w-5" />
                  </button>
                  {openMenuId === delivery.id && (
                    <div className="absolute right-0 mt-2 w-40 bg-white border border-gray-200 rounded-lg shadow-md z-10">
                      <ul className="text-sm text-gray-700">
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Afficher les détails</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Modifier</li>
                        <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Annuler</li>
                        <li className="px-4 py-2 hover:bg-gray-100 text-red-600 cursor-pointer">Supprimer</li>
                      </ul>
                    </div>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default RecentDeliveries;
