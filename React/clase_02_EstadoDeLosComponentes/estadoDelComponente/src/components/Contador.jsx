import React, { useState } from "react";

function Contador() {
  const [cuenta, setCuenta] = useState(0);

  return (
    <div className="contador">
      <h3>Contador</h3>

      <button
        className="contador-btn"
        onClick={() => setCuenta((count) => (count += 20))}
      >
        Cuenta: {cuenta}
      </button>
    </div>
  );
}

export default Contador;
