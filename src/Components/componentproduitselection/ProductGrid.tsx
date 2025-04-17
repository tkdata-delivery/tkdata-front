// src/components/ProductGrid.tsx
import React from 'react';
import { Check } from 'lucide-react';
import rizImage from './images/riz.png';



interface Product {
  id: number;
  name: string;
  size: string;
  price: number;
  quantity: number;
  selected: boolean;
}

interface ProductGridProps {
  products: Product[];
  selectedProducts: number[];
  toggleProductSelection: (productId: number) => void;
}

const ProductGrid: React.FC<ProductGridProps> = ({ products, selectedProducts, toggleProductSelection }) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-160 -translate-y-18">
      {products.map((product) => (
        <div
          key={product.id}
          className={`border ${selectedProducts.includes(product.id) ? 'border-purple-500 bg-purple-50' : 'border-purple-200'} rounded-lg p-4 flex items-center relative cursor-pointer`}
          onClick={() => toggleProductSelection(product.id)}
        >
          <div className="absolute right-3 top-3">
            <div
              className={`${selectedProducts.includes(product.id) ? 'bg-purple-500' : 'bg-gray-300'} rounded-full w-6 h-6 flex items-center justify-center`}
            >
              <Check size={16} className="text-white" />
            </div>
          </div>

          <div className="mr-4">
            <div className="bg-pink-200 p-2 rounded-lg w-20 h-20 flex items-center justify-center">
              <img src={rizImage} alt="Sac de riz" className="max-w-full max-h-full" />
            </div>
          </div>

          <div className="flex-grow">
            <div className="text-sm">{product.name}</div>
            <div className="flex justify-between items-center mt-2">
              <div className="text-purple-600 font-bold">{product.quantity}</div>
              <div className="font-bold">{product.price.toLocaleString()}cfa</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
