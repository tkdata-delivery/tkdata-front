// RecentDeliveries.jsx

// Importation des composants nécessaires depuis Ant Design
import { Card, Typography, Button, Table, Tag, Dropdown, Menu, Avatar } from 'antd';
import { ArrowRightOutlined, MoreOutlined } from '@ant-design/icons';

const { Title, Text } = Typography;

/**
 * Données simulées représentant les livraisons récentes.
 * Chaque objet contient :
 * - un identifiant unique,
 * - le nom et les initiales du client,
 * - la quantité commandée,
 * - le statut de paiement,
 * - le montant total,
 * - et le statut de la commande.
 */
const deliveriesData = [
  {
    key: '1',
    id: '17mars2025_steveadam_bonaberi_12:34',
    clientName: 'Steve Adam',
    clientInitials: 'SA',
    quantity: 150,
    paymentStatus: 'Payé',
    amount: '350,000 cfa',
    status: 'Terminé',
  },
  // D'autres entrées peuvent être ajoutées ici
];

/**
 * Composant `RecentDeliveries`
 * 
 * Ce composant affiche une carte contenant un tableau des livraisons les plus récentes.
 * Il permet de visualiser les informations de commande, client, statut de paiement, montant,
 * statut de livraison, et d'accéder à un menu d'actions.
 * 
 * Props :
 * - title : titre affiché en haut de la carte (par défaut : "Livraisons récentes")
 * - data : tableau des données de livraison à afficher (par défaut : `deliveriesData`)
 * - className : classes CSS supplémentaires à appliquer à la carte
 */
const RecentDeliveries = ({
  title = "Livraisons récentes",
  data = deliveriesData,
  className = "",
}) => {
  
  /**
   * Retourne une étiquette colorée selon le statut de livraison.
   * @param {string} status - Statut de la commande
   */
  const getStatusTag = (status) => {
    const statusStyles = {
      'Terminé': { color: 'green', bg: 'bg-green-100' },
      'En cours': { color: 'orange', bg: 'bg-orange-100' },
      'Annulé': { color: 'red', bg: 'bg-red-100' },
    };
    const style = statusStyles[status] || { color: 'gray', bg: 'bg-gray-100' };

    return (
      <Tag className={`${style.bg} text-${style.color}-600 border-0 rounded-md py-1 px-3`}>
        {status}
      </Tag>
    );
  };

  /**
   * Retourne une étiquette stylisée pour le statut de paiement.
   * @param {string} status - Statut de paiement (ex: "Payé")
   */
  const getPaymentTag = (status) => (
    <Tag className="bg-white border border-purple-300 text-purple-600 rounded-md py-1 px-4">
      {status}
    </Tag>
  );

  /**
   * Retourne un avatar avec les initiales du client, coloré selon des classes prédéfinies.
   * @param {string} initials - Initiales du client
   */
  const getClientAvatar = (initials) => {
    const colors = {
      'SA': 'bg-green-200 text-green-700',
      'JP': 'bg-purple-200 text-purple-700',
      'KS': 'bg-orange-200 text-orange-700',
    };
    const colorClass = colors[initials] || 'bg-gray-200 text-gray-700';

    return (
      <Avatar size={32} className={`flex items-center justify-center font-medium ${colorClass}`}>
        {initials}
      </Avatar>
    );
  };

  /**
   * Menu contextuel affiché lorsqu'on clique sur l'icône d'actions (3 points)
   */
  const actionMenu = (
    <Menu>
      <Menu.Item key="1">Voir les détails</Menu.Item>
      <Menu.Item key="2">Modifier</Menu.Item>
      <Menu.Item key="3" danger>Annuler</Menu.Item>
    </Menu>
  );

  /**
   * Définition des colonnes du tableau
   */
  const columns = [
    {
      title: 'Commande ID',
      dataIndex: 'id',
      key: 'id',
      sorter: true,
      render: (text) => <Text className="text-sm text-gray-800">{text}</Text>,
    },
    {
      title: 'Nom du client',
      dataIndex: 'clientName',
      key: 'clientName',
      sorter: true,
      render: (text, record) => (
        <div className="flex items-center">
          {getClientAvatar(record.clientInitials)}
          <Text className="ml-2 text-sm">{text}</Text>
        </div>
      ),
    },
    {
      title: 'Quantité de produit',
      dataIndex: 'quantity',
      key: 'quantity',
      sorter: true,
      render: (text) => <Text className="text-sm text-gray-800">{text}</Text>,
    },
    {
      title: 'Statut de paiement',
      dataIndex: 'paymentStatus',
      key: 'paymentStatus',
      sorter: true,
      render: (status) => getPaymentTag(status),
    },
    {
      title: 'Montant',
      dataIndex: 'amount',
      key: 'amount',
      sorter: true,
      render: (text) => <Text className="text-sm font-medium">{text}</Text>,
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      sorter: true,
      render: (status) => getStatusTag(status),
    },
    {
      title: 'Action',
      key: 'action',
      render: () => (
        <Dropdown overlay={actionMenu} placement="bottomRight">
          <Button 
            type="text" 
            icon={<MoreOutlined />}
            className="text-gray-500 hover:text-gray-700" 
          />
        </Dropdown>
      ),
    },
  ];

  return (
    <Card className={`shadow-sm ${className}`} bodyStyle={{ padding: '20px' }}>
      {/* En-tête de la carte avec titre et bouton d’accès */}
      <div className="flex justify-between items-center mb-6">
        <Title level={4} className="m-0">{title}</Title>
        <Button 
          type="link" 
          className="text-purple-600 flex items-center" 
          icon={<ArrowRightOutlined className="ml-1" />}
        >
          Accéder à la page de livraison
        </Button>
      </div>

      {/* Tableau des livraisons récentes */}
      <Table 
        columns={columns} 
        dataSource={data} 
        pagination={false}
        className="custom-table"
        size="middle"
      />
    </Card>
  );
};

export default RecentDeliveries;
