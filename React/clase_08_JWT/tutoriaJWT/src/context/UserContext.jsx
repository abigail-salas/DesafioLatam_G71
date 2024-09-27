import React, { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

const initialStateToken = localStorage.getItem("token") || null;

const UserProvider = ({ children }) => {
  const [token, setToken] = useState(initialStateToken);
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (token) {
      localStorage.setItem();
    } else {
      localStorage.removeItem();
    }
  }, [token]);
  const loginEmailPassword = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    setToken(data.token || null);

    return data;
  };

  const registerEmailPassword = async (email, password) => {
    const response = await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    setToken(data.token || null);

    return data;
  };

  const logout = () => {
    setToken(null);
  };

  const getUser = async () => {
    const response = await fetch("http://localhost:5000/api/auth/me", {
      headers: { Authorization: `Bearer ${token}` },
    });

    const data = await response.json();

    setEmail(data.email || null);

    return data;
  };

  return (
    <UserContext.Provider
      value={{
        token,
        loginEmailPassword,
        registerEmailPassword,
        getUser,
        logout,
        email,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};

export default UserProvider;
