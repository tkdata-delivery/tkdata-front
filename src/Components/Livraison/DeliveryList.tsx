



// Composant de la liste des livraisons
import {
    MoreOutlined,
    PlusOutlined,
    MinusOutlined,
    CloseOutlined,
    ExportOutlined,
    FilterOutlined,
    ArrowLeftOutlined
  } from '@ant-design/icons';
  

const DeliveryList = ({ onSelectDelivery }) => {
    // Données de démonstration pour les livraisons
    const deliveries = Array.from({ length: 7 }).map((_, index) => ({
      id: `order-${index + 1}`,
      orderId: `17mars2025_client${index + 1}_location_12:34`,
      paymentStatus: index === 1 ? 'Non payé' : index === 2 ? 'Pas totalement' : 'Payé',
      amount: '350,000 cfa',
      date: '17 mars 2025',
      status: 'En cours'
    }));
  
    return (
      <div className="bg-white p-6 rounded-lg shadow-sm">
        <div className="flex justify-between items-center mb-6">
          <div className="flex space-x-2">
            <button className="flex items-center px-4 py-2 bg-gray-100 rounded-md text-gray-700">
              <ExportOutlined className="mr-2" />
              Export
            </button>
            <button className="flex items-center px-4 py-2 bg-gray-100 rounded-md text-gray-700">
              <FilterOutlined className="mr-2" />
              Filtre
            </button>
          </div>
          <button className="px-4 py-2 bg-purple-500 text-white rounded-md">
            Commencer une livraison
          </button>
        </div>
        
        {/* En-tête du tableau */}
        <div className="grid grid-cols-5 gap-4 mb-2 font-medium text-sm text-gray-500">
          <div>Statut de paiement</div>
          <div>Montant</div>
          <div>Date</div>
          <div>Status</div>
          <div>Action</div>
        </div>
        
        {/* Lignes du tableau */}
        {deliveries.map((delivery, index) => (
          <div 
            key={delivery.id}
            className="grid grid-cols-5 gap-4 py-3 border-b border-gray-100 items-center cursor-pointer hover:bg-gray-50"
            onClick={() => onSelectDelivery(delivery.orderId)}
          >
            <div>
              {delivery.paymentStatus === 'Non payé' ? (
                <span className="bg-red-50 text-red-500 border border-red-200 px-4 py-1 rounded-md text-sm">Non payé</span>
              ) : delivery.paymentStatus === 'Pas totalement' ? (
                <span className="bg-blue-50 text-blue-500 border border-blue-200 px-4 py-1 rounded-md text-sm">Pas totalement</span>
              ) : (
                <span className="bg-purple-50 text-purple-500 border border-purple-200 px-4 py-1 rounded-md text-sm">Payé</span>
              )}
            </div>
            <div className="text-sm">{delivery.amount}</div>
            <div className="text-sm">{delivery.date}</div>
            <div>
              <span className="bg-blue-100 text-blue-600 px-4 py-1 rounded-md text-sm">{delivery.status}</span>
            </div>
            <div>
              <button 
                className="text-gray-500"
                onClick={(e) => {
                  e.stopPropagation(); // Empêche le déclenchement du onClick du parent
                  // Action spécifique pour le bouton d'action
                }}
              >
                <MoreOutlined />
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };
  

  export default DeliveryList;