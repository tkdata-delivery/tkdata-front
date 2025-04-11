// CardFooter.jsx

// Importation des icônes fléchées depuis la bibliothèque Ant Design
import { ArrowUpOutlined, ArrowDownOutlined } from '@ant-design/icons';

/**
 * Composant `CardFooter`
 * 
 * Ce composant affiche un petit résumé en bas d'une carte, incluant :
 * - une icône directionnelle (flèche vers le haut ou le bas),
 * - un pourcentage (positif ou négatif),
 * - une courte description.
 * 
 * Props :
 * - percentage : valeur à afficher (par défaut '+8.5%')
 * - description : texte complémentaire (par défaut 'Rapport de semaines dernières')
 * - isPositive : détermine si la valeur est positive ou négative, pour choisir l'icône et la couleur
 */
const CardFooter = ({ 
  percentage = '+8.5%', 
  description = 'Rapport de semaines dernières',
  isPositive = true
}) => {
  // Détermine la couleur du pourcentage en fonction de la valeur
  const percentageColor = isPositive ? 'text-green-500' : 'text-red-500';

  // Sélectionne l'icône (flèche vers le haut ou vers le bas)
  const IconComponent = isPositive ? ArrowUpOutlined : ArrowDownOutlined;
  
  return (
    <div className="flex items-center text-xs">
      {/* Icône directionnelle avec marge */}
      <IconComponent className={`mr-1 ${percentageColor}`} />
      
      {/* Affichage du pourcentage en couleur */}
      <span className={`font-medium ${percentageColor}`}>{percentage}</span>
      
      {/* Description complémentaire en gris */}
      <span className="text-gray-500 ml-2">{description}</span>
    </div>
  );
};

export default CardFooter;
