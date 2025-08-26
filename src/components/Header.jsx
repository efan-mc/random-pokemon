import starOn from "/icons/starOn.svg";
import starOff from "/icons/starOff.svg";

export default function Header({ title, onRandomise, isShiny, onToggleShiny }) {
  return (
    <header className="flex flex-col gap-2 mb-4">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
      <div className="flex items-center gap-3">
        <button
          onClick={onRandomise}
          className="flex-[4] px-5 py-2.5 rounded-2xl border border-white/30 hover:border-white transition-colors duration-300 active:scale-95 focus-visible:outline-white/50 focus:outline-none"
        >
          Randomise
        </button>
        <button
          onClick={onToggleShiny}
          className="flex-[1] py-2.5 rounded-2xl border border-white/30 hover:border-white transition-colors duration-300 active:scale-95 focus-visible:outline-white/50 focus:outline-none flex items-center justify-center"
        >
          <img
            src={isShiny ? starOn : starOff}
            className="w-5 h-5"
            alt="Shiny toggle"
          />
        </button>
      </div>
    </header>
  );
}
