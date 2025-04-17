// Fichier: ActionsSection.tsx
import React from 'react';
import { Link } from 'react-router-dom';

export const ActionsSection: React.FC = () => {
  return (
    <>
      <button className="w-full bg-purple-500 text-white py-3 rounded-md mb-4 hover:bg-purple-600">
        Enregistrer la livraison
      </button>
      <Link to="/dashboard/delivery/new-delivery">
      <button className="flex items-center justify-center w-full text-purple-500 hover:text-purple-600">
        <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 19l-7-7 7-7" />
        </svg>
        Ajouter des articles
      </button>
      </Link>
    </>
  );
};