import React from 'react';

type FormActionsProps = {
  onAdd: () => void;
  onCancel: () => void;
};

const FormActions: React.FC<FormActionsProps> = ({ onAdd, onCancel }) => (
  <div className="flex flex-col sm:flex-row justify-end sm:space-x-3 space-y-3 sm:space-y-0">
    <button
      onClick={onCancel}
      className="px-5 py-2 border border-gray-300 rounded-md"
    >
      Annuler
    </button>
    <button
      onClick={onAdd}
      className="px-5 py-2 bg-purple-500 text-white rounded-md"
    >
      Enregistrer
    </button>
  </div>
);

export default FormActions;
