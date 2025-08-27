import { useState, useEffect } from "react";

// Hook to fetch pokemon data by inputted ID
export default function usePokemon(id) {
    const [data, setData] = useState(null); // API response
    const [loading, setLoading] = useState(true); // Loading state
    const [error, setError] = useState(null); // Error message

    useEffect(() => {
        // Set inital states to null before ID is selected
        if (!id) {
            setData(null);
            setLoading(null);
            setError(null);
            return;
        };

        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
        // Async fetch for Pokemon
        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setData(json);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        }
    
        fetchData();
    }, [id]); // Run again if ID is changed

    return { data, loading, error };
}
