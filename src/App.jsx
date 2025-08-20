import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import usePokemon from "./hooks/usePokemon";
import TypeIcons from "./components/TypeIcons";

function App() {
  const getRandomId = () => {
    const min = 1;
    const max = 1025;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  const [id, setId] = useState(null);
  const { data: pokemonData, loading, error } = usePokemon(id);

  useEffect(() => {
    setId(getRandomId());
  }, []);

  const handleRandomise = () => {
    setId(getRandomId());
  };

  const sprite = pokemonData?.sprites?.front_default ?? null;

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
            {!loading && !error && pokemonData && (
              <div className="flex flex-col items-center">
                <img src={sprite} className="w-44 h-44" />
                <p className="capitalize font-bold">{pokemonData.name}</p>
                <TypeIcons types={pokemonData.types} />
              </div>
            )}
          </Card>
        </div>
      </div>
    </>
  );
}

export default App;
