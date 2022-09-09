import {Routes, Route} from "react-router-dom";
import {Home} from "./pages/Home";
import {Navbar} from "./components/Navbar"


function App() {
  return (<>
    <h1>Pop</h1>
    <Navbar />
    <Routes>
        <Routes path="/" element={<Home />} />
    </Routes>
    </>
    );
}

export default App;
