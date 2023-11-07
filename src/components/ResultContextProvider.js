import React, { createContext, useContext, useState } from 'react';
const ResultContext = createContext();
const baseUrl = "https://google-web-search1.p.rapidapi.com/";

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
                'X-RapidAPI-Key': '2fc547931cmshf7a783f3518af57p149a69jsn0c90329c8145',
                'X-RapidAPI-Host': 'google-web-search1.p.rapidapi.com'
            }
        };
        
        try {
            const response = await fetch(url, options);
            const results = await response.json();
            console.log(results);
            setResults(results);
        } catch (error) {
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
