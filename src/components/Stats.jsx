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
  if (!Array.isArray(stats) || stats.length === 0) return null;

  let statTotal = 0;

  stats.map((item, index) => {
    Object.entries(item).map(([key, value]) => {
      if (key === "base_stat") {
        statTotal += value;
      }
    });
  });
}
