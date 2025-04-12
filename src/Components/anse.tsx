// src/anse.tsx
import Sidebar from "./Sidebar/Sidebar";
import Header from "./Header";

const Anse = () => {
  return (
    <div className="flex bg-gray-100"> {/* Utilisation de la classe bg-gray-200 ici */}
      <Sidebar />
      <div className="flex-1">
        <Header />
        <main className="p-6">
          <h1 className="text-2xl font-bold"   style={{
            fontFamily: 'Times New Roman, serif',
            fontWeight: 'bold',
          }}>Tableau de bord</h1>
        </main>
      </div>
    </div>
  );
};

export default Anse;
