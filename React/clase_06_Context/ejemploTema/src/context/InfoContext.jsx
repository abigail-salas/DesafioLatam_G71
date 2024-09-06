import React, { createContext, useState, useContext } from "react";

export const InfoContext = createContext();

const infoMasculino = ["Ignacio", "Pablo", "Sebastian", "Cristian", "Jonathan"];

function InfoProvider({ children }) {
  const [infoM, setInfoM] = useState(infoMasculino);

  return (
    <InfoContext.Provider value={{ infoM, setInfoM }}>
      {children}
    </InfoContext.Provider>
  );
}

//export const useInfo = () => useContext(InfoContext);

export default InfoProvider;
