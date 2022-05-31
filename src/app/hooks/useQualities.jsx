import React, { useContext, useEffect, useState } from "react";
import qualityService from "../services/quality.service";

const QualityContext = React.createContext();
export const useQualities = () => {
    return useContext(QualityContext);
};

export const QualityProvider = ({ children }) => {
    const [qualities, setQualities] = useState([]);
    const [error, setError] = useState(null);
    const [isLoading, setIsLoading] = useState(true);
    useEffect(() => {
        const getQualities = async () => {
            try {
                const { content } = await qualityService.fetchAll();
                setQualities(content);
                setIsLoading(false);
            } catch (error) {
                const { message } = error.response.data;
                setError(message);
            }
        };
        getQualities();
    }, []);
    const getQuality = id => {
        return qualities.find(quality => quality._id === id);
    };
    const updateQuality = async ({ _id: id, ...data }) => {
        try {
            const { content } = await qualityService.update(id, data);
            setQualities(prevState =>
                prevState.map(item => {
                    if (item._id === content._id) {
                        return content;
                    }
                    return item;
                })
            );
            return content;
        } catch (error) {
            const { message } = error.response.data;
            setError(message);
        }
    };

    return (
        <QualityContext.Provider
            value={{ qualities, getQuality, updateQuality }}
        >
            {!isLoading ? children : <h1>Loading</h1>}
        </QualityContext.Provider>
    );
};
