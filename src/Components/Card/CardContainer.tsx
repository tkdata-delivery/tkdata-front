// Importation des modules nécessaires depuis React et Ant Design

import { Card } from "antd";


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
