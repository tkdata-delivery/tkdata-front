import React from 'react';

const UploadBox: React.FC = () => (
  <div className="mb-6 p-4 border-2 border-gray-300 border-dashed rounded-md flex items-center justify-center cursor-pointer hover:bg-gray-50">
    <div className="flex items-center text-gray-400">
      <svg className="w-5 h-5 mr-2" fill="none" viewBox="0 0 24 24">
        <path d="M12 4v12M12 16l-4-4M12 16l4-4M6 20h12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
      <span className="text-gray-400">Ajouter le profil du client</span>
    </div>
  </div>
);

export default UploadBox;
