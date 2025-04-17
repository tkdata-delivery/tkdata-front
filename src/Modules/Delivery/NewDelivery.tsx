// composant principal des produits de selection 
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import PageTitle from '../../Components/PageTitle';
import CategoryCarousel from '../../Components/componentproduitselection/CategoryCarousel';
import SearchBar from '../../Components/componentproduitselection/SearchBar';// Correction ici : importation par défaut
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
      <div className="max-w-6xl mx-auto p-6 bg-white rounded-[5px] min-h-screen pb-15 -translate-x-4">
        <div className="text-indigo-600 text-sm mb-2">
          <p className="text-indigo-600 text-sm">
            <Link to="/dashboard/delivery">Livraison</Link> &gt;{' '}
            <span className="text-black font-normal">Sélectionner les produits</span>
          </p>
        </div>
        <PageTitle>Sélectionnez les produits de la livraison</PageTitle>

        <CategoryCarousel categories={categories} />

        {/* Utilisation de SearchBar avec les bonnes props */}
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />

        <div className="text-purple-600 rounded-lg px-4 py-2 translate-x-115 -translate-y-18">
          <span>{selectedProducts.length} articles sélectionnés</span>
        </div>

        <Link to="client-selection">
          <button className="bg-purple-500 text-white px-8 py-2 rounded-lg translate-x-230 -translate-y-28 cursor-pointer">
            Continuer
          </button>
        </Link>

        <ProductGrid
          products={products}
          selectedProducts={selectedProducts}
          toggleProductSelection={toggleProductSelection}
        />
      </div>
    </>
  );
};

export default ProductSelection;
