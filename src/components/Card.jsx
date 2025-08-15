export default function Card({ children }) {
  return (
    <section className="rounded-2xl p-6 border border-indigo-300/30 hover:shadow-xl hover:shadow-indigo-500/10 transition">
      {children}
    </section>
  );
}
