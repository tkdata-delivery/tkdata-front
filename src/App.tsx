// src/App.tsx
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AuthentificationPage from './Modules/Authentification';
import Anse from './Components/anse';

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<AuthentificationPage />} />
        <Route path="/anse" element={<Anse />} />
      </Routes>
    </Router>
  );
};

export default App;


// // src/App.tsx
// // src/App.tsx
// import Anse from "./Components/anse";

// const App = () => {
//   return <Anse />;
// };

//export default App;
