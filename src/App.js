import './App.css';
import './global.css'; 
import {
  Routes,
  Route,
} from "react-router-dom";
import AboutUs from './pages/AboutUs';
import Forms from './pages/Forms';


function App() {
  return (
      <Routes>
      <Route path="/" element={<AboutUs/>} />
      <Route path="/forms" element={<Forms/>} />
      </Routes>
  );
}

export default App;
