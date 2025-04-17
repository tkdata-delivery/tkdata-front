import React from 'react';
import rizImage from "./riz.png";

type ProductCardProps = {
  image: string;
  title: string;
  price: number;
  quantity: number;
  total: number;
  onIncrement: () => void;
  onDecrement: () => void;
};

export const ProductCard: React.FC<ProductCardProps> = ({ 
  image = rizImage, 
  title, 
  price, 
  quantity, 
  total,
  onIncrement,
  onDecrement
}) => {
  return (
    <div className="bg-white p-4 rounded-md flex flex-col sm:flex-row sm:items-center sm:space-x-4">
      <div className="mb-4 sm:mb-0">
        <img src={image} alt={title} className="rounded-md bg-pink-200 w-20 h-20 object-cover" />
      </div>

      <div className="flex-1">
        <h3 className="font-medium text-lg">{title}</h3>
        <div className="flex justify-between items-center text-sm text-gray-700 mb-2">
          <span>Prix : {price.toLocaleString()} cfa</span>
          <span className="text-purple-500 font-semibold">Total : {total.toLocaleString()} cfa</span>
        </div>

        {/* Conteneur parent avec 'flex' pour aligner les deux sections horizontalement */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center">
            <button onClick={onDecrement} className="bg-gray-800 text-white p-1 rounded-md">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M20 12H4" />
              </svg>
            </button>
            <span className="mx-2">{quantity}</span>
            <button onClick={onIncrement} className="bg-gray-800 text-white p-1 rounded-md">
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
              </svg>
            </button>
          </div>

          {/* Suppression (bouton rouge) */}
          <div className="flex flex-col justify-between items-end mt-4 sm:mt-0">
            <button className="text-red-500">
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
