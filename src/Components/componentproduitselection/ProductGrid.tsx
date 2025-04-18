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
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 max-w-screen-xl mx-auto px-4 py-4">
      {products.map((product) => (
        <div
          key={product.id}
          className={`border ${
            selectedProducts.includes(product.id)
              ? 'border-purple-500 bg-purple-50  '
              : 'border-purple-200'
          } rounded-lg p-3 sm:p-4 flex items-start sm:items-center relative cursor-pointer w-full transition duration-300 hover:shadow-md -ml-3`}
          onClick={() => toggleProductSelection(product.id)}
        >
          <div className="absolute right-2 top-2 sm:right-3 sm:top-3">
            <div
              className={`${
                selectedProducts.includes(product.id)
                  ? 'bg-purple-500'
                  : 'bg-gray-300'
              } rounded-full w-5 h-5 sm:w-6 sm:h-6 flex items-center justify-center`}
            >
              <Check size={14} className="text-white" />
            </div>
          </div>

          <div className="mr-3 sm:mr-4 flex-shrink-0">
            <div className="bg-pink-200 p-1 sm:p-2 rounded-lg w-16 h-16 sm:w-20 sm:h-20 flex items-center justify-center">
              <img 
                src={rizImage} 
                alt="Sac de riz" 
                className="max-w-full max-h-full object-contain"
              />
            </div>
          </div>

          <div className="flex-grow min-w-0">
            <div className="text-xs sm:text-sm leading-tight">{product.name}</div>
            <div className="flex flex-col sm:flex-row justify-between items-baseline mt-1 sm:mt-2 gap-1">
              <div className="text-purple-600 font-bold text-sm sm:text-base">
                {product.quantity}
              </div>
              <div className="font-bold text-sm sm:text-base">
                {product.price.toLocaleString()} cfa
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProductGrid;
