import React, { useContext, useEffect, useState } from "react";
import qualityService from "../services/quality.service";

const QualityContext = React.createContext();
export const useQualities = () => {
  return useContext(QualityContext);
};

export const QualityProvider = ({ children }) => {
  const [qualities, setQualitees] = useState([]);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    const getQualities = async () => {
      try {
        const { content } = await qualityService.fetchAll();
        setQualitees(content);
        setIsLoading(false);
      } catch (error) {
        const { message } = error.response.data;
        setError(message);
      }
    };
    getQualities();
  }, []);
  return (
    <QualityContext.Provider value={{ qualities, isLoading }}>
      {!isLoading ? children : <h1>Loading</h1>}
    </QualityContext.Provider>
  );
};
