// src/anse.tsx
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header/Header";

const Anse = () => {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <h1 className="text-2xl font-bold">Bienvenue sur le tableau de bord</h1>
        </main>
      </div>
    </div>
  );
};

export default Anse;
