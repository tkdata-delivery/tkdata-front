import React from 'react';
import { Link } from 'react-router-dom';

type BreadcrumbNavigationProps = {
  paths: string[];
};

export const BreadcrumbNavigation: React.FC<BreadcrumbNavigationProps> = () => {
  return (
    <div className="text-sm text-purple-500 mb-4 flex items-center space-x-2">
      <Link to="/dashboard/delivery" className="hover:underline">
        Livraison
      </Link>
      <span>&gt;</span>
      <Link to="/dashboard/delivery/new-delivery" className="hover:underline text-purple-500">
        Sélectionner les produits
      </Link>
      <span>&gt;</span>
      <span className="text-black">Configuration</span>
    </div>
  );
};
