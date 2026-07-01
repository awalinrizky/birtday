export default function Footer() {
  return (
    <footer className="bg-wine-deep text-paper py-20">
      <div className="max-w-6xl mx-auto text-center px-6">

        <div className="monogram-seal w-14 h-14 text-xl mx-auto">R&I</div>

        <h2
          className="text-3xl md:text-4xl mt-6"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Our Little Place
        </h2>

        <p className="mt-4 text-paper/70">
          Every memory deserves a forever home.
        </p>

        <div className="mt-10 text-xs uppercase tracking-[2px] text-paper/50">
          Made with love, for Icaa — by Rizky
        </div>

      </div>
    </footer>
  );
}
