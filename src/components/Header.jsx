export default function Header({ title, onRandomise }) {
  return (
    <header className="flex flex-col gap-2 mb-4">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
      <button
        onClick={onRandomise}
        className="px-5 py-2.5 rounded-2xl border border-white/30 hover:border-white transition-colors duration-300 active:scale-95 focus-visible:outline-white/50 focus:outline-none"
      >
        Randomise
      </button>
    </header>
  );
}
