import profile from './images/profile.jpg';

const Profile = () => {
  return (
    <div className="flex items-center space-x-3 ml-4"> {/* Décalage léger vers la droite avec ml-2 */}
      <img src={profile} alt="Profil" className="w-10 h-10 rounded-full" />
      <div className="flex flex-col   space-x-1 ml-1">
        <span className="text-gray-700 font-semibold  ">Anse Dev</span>
        <span className="text-sm text-gray-500">Livreur</span>
      </div>
    </div>
  );
};

export default Profile;
