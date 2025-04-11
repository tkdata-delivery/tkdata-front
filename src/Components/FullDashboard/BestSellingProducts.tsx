import { Card, Typography, Progress } from 'antd';



/**
 * Composant `BestSellingProducts`
 * 
 * Ce composant affiche une carte avec une liste des meilleurs produits vendus, en indiquant le pourcentage des ventes de chaque produit à l'aide d'une barre de progression.
 * 
 * Props :
 * - title : titre de la carte (par défaut : "Meilleurs produits vendus")
 * - products : tableau d'objets contenant les informations des produits (par défaut, une liste avec 5 produits ayant un ID, un nom et un pourcentage de ventes).
 * - className : classes CSS supplémentaires pour personnaliser le style du composant.
 * 
 * Structure du composant :
 * - Un titre affiché en haut de la carte.
 * - Un tableau avec trois colonnes : ID du produit, nom du produit et barre de progression représentant le pourcentage des ventes.
 */
const { Title, Text } = Typography;

const BestSellingProducts = ({
  title = "Meilleurs produits vendus",
  products = [
    { id: 1, name: "Samsung S22", sales: 40 },
    { id: 2, name: "Clavier LED", sales: 35 },
    { id: 3, name: "Casque Samsung", sales: 32 },
    { id: 4, name: "écran de 23 pouces", sales: 30 },
    { id: 5, name: "Clavier LED", sales: 28 },
  ],
  className = "",
}) => {
  return (
    <Card className={`shadow-sm ${className}`} bodyStyle={{ padding: '20px' }}>
      <Title level={4} className="mb-6">{title}</Title>
      
      <div className="mb-4 flex items-center text-sm text-gray-500 font-medium">
        <div className="w-8">#</div>
        <div className="flex-grow">Produits</div>
        <div className="w-24 text-right">Ventes</div>
      </div>
      
      <div className="space-y-6">
        {products.map((product) => (
          <div key={product.id} className="flex items-center">
            <div className="w-8 text-gray-500">{product.id}</div>
            <div className="flex-grow text-gray-800">{product.name}</div>
            <div className="w-48">
              <Progress 
                percent={product.sales} 
                showInfo={false} 
                strokeColor="#8B5CF6" 
                trailColor="#EEE6FF"
                strokeWidth={8}
                className="custom-progress"
              />
            </div>
            <div className="w-12 text-right text-xs text-gray-500">{product.sales}%</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default BestSellingProducts;