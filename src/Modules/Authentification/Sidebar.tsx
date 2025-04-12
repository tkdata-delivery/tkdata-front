import logo1 from './images/logo1.png'
import Messenger from './images/Messenger.png'

const Sidebar = () => {
  return (
    <>
      {/* Logo pour mobile */}
      <div className="lg:hidden flex justify-center p-6 mt-40">
        <img src={logo1} alt="Logo mobile" className="w-32 h-32" />
      </div>

      {/* Sidebar pour desktop */}
      <div className="hidden lg:flex flex-col w-110 bg-[rgba(215,187,245,1)] h-screen absolute right-0 top-0">
        {/* Logo desktop */}
        <div className="flex justify-center p-6">
          <img src={logo1} alt="Logo" className="w-40 h-40" />
        </div>

        {/* Texte */}
        <div className="flex-grow flex flex-col justify-center items-center my-4 px-6">
          <div className="label">
            <p className="text-black text-center text-xl font-semibold">
              Centralisation de la gestion de vos produits/Livraisons commandes et paiements
            </p>
          </div>
        </div>

        {/* Image */}
        <div className="flex justify-center items-end pb-6">
          <img src={Messenger} alt="Simple Image" className="w-100 h-80" />
        </div>
      </div>
    </>
  );
};

export default Sidebar;
