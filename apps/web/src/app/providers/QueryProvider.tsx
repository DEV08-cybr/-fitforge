import React, { createContext, useContext, useState, useEffect } from 'react';

const QueryContext = createContext();

export const QueryProvider = ({ children }) => {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchData = async (url) => {
        setLoading(true);
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const result = await response.json();
            setData(result);
        } catch (err) {
            setError(err);
        } finally {
            setLoading(false);
        }
    };

    useEffect(() => {
        // Example fetch call, replace with actual API endpoint
        fetchData('/api/data');
    }, []);

    return (
        <QueryContext.Provider value={{ data, loading, error, fetchData }}>
            {children}
        </QueryContext.Provider>
    );
};

export const useQuery = () => {
    return useContext(QueryContext);
};