import { useState } from "react";

const MAX_STAT = 255;
const LABELS = {
  hp: "HP",
  attack: "Attack",
  defense: "Defense",
  "special-attack": "Sp. Atk",
  "special-defense": "Sp. Def",
  speed: "Speed",
};
const STAT_COLOURS = {
  hp: "#69dc12",
  attack: "#efcc18",
  defense: "#e86412",
  "special-attack": "#14c3f1",
  "special-defense": "#4a6adf",
  speed: "#d51dad",
};

export default function Stats({ stats = [] }) {
  const [isVisible, setIsVisible] = useState(false);

  if (!Array.isArray(stats) || stats.length === 0) return null;

  let statTotal = 0;

  stats.map((item) => {
    Object.entries(item).map(([key, value]) => {
      if (key === "base_stat") {
        statTotal += value;
      }
    });
  });

  const toggleStats = () => {
    setIsVisible(!isVisible);
  };

  return (
    <div className="pt-8">
      <h3 className="font-semibold uppercase opacity-90">Base Stats</h3>
      <button
        onClick={toggleStats}
        className="px-5 pt-5 rounded-2xl border border-white/30 hover:border-white transition-colors active:scale-95"
      >
        {isVisible ? "Hide" : "Show"}
      </button>
      {isVisible && (
        <div>
          {stats.map((item, index) => {
            const name = item.stat.name;
            const value = item.base_stat;
            const label = LABELS[name] ?? name;
            const colour = STAT_COLOURS[name] ?? "#69dc12";
            const pct = Math.min(100, Math.round((value / MAX_STAT) * 100));

            return (
              <div key={index}>
                <div className="flex items-baseline justify-between mb-1">
                  <span className="text-sm">{label}</span>
                  <span className="text-sm tabular-nums">{value}</span>
                </div>
                <div className="h-2 rounded-full bg-white/15 overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-300"
                    style={{ width: `${pct}%`, backgroundColor: colour }}
                  />
                </div>
              </div>
            );
          })}
          <div className="pt-2">
            <span className="text-sm">Total: </span>
            <span className="tabular-nums">{statTotal}</span>
          </div>
        </div>
      )}
    </div>
  );
}
