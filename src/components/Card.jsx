export default function Card({ children }) {
  return (
    <section className="rounded-2xl p-6 border border-white/30 hover:border-white transition-colors duration-300">
      {children}
    </section>
  );
}
