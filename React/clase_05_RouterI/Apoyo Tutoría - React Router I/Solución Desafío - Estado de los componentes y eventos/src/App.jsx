import { Route, Routes } from "react-router-dom";
import "./App.css";
import Registro from "./views/Registro.jsx";
import Formulario from "./views/Formulario";
/* import Navbar from "./components/Navbar"; */

function App() {
  return (
    <>
      {/* <Navbar /> */}
      <Routes>
        <Route path="/" element={<Registro />} />
        <Route path="/login" element={<Formulario />} />
        <Route path="/registro" element={<Registro />} />
      </Routes>
    </>
  );
}

export default App;
