import React, { useContext } from "react";

const QualityContext = React.createContext();
export const useQualities = () => {
  return useContext(QualityContext);
};
const qualities = [{ _id: 2134, name: "Vasya" }];
export const QualityProvider = ({ children }) => {
  return (
    <QualityContext.Provider value={qualities}>
      {children}
    </QualityContext.Provider>
  );
};
