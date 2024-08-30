import { useState } from "react";
import { Link } from "react-router-dom";

const Formulario = ({ setAlert, login }) => {
  const [nombre, setNombre] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validarDatos = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setAlert({
        error: true,
        msg: "Las contraseñas no coinciden !",
        color: "danger",
      });
      return;
    }

    if (
      nombre === "" ||
      email === "" ||
      password === "" ||
      confirmPassword === ""
    ) {
      setAlert({
        error: true,
        msg: "Completa todos los campos !",
        color: "danger",
      });
      return;
    }

    setAlert({
      error: false,
      msg: "Cuenta creada exitosamente !",
      color: "success",
    });
    setNombre("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
  };
  return (
    <>
      <h1 className="fs-1">Inicia Sesion con tu Cuenta</h1>
      <form className="formulario" onSubmit={validarDatos}>
        <div className="form-group mb-3">
          <input
            type="text"
            name="nombre"
            className="form-control"
            placeholder="Nombre"
            onChange={(e) => setNombre(e.target.value)}
            value={nombre}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="email"
            name="email"
            className="form-control"
            placeholder="tuemail@ejemplo.com"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Contraseña"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
          />
        </div>
        <div className="form-group mb-3">
          <input
            type="password"
            name="password"
            className="form-control"
            placeholder="Confirma tu contraseña"
            onChange={(e) => setConfirmPassword(e.target.value)}
            value={confirmPassword}
          />
        </div>
        <div className="d-grid gap-2">
          <button type="submit" className="btn btn-success">
            Registrarse
          </button>
        </div>
      </form>

      {login ? (
        <div>
          ¿Ya tienes una cuenta? <Link to="/login">Inicia Sesion</Link>
        </div>
      ) : (
        <div>
          ¿No tienes una cuenta? <Link to="/registro">Registrate</Link>
        </div>
      )}
    </>
  );
};

export default Formulario;
