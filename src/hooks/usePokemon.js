import { useState, useEffect } from "react";

export default function usePokemon(id) {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (!id) {
            setData(null);
            setLoading(null);
            setError(null);
            return;
        };

        const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
    
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
    }, [id]);

    return { data, loading, error };
}
