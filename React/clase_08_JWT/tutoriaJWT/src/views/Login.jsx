import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";

function Login() {
  const { loginEmailPassword } = useContext(UserContext);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!email || !password) {
      alert("Intenta de nuevo");
      return;
    }

    const response = await loginEmailPassword(email, password);
    alert(response?.error || "Authentication Successful");
  };

  return <div>FORMULARIO DE LOGIN</div>;
}

export default Login;
