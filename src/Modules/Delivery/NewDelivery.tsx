import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle';
import CategoryCarousel from '../../Components/componentproduitselection/CategoryCarousel';
import SearchBar from '../../Components/componentproduitselection/SearchBar';
import ProductGrid from '../../Components/componentproduitselection/ProductGrid';

interface Product {
  id: number;
  name: string;
  size: string;
  price: number;
  quantity: number;
  selected: boolean;
  category: string;
}

const ProductSelection: React.FC = () => {
  const [selectedProducts, setSelectedProducts] = useState<number[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { name: 'Tous les produits', count: 77 },
    { name: 'Épicerie', count: 10 },
    { name: 'Boissons', count: 30 },
    { name: 'Produits Ménagers', count: 9 },
    { name: 'Produits Laitiers', count: 0 },
    { name: 'Produits Surgelés', count: 10 },
    { name: 'Fruits', count: 12 },
    { name: 'Légumes', count: 15 },
    { name: 'Viandes', count: 8 },
  ];

  const products: Product[] = [
    {
      id: 1,
      name: 'Sac de riz Bijou de 25Kg',
      size: '25Kg',
      price: 25000,
      quantity: 4,
      selected: true,
      category: 'Épicerie',
    },
    {
      id: 2,
      name: 'Sac de riz Bijou de 50Kg',
      size: '50Kg',
      price: 50000,
      quantity: 6,
      selected: true,
      category: 'Épicerie',
    },
  ];

  const toggleProductSelection = (productId: number) => {
    setSelectedProducts((prev) =>
      prev.includes(productId)
        ? prev.filter((id) => id !== productId)
        : [...prev, productId]
    );
  };

  return (
    <>
      <PageTitle>Livraison</PageTitle>
      <div className="max-w-6xl mx-auto p-4 sm:p-6 bg-white rounded-[10px] min-h-screen pb-15 ml-1">
        {/* Fil d'Ariane */}
        <div className="text-indigo-600 mb-4 sm:mb-2">
          <nav className="text-xs sm:text-sm">
            <Link to="/dashboard/delivery" className="hover:text-indigo-800">
              Livraison
            </Link>{' '}
            &gt;{' '}
            <span className="text-gray-600">Sélectionner les produits</span>
          </nav>
        </div>

        <PageTitle>Sélectionnez les produits de la livraison</PageTitle>

        {/* Carrousel des catégories */}
        <div className="mx-4 sm:mx-0">
          <CategoryCarousel categories={categories} />
        </div>

        {/* Recherche + Sélection + Bouton */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mt-6 mb-6 px-2 sm:px-0 mr-12 ">
          <div className="w-full sm:w-auto">
            <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
          </div>

          <div className="text-purple-600 text-sm text-center sm:text-left ">
            {selectedProducts.length} articles sélectionnés
          </div>

          <Link 
            to="client-selection" 
            className="w-full sm:w-auto bg-purple-500 hover:bg-purple-600 text-white text-center px-9 py-2 rounded-lg transition-colors duration-200"
          >
            Continuer
          </Link>
        </div>

        {/* Grille de produits */}
        <div className="px-2 sm:px-0">
          <ProductGrid
            products={products}
            selectedProducts={selectedProducts}
            toggleProductSelection={toggleProductSelection}
          />
        </div>
      </div>
    </>
  );
};

export default ProductSelection;
