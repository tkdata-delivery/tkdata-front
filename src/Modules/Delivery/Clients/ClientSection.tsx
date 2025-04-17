// Fichier: ClientSection.tsx 
import React, { useState } from 'react';
import AddClientForm from './AddClientForm';

export const ClientSection: React.FC = () => {
  const [showClientForm, setShowClientForm] = useState(false);
  const [clientName, setClientName] = useState('');
  const [city, setCity] = useState('');
  const [phone, setPhone] = useState('');
  const [district, setDistrict] = useState('');
  const [selectedClient, setSelectedClient] = useState('');

  const handleAddClientClick = () => {
    setShowClientForm(true);
  };

  const handleCancelClick = () => {
    setShowClientForm(false);
    // Reset form fields
    setClientName('');
    setCity('');
    setPhone('');
    setDistrict('');
  };

  const handleAddClient = () => {
    // Logic to add the client would go here
    console.log({ clientName, city, phone, district });
    
    // Set the selected client to the name entered in the form
    setSelectedClient(clientName);
    
    // Close the form
    setShowClientForm(false);
    
    // Reset form fields
    setClientName('');
    setCity('');
    setPhone('');
    setDistrict('');
  };

  return (
    <div className="mb-6">
      <div className="flex items-center mb-2">
        <label className="block text-gray-700 font-medium">
          Client <span className="text-red-500">*</span>
        </label>
      </div>
      <p className="text-sm text-gray-500 mb-2">Sélectionnez un client existant</p>
      
      {/* Champ de recherche du client */}
      {!showClientForm && (
        <input 
          type="text" 
          value={selectedClient}
          onChange={(e) => setSelectedClient(e.target.value)}
          placeholder="Commencez à écrire le nom" 
          className="w-full px-4 py-2 border rounded-md text-gray-700"
        />
      )}
      
      {/* Bouton Ajouter le client + texte "Pas présent ?" */}
      {!showClientForm && (
        <div className="mt-3 flex items-center">
          <span className="text-gray-700 mr-2">Pas présent ?</span>
          <button 
            onClick={handleAddClientClick}
            className="flex items-center border border-purple-500 text-purple-500 px-3 py-1 rounded hover:bg-indigo-50 transition"
          >
            <svg className="w-5 h-5 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
            </svg>
            Ajouter le client
          </button>
        </div>
      )}

      {/* Formulaire d'ajout du client */}
      {showClientForm && (
        <AddClientForm 
          clientName={clientName}
          setClientName={setClientName}
          city={city}
          setCity={setCity}
          phone={phone}
          setPhone={setPhone}
          district={district}
          setDistrict={setDistrict}
          onCancel={handleCancelClick}
          onAdd={handleAddClient}
        />
      )}
    </div>
  );
};
