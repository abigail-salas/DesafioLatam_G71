import Propiedades from "./components/Propiedades";
import Titulo from "./components/Titulo";

function App() {
  return (
    <>
      <h1>Probando REACT</h1>

      <Titulo />

      <Propiedades title="Mouse" price="$400" />
      <Propiedades title="Gabinete" price="$900" />
      <Propiedades title="Monitor" price="$1200" />
    </>
  );
}

export default App;
