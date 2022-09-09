import { Routes, Route } from "react-router-dom";
import {Home} from "./pages/Home";
import { listItens } from "./pages/listItens";
import {Navbar} from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/listItens" element={<listItens />} />
    </Routes>
  </div>
  ); 
}

export default App;
