import useCount from "./hooks/useCount";

function App() {
  const { contador, suma, reset, resta } = useCount();

  return (
    <>
      <h1>Custom Hooks</h1>

      <h2>{contador}</h2>

      <button onClick={suma}>+1</button>
      <button onClick={resta}>-1</button>
      <button onClick={reset}>RESET</button>
    </>
  );
}

export default App;


