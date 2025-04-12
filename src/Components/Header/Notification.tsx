// src/Components/Notification/Notification.tsx
import { Bell } from "lucide-react";

const Notification = () => {
  return (
    <div className="relative">
      {/* Conteneur de l'icône avec fond gris et arrondi */}
      <div className="p-1 bg-gray-200  rounded-full">
        <Bell className="text-gray-600  w-8 h-8 cursor-pointer" />
      </div>
      {/* <div className="absolute top-0 right-0 bg-red-500 text-white text-xs rounded-full w-4 h-4 flex items-center justify-center">
        3
      </div> */}
    </div>
  );
};

export default Notification;
