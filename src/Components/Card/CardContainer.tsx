// CardContainer.tsx

// Importation des modules nécessaires depuis React et Ant Design

import { Card } from "antd";

/**
 * Composant réutilisable `CardContainer`
 * 
 * Ce composant sert d'enveloppe pour afficher du contenu dans une carte (card)
 * stylisée avec Ant Design. Il permet de personnaliser le style en ajoutant des classes
 * CSS supplémentaires via la prop `className`.
 * 
 * Props :
 * - children : éléments React imbriqués dans la carte.
 * - className (optionnelle) : chaîne de caractères permettant d'ajouter des classes CSS personnalisées.
 */
const CardContainer = ({ children, className = '' }) => {
  return (
    <Card
      className={`bg-white rounded-lg shadow-sm ${className}`} // Style de base + classe(s) personnalisée(s)
      bodyStyle={{ padding: '20px' }} // Style interne du corps de la carte
    >
      {children}
    </Card>
  );
};

export default CardContainer;
