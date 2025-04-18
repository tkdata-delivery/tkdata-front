// ActionMenu.tsx
import React, { useState } from 'react';

interface ActionMenuProps {
  position: string;
}

const ActionMenu: React.FC<ActionMenuProps> = ({ position }) => {
  const [showModal, setShowModal] = useState(false);

  const handleDeleteClick = () => {
    console.log("Delete button clicked");
    setShowModal(true);
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  const handleConfirmDelete = () => {
    // Action réelle de suppression ici
    console.log("Suppression confirmée");
    setShowModal(false);
  };

  return (
    <>
      <div className={`absolute ${position} mt-2 z-10 bg-white rounded-md shadow-lg border border-gray-200 py-1 w-40`}>
        <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
          Afficher détails
        </button>
        <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
          Modifier
        </button>
        <button className="w-full text-left px-4 py-2 text-gray-700 hover:bg-gray-100 transition-colors">
          Annuler
        </button>
        <button
          onClick={handleDeleteClick}
          className="w-full text-left px-4 py-2 text-red-600 hover:bg-gray-100 transition-colors"
        >
          Supprimer
        </button>
      </div>

      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50">
          <div className="bg-white w-full max-w-sm rounded-md p-6 shadow-lg">
            <h2 className="text-xl font-medium text-center mb-4">Avertissement !</h2>
            <p className="text-sm text-center text-gray-700 mb-6">
              La suppression d'une livraison est irréversible
            </p>
            <div className="flex justify-center gap-3">
              <button
                onClick={handleCloseModal}
                className="px-6 py-2 rounded bg-gray-100 hover:bg-gray-200 transition text-gray-800"
              >
                Annuler
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-6 py-2 rounded bg-red-600 text-white hover:bg-red-700 transition"
              >
                Supprimer
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ActionMenu;