import Component1 from "./components/Component1";
import Component2 from "./components/Component2";
import Header from "./components/Header";
import ThemeToggle from "./components/ThemeToggle";
import InfoContext from "./context/infoContext";
import ThemeContext from "./context/ThemeContext";
import BotonCambio from "./components/BotonCambio";

function App() {
  return (
    <>
      <ThemeContext>
        <Header />
        <ThemeToggle />
      </ThemeContext>

      <InfoContext>
        <Component1 />
        <Component2 />

        <BotonCambio />
      </InfoContext>
    </>
  );
}

export default App;
