// tous les composants de client se regroupe ici ils sont dans le dossier component client  donc client a plusieur composants

import React, { Dispatch, SetStateAction } from 'react';
import image from "../images/cameroun.png";
import UploadBox from './composantclient/UploadBox';
import InputField from './composantclient/InputField';
import PhoneInput from './composantclient/PhoneInput';
import LocationInputs from './composantclient/LocationInputs';
import FormActions from './composantclient/FormActions';

type ClientFormProps = {
  clientName: string;
  setClientName: Dispatch<SetStateAction<string>>;
  city: string;
  setCity: Dispatch<SetStateAction<string>>;
  phone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  district: string;
  setDistrict: Dispatch<SetStateAction<string>>;
  onAdd: () => void;
  onCancel: () => void;
};

const selectedCountry = {
  code: 'CM',
  name: 'Cameroun',
  prefix: '+237',
  flagUrl: image
};

const AddClientForm: React.FC<ClientFormProps> = ({
  clientName,
  setClientName,
  city,
  setCity,
  phone,
  setPhone,
  district,
  setDistrict,
  onAdd,
  onCancel
}) => {
  return (
    <div className="p-6 rounded-[10px] border-t-[3px] border-[#B4B4B4] bg-[#F5F5F5]">
      <h2 className="text-xl font-medium mb-4">Profil de client</h2>

      <UploadBox />

      <InputField
        label="Nom du client"
        required
        value={clientName}
        onChange={setClientName}
        placeholder="Entrer le nom ici"
      />

      <PhoneInput
        phone={phone}
        onChange={setPhone}
        selectedCountry={selectedCountry}
      />

      <LocationInputs
        city={city}
        district={district}
        onCityChange={setCity}
        onDistrictChange={setDistrict}
      />

      <FormActions onAdd={onAdd} onCancel={onCancel} />
    </div>
  );
};

export default AddClientForm;
