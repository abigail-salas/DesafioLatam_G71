import React from "react";
import { NavLink } from "react-router-dom";

function Navigation() {
  const setActiveClass = ({ isActive }) => (isActive ? "active" : undefined);

  return (
    <div>
      <NavLink className={setActiveClass} to={"/"}>
        Home
      </NavLink>
      {" - "}
      <NavLink className={setActiveClass} to={"/personajes"}>
        Personajes
      </NavLink>

      {" - "}
      <NavLink className={setActiveClass} to={"/admin"}>
        Administradores
      </NavLink>

      {" - "}
      <NavLink className={setActiveClass} to={"/login"}>
        Login
      </NavLink>
    </div>
  );
}

export default Navigation;
