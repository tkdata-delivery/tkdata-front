import React from "react";
import LoginForm from "./LoginForm";
import Sidebar from "./Sidebar";

const AuthentificationPage = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Formulaire centré */}
      <div className="flex-1 flex justify-center items-center p-6">
        <LoginForm />
      </div>

      {/* Sidebar à droite */}
      <div className="lg:flex hidden">
        <Sidebar />
      </div>
    </div>
  );
};

export default AuthentificationPage;
