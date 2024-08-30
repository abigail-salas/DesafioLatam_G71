import { useState } from "react";

import Formulario from "./Formulario";
import SocialButton from "./SocialButton";
import Alert from "./Alert";

const Registro = () => {
  const [alert, setAlert] = useState({ error: "", msg: "", color: "" });
  return (
    <>
      <div className="container border border-light-subtle rounded-5 bg-white p-5">
        <h1 className="fs-1">Crea una cuenta</h1>
        <div className="d-flex gap-3 justify-content-center my-3">
          <SocialButton icon="fa-brands fa-facebook" />
          <SocialButton icon="fa-brands fa-github" />
          <SocialButton icon="fa-brands fa-linkedin-in" />
        </div>
        <p>O usa tu email para registrarte</p>
        <Formulario setAlert={setAlert} login={true} />
        {alert.msg && <Alert color={alert.color}>{alert.msg}</Alert>}
      </div>
    </>
  );
};

export default Registro;

/* import React from "react";

function Registro() {
  return <div>Registro</div>;
}

export default Registro;
 */
