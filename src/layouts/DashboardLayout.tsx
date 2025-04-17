import Sidebar from "../Components/Sidebar/Sidebar";
import Header from "../Components/Header/index";
import { Outlet } from "react-router-dom";

export default function DashboardLayout() {
  return (
    <div className="flex h-screen bg-gray-100">
      <Sidebar  />
      <div className="flex flex-col flex-1">
        <Header />
        <main className="flex-1 p-6 overflow-y-auto">
          <Outlet/>
        </main>
      </div>
    </div>
  );
}
