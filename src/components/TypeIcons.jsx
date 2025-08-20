import "./TypeIcons.css";
import { TYPE_ICONS } from "../utilities/pokemonTypes";

export default function TypeIcons({ types = [] }) {
  return (
    <div className="flex gap-5 justify-center mt-8">
      {types.map((t) => (
        <div key={t.type.name} className={`icon ${t.type.name}`}>
          <img src={TYPE_ICONS[t.type.name]} alt={t.type.name} loading="lazy" />
        </div>
      ))}
    </div>
  );
}
