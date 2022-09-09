import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import {ListItens} from "./pages/ListItens";
import { Navbar } from "./components/Navbar";
import {DetalhesPage} from "./pages/DetalhesPage";


function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/ListItens" element={<ListItens />} />
      <Route path="/:id" element={<DetalhesPage />} />
    </Routes>
  </div>
  ); 
}

export default App;
