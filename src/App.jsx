import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import usePokemon from "./hooks/usePokemon";
import usePokemonCount from "./hooks/usePokemonCount";

function App() {
  const [id, setId] = useState(null);

  const {
    count: pokemonCount,
    loading: countLoading,
    error: countError,
  } = usePokemonCount();

  const {
    data: pokemonData,
    loading: pokemonLoading,
    error: pokemonError,
  } = usePokemon(id);

  function getRandomId(max) {
    const min = 1;
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  useEffect(() => {
    if (pokemonCount && id == null) {
      setId(getRandomId(pokemonCount));
    }
  }, [pokemonCount, id]);

  return (
    <>
      <div className="relative min-h-screen bg-neutral-900">
        <div className="max-w-xl mx-auto p-6">
          <Header
            title="Random Pokemon"
            onRandomise={() => handleRandomise()}
          />
          <Card>
            {loading && <p>loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {data && <p>{data.name}</p>}
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
