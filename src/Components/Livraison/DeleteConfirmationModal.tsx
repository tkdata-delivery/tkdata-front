// DeleteConfirmationModal.js
import React from 'react';
import { CloseOutlined } from '@ant-design/icons';

const DeleteConfirmationModal = ({ onCancel, onConfirm }) => {
  return (
    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50">
      <div className="bg-white rounded-lg p-6 shadow-lg max-w-md w-full">
        <div className="flex justify-end">
          <button className="text-gray-500" onClick={onCancel}>
            <CloseOutlined />
          </button>
        </div>
        <div className="flex flex-col items-center justify-center mt-4 mb-8">
          <h2 className="text-xl font-bold mb-4">Êtes-vous sûr de vouloir supprimer cette livraison?</h2>
          <p className="text-gray-500 text-center">Cette action est irréversible. Toutes les données associées à cette livraison seront perdues.</p>
        </div>
        <div className="flex justify-center">
          <button 
            className="px-6 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
            onClick={onConfirm}
          >
            Supprimer
          </button>
        </div>
      </div>
    </div>
  );
};

export default DeleteConfirmationModal;