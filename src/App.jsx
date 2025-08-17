import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";
import usePokemon from "./hooks/usePokemon";

function App() {
  const { data, loading, error } = usePokemon(7);

  return (
    <>
      <div className="relative min-h-screen bg-neutral-900">
        <div className="max-w-xl mx-auto p-6">
          <Header
            title="Random Pokemon"
            onRandomise={() => console.log("clicked")}
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
