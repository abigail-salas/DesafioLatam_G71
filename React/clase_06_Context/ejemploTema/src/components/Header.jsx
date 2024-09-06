import React from "react";
import { useTheme } from "../context/ThemeContext";
import "../style/DarkTheme.css";
import "../style/LightTheme.css";

const Header = () => {
  const { theme } = useTheme();

  return (
    <header className={theme === "light" ? "light-header" : "dark-header"}>
      <h1>Probando Context</h1>
    </header>
  );
};
export default Header;
