import React from 'react';

type LocationInputsProps = {
  city: string;
  district: string;
  onCityChange: (val: string) => void;
  onDistrictChange: (val: string) => void;
};

const LocationInputs: React.FC<LocationInputsProps> = ({ city, district, onCityChange, onDistrictChange }) => (
  <div className="mb-8">
    <label className="block text-sm font-medium mb-1">Emplacement</label>
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <input
        type="text"
        value={city}
        onChange={(e) => onCityChange(e.target.value)}
        placeholder="Ville"
        className="p-3 border border-gray-300 rounded-md bg-white"
      />
      <input
        type="text"
        value={district}
        onChange={(e) => onDistrictChange(e.target.value)}
        placeholder="Quartier"
        className="p-3 border border-gray-300 rounded-md bg-white"
      />
    </div>
  </div>
);

export default LocationInputs;
