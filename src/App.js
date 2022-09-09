import { Routes, Route } from "react-router-dom";
import { listItens } from "./pages/listItens";


function App() {
  return (
    <div>
    <Routes>          
      <Route path="/listItens" element={<listItens />} />
    </Routes>
  </div>
  ); 
}

export default App;
