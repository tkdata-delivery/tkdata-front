// CardHeader.jsx

// Importation d'une icône depuis la bibliothèque Ant Design
import { ArrowUpOutlined } from '@ant-design/icons';

/**
 * Composant `CardHeader`
 * 
 * Ce composant affiche l'en-tête d'une carte, contenant :
 * - un titre descriptif,
 * - une icône (avec fond et couleur personnalisables).
 * 
 * Props :
 * - title : texte affiché en haut à gauche (par défaut : 'Chiffre d'affaires total')
 * - icon : élément React représentant l’icône (par défaut : flèche vers le haut)
 * - iconBackground : classes Tailwind pour le fond de l’icône (par défaut : 'bg-green-50')
 * - iconColor : classes Tailwind pour la couleur de l’icône (par défaut : 'text-green-500')
 */
const CardHeader = ({ 
  title = 'Chiffre d\'affaires total', 
  icon = <ArrowUpOutlined />, 
  iconBackground = 'bg-green-50',
  iconColor = 'text-green-500'
}) => {
  return (
    <div className="flex justify-between items-start mb-4">
      {/* Titre de la carte */}
      <div className="text-sm text-gray-600 font-medium">{title}</div>

      {/* Conteneur de l'icône avec fond et bord arrondi */}
      <div className={`p-2 rounded-full ${iconBackground}`}>
        <span className={iconColor}>{icon}</span>
      </div>
    </div>
  );
};

export default CardHeader;
