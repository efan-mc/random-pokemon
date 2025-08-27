import { useState, useEffect } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import usePokemon from "./hooks/usePokemon";
import TypeIcons from "./components/TypeIcons";
import Stats from "./components/Stats";

function App() {
  const [id, setId] = useState(null); // Pokemon ID
  const { data: pokemonData, loading, error } = usePokemon(id); // Data fetched from API
  const [isShiny, setIsShiny] = useState(false); // Shiny toggle

  // Generate random Pokemon ID
  const getRandomId = () => {
    const min = 1;
    const max = 1025;
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  // Get random Pokemon on first load
  useEffect(() => {
    setId(getRandomId());
  }, []);

  // Randomise pokemon button handler
  const handleRandomise = () => {
    setId(getRandomId());
  };

  // Extract data safely
  const sprite = pokemonData?.sprites?.front_default ?? null;
  const spriteShiny = pokemonData?.sprites?.front_shiny ?? null;
  const types = pokemonData?.types ?? [];
  const stats = pokemonData?.stats ?? [];
  // Checks for shiny toggle
  const displayedSprite = isShiny && spriteShiny ? spriteShiny : sprite;

  return (
    <>
      <div className="relative min-h-screen bg-neutral-900">
        <div className="max-w-xl mx-auto p-6">
          {/* Header component with shiny and randomise controls */}
          <Header
            title="Random Pokemon"
            onRandomise={() => handleRandomise()}
            isShiny={isShiny}
            onToggleShiny={() => setIsShiny((v) => !v)}
          />
          {/* Card component Pokemon info */}
          <Card types={types}>
            {loading && <p>loading...</p>}
            {error && <p className="text-red-500">{error}</p>}
            {!loading && !error && pokemonData && (
              <div className="flex flex-col items-center">
                {/* Pokemon sprite changes if shiny */}
                <img
                  src={displayedSprite}
                  className="w-44 h-44"
                  alt={`${pokemonData.name} sprite`}
                />
                <p className="capitalize font-bold text-xl mt-4">
                  {pokemonData.name}
                </p>
                <TypeIcons types={types} />
              </div>
            )}
          </Card>
          <div>
            <Stats stats={stats} />
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
