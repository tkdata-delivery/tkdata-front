// TopClients.jsx

// Importation des composants nécessaires depuis Ant Design
import { Card, Typography, Avatar } from 'antd';

const { Title } = Typography;

/**
 * Fonction pour générer les initiales à partir du nom complet.
 * Exemple : "Jean Pierre" → "JP"
 * @param {string} name - Nom complet du client
 * @returns {string} - Initiales en majuscules
 */
const getInitials = (name) => {
  return name
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase();
};

/**
 * Retourne une classe Tailwind en fonction de la première lettre.
 * Sert à colorier l'avatar du client avec une couleur personnalisée.
 * @param {string} initial - Initiale à analyser
 * @returns {string} - Classe CSS Tailwind
 */
const getColorForInitial = (initial) => {
  const colors = {
    'J': 'bg-purple-200 text-purple-700',
    'S': 'bg-green-200 text-green-700',
    'K': 'bg-orange-200 text-orange-700',
    'R': 'bg-gray-200 text-gray-700',
  };
  return colors[initial[0]] || 'bg-blue-200 text-blue-700'; // Couleur par défaut
};

/**
 * Composant `ClientItem`
 * Affiche un client avec son avatar, nom, nombre d’achats et montant total.
 * 
 * Props :
 * - name : Nom complet du client
 * - initial : Initiales pour l'avatar
 * - value : Nombre d'achats
 * - amount : Montant total en cfa
 * - colorClass : Classe de couleur pour l’avatar
 */
const ClientItem = ({ name, initial, value, amount, colorClass }) => {
  return (
    <div className="flex items-center justify-between py-3">
      <div className="flex items-center">
        {/* Avatar avec les initiales et couleur dynamique */}
        <Avatar 
          size={40} 
          className={`flex items-center justify-center font-medium ${colorClass}`}
        >
          {initial}
        </Avatar>

        {/* Nom et nombre d’achats */}
        <div className="ml-3">
          <div className="text-sm text-gray-800">{name}</div>
          <div className="text-2xl font-bold">{value}</div>
        </div>
      </div>

      {/* Montant total des achats */}
      <div className="text-right">
        <div className="text-gray-800 font-medium">{amount}</div>
      </div>
    </div>
  );
};

/**
 * Composant principal `TopClients`
 * 
 * Affiche une liste des meilleurs clients sous forme de carte avec avatar, 
 * nom, nombre d'achats, et montant total dépensé.
 * 
 * Props :
 * - title : Titre affiché en haut de la carte
 * - clients : Liste des clients (nom, valeur, montant)
 * - className : Classe CSS personnalisée
 */
const TopClients = ({
    title = "Meilleurs clients",
    clients = [
      { name: "Jean Pierre", value: 35, amount: "332,000 cfa" },
      { name: "Steve Adam", value: 20, amount: "289,000 cfa" },
      { name: "Kenne Stephan", value: 12, amount: "137,000 cfa" },
      { name: "Samuel Dikongue", value: 9, amount: "111,500 cfa" },
      { name: "Robert John", value: 35, amount: "92,000 cfa" }
    ],
    className = "",
  }) => {
    return (
      <Card className={`shadow-sm ${className}`} bodyStyle={{ padding: '20px' }}>
        {/* Titre de la section */}
        <Title level={4} className="mb-6">{title}</Title>

        {/* Liste des clients */}
        <div className="space-y-1">
          {clients.map((client, index) => {
            const initial = getInitials(client.name);
            const colorClass = getColorForInitial(initial);

            return (
              <ClientItem 
                key={index}
                name={client.name}
                initial={initial}
                value={client.value}
                amount={client.amount}
                colorClass={colorClass}
              />
            );
          })}
        </div>
      </Card>
    );
};

export default TopClients;
