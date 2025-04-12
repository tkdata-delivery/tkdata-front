import SearchComponent from "./Search";
import Profile from "./Profile";
import Notification from "./Notification";
import Dropdown from "./Dropdown"; // Import du composant Dropdown

const Header = () => {
  return (
    <div className="w-full flex justify-between items-center bg-white px-6 py-4 ">
      <SearchComponent />

      <div className="flex items-center space-x-6">
        <Notification />
        <Profile />
        <Dropdown /> {/* Ajout du Dropdown ici */}
      </div>
    </div>
  );
};

export default Header;
