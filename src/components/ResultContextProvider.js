import React, { createContext, useContext, useState } from 'react';
const ResultContext = createContext();
const baseUrl = "https://google-search74.p.rapidapi.com";

export const ResultContextProvider = ({ children }) => {    
    const [results, setResults] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');

    const getResults = async (type) => {
        setIsLoading(true);

        const url = `${baseUrl}${type}`;
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'aac0cbe9cdmsheb7d1c93a3db71fp145beejsn3ea592a14206',
                'X-RapidAPI-Host': 'google-search74.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const results = await response.json();
            console.log(results);
            setResults(results);
        } catch (error) {
            console.error(error);
        }
        setIsLoading(false);
    }

    return (
        <ResultContext.Provider value={{ getResults, results, searchTerm, setSearchTerm, isLoading }}>
            {children}
        </ResultContext.Provider>
    )
}

export const useResultContext = () => useContext(ResultContext);
