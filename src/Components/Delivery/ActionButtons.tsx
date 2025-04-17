import React from 'react';
import { ActionMenuProps } from './types';

export const ActionMenu: React.FC<ActionMenuProps> = ({ orderId, isOpen, onAction }) => {
  if (!isOpen) return null;

  return (
    <div className="absolute right-0 top-6 mt-1 z-50 bg-white">
      <div className="flex flex-col" role="menu" aria-orientation="vertical">
        <button
          onClick={() => onAction('afficher', orderId)}
          className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 text-left"
          role="menuitem"
        >
          Afficher
        </button>
        <button
          onClick={() => onAction('modifier', orderId)}
          className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 text-left"
          role="menuitem"
        >
          Modifier
        </button>
        <button
          onClick={() => onAction('annuler', orderId)}
          className="px-4 py-2 text-sm text-gray-800 hover:bg-gray-100 text-left"
          role="menuitem"
        >
          Annuler
        </button>
        <button
          onClick={() => onAction('supprimer', orderId)}
          className="px-4 py-2 text-sm text-red-600 hover:bg-gray-100 text-left"
          role="menuitem"
        >
          Supprimer
        </button>
      </div>
    </div>
  );
};
export default ActionMenu;