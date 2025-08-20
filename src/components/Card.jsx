const TYPE_COLOURS = {
  bug: "#91A119",
  dark: "#624D4E",
  dragon: "#5060E1",
  electric: "#FAC000",
  fairy: "#EF70EF",
  fighting: "#EF70EF",
  fire: "#E62829",
  flying: "#81B9EF",
  ghost: "#704170",
  grass: "#3FA129",
  ground: "#915121",
  ice: "#3DCEF3",
  normal: "#9FA19F",
  poison: "#9141CB",
  psychic: "#EF4179",
  rock: "#AFA981",
  steel: "#60A1B8",
  water: "#2980EF",
};

export default function Card({ children, types = [] }) {
  const t1 = types[0]?.type?.name || "normal";
  const t2 = types[1]?.type?.name || t1;

  const c1 = TYPE_COLOURS[t1] || "#9FA19F";
  const c2 = TYPE_COLOURS[t2] || c1;

  return (
    <section
      className="rounded-2xl p-6 border border-white/30 hover:border-white transition-colors duration-300"
      style={{
        background: `linear-gradient(-50deg, ${c1} 0%, ${c2} 80%)`,
      }}
    >
      {children}
    </section>
  );
}
