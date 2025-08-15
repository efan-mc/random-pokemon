import { useState } from "react";
import "./App.css";
import Header from "./components/Header";
import Card from "./components/Card";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="relative min-h-screen bg-neutral-900">
        <div className="max-w-xl mx-auto p-6">
          <Header
            title="Random Pokemon"
            onRandomise={() => console.log("clicked")}
          />
          <Card>Card Content...</Card>
        </div>
      </div>
    </>
  );
}

export default App;
