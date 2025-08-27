import { TYPE_COLOURS } from "../utilities/pokemonTypeColours";

// Card container for sprite, variable background for Pokemon type
export default function Card({ children, types = [] }) {
  // Resolve types safely
  const t1 = types[0]?.type?.name || "normal";
  const t2 = types[1]?.type?.name || t1;

  // Resolve colours with fallbacks
  const c1 = TYPE_COLOURS[t1] || "#9FA19F";
  const c2 = TYPE_COLOURS[t2] || c1;

  // Check for dual typing
  const isDual = t1 !== t2;

  // Variable background
  const bg = isDual
    ? `linear-gradient(45deg, ${c1} 40%, ${c2} 60%)`
    : `linear-gradient(45deg, ${c1} 57%, #FFFFFF 100%)`;

  return (
    <section
      className="rounded-2xl p-6 border border-white/70 hover:border-white transition-colors duration-300"
      style={{
        background: bg,
      }}
    >
      {children}
    </section>
  );
}
