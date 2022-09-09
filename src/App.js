import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { ListItens }  from "./pages/ListItens";
import { Navbar } from "./components/Navbar";


function App() {
  return (
    <div>
      <Navbar />
    <Routes>
      <Route path="/ListItens" element={<ListItens />} />
    </Routes>
  </div>
  ); 
}

export default App;
