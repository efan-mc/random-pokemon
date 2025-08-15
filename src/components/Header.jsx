export default function Header({ title, onRandomise }) {
  return (
    <header className="flex flex-col gap-2 mb-4">
      <h1 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h1>
      <button
        onClick={onRandomise}
        className="px-5 py-2.5 rounded-2xl bg-white/10 hover:bg-white/20 active:scale-95 transition focus-visible:outline-white/50"
      >
        Randomise
      </button>
    </header>
  );
}
