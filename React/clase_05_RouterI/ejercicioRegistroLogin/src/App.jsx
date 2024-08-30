import Navigation from "./components/Navigation";
import { Route, Routes } from "react-router-dom";
import Home from "./views/Home";
import Register from "./views/Register";
import Login from "./views/Login";
import NotFound from "./views/NotFound";

function App() {
  return (
    <div style={{ backgroundColor: "#3c3c3b" }}>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
