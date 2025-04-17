import React from 'react';

export const PaymentStatusSection: React.FC = () => {
  return (
    <div className="mb-6 px-2 sm:px-0"> {/* padding horizontal sur mobile seulement */}
      <label className="block text-gray-700 font-medium mb-2 text-sm sm:text-base">
        Statut du paiement
      </label>
      <div className="relative">
        <select className="w-full px-4 py-2 border rounded-md text-gray-700 appearance-none text-sm sm:text-base">
          <option>Sélectionnez le statut du paiement</option>
        </select>
        <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
          <svg className="w-4 h-4 sm:w-5 sm:h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
          </svg>
        </div>
      </div>
    </div>
  );
};
