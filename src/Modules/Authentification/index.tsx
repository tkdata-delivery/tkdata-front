import LoginForm from "./LoginForm";
import Sidebar from "./Sidebar";

const AuthentificationPage = () => {
  return (
    <div className="min-h-screen flex flex-col lg:flex-row bg-white">
      {/* Affiche le logo pour mobile + le formulaire */}
      <div className="flex-1 flex flex-col justify-center items-center p-4">
        <Sidebar /> {/* Contient le logo mobile */}
        <LoginForm />
      </div>

      {/* Affiche la sidebar complète uniquement sur grands écrans */}
      <div className="hidden lg:flex">
        <Sidebar />
      </div>
    </div>
  );
};

export default AuthentificationPage;
