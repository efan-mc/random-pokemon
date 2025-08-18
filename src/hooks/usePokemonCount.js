import { useEffect, useState } from "react";

export default function usePokemonCount() {
    const [count, setCount] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const url = "https://pokeapi.co/api/v2/pokemon?limit=1"

        const fetchData = async () => {
            try {
                setLoading(true);
                const response = await fetch(url);
                const json = await response.json();
                setCount(json.count);
            } catch (error) {
                setError(error.message);
            } finally {
                setLoading(false);
            }
        } 

        fetchData();
    }, []);

    return { count, loading, error }; 
}